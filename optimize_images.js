const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = './src/assets/images';
const targetDir = './optimized_images';

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(sourceDir)
  .filter(file => /\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/i.test(file));

console.log(`Found ${imageFiles.length} image files to optimize`);

// Process each image
imageFiles.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);
  
  // Get file stats
  const stats = fs.statSync(sourcePath);
  const fileSizeMB = stats.size / (1024 * 1024);
  
  console.log(`Processing ${file} (${fileSizeMB.toFixed(2)} MB)`);
  
  try {
    // Use sharp to resize and optimize the image
    // For large images (>5MB), reduce quality and size more aggressively
    if (fileSizeMB > 5) {
      execSync(`sharp --input ${sourcePath} --output ${targetPath} resize 1200 --withoutEnlargement --quality 70`);
    } else {
      execSync(`sharp --input ${sourcePath} --output ${targetPath} resize 1600 --withoutEnlargement --quality 80`);
    }
    
    // Check the new file size
    if (fs.existsSync(targetPath)) {
      const newStats = fs.statSync(targetPath);
      const newFileSizeMB = newStats.size / (1024 * 1024);
      const reduction = ((1 - (newFileSizeMB / fileSizeMB)) * 100).toFixed(2);
      
      console.log(`  Optimized: ${newFileSizeMB.toFixed(2)} MB (${reduction}% reduction)`);
    } else {
      console.log(`  Failed to create optimized version`);
    }
  } catch (error) {
    console.error(`  Error processing ${file}: ${error.message}`);
  }
});

console.log('Image optimization complete!');
