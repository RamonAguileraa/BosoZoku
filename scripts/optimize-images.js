const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const outputDir = path.join(process.cwd(), 'public', 'optimized');

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Función para optimizar una imagen
async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Configuración por defecto
    const defaultOptions = {
      quality: 80,
      width: metadata.width,
      height: metadata.height,
      format: 'webp'
    };

    const finalOptions = { ...defaultOptions, ...options };

    await image
      .resize(finalOptions.width, finalOptions.height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({ quality: finalOptions.quality })
      .toFile(outputPath);

    console.log(`✅ Optimizada: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizando ${inputPath}:`, error);
  }
}

// Función principal
async function main() {
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    if (file === 'optimized') continue;
    
    const inputPath = path.join(publicDir, file);
    const stats = fs.statSync(inputPath);
    
    if (stats.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
      const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
      
      // Configuración específica para og-image
      if (file === 'logoredesbosozoku.png') {
        await optimizeImage(inputPath, path.join(publicDir, 'og-image.jpg'), {
          width: 1200,
          height: 630,
          quality: 90,
          format: 'jpg'
        });
      }
      
      // Optimizar todas las imágenes
      await optimizeImage(inputPath, outputPath);
    }
  }
}

main().catch(console.error); 