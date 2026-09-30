const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectDir = 'C:\\Users\\haris\\.gemini\\antigravity\\scratch\\blue-fox';
const zipTargetDownloads = 'C:\\Users\\haris\\Downloads\\blue-fox.zip';
const zipTargetArtifact = 'C:\\Users\\haris\\.gemini\\antigravity\\brain\\23f98256-8721-42b1-9de6-55b0debcd5d0\\blue-fox.zip';

// Temporary staging folder
const stagingDir = 'C:\\Users\\haris\\.gemini\\antigravity\\scratch\\staging-bluefox';

if (fs.existsSync(stagingDir)) {
  fs.rmSync(stagingDir, { recursive: true, force: true });
}
fs.mkdirSync(stagingDir, { recursive: true });

// Copy source files, public images, package.json, configs, and standalone html
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    if (element === 'node_modules' || element === '.next' || element === '.git') return;
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

console.log('Staging files for Blue Fox...');
copyFolderSync(projectDir, stagingDir);

// Copy standalone html directly into root of package
const standaloneHtml = 'C:\\Users\\haris\\Downloads\\blue-fox.html';
if (fs.existsSync(standaloneHtml)) {
  fs.copyFileSync(standaloneHtml, path.join(stagingDir, 'blue-fox-standalone.html'));
  fs.copyFileSync(standaloneHtml, path.join(stagingDir, 'index.html'));
}

console.log('Compressing into ZIP using PowerShell...');
const psCommand = `Compress-Archive -Path "${stagingDir}\\*" -DestinationPath "${zipTargetDownloads}" -Force`;
execSync(`powershell -Command "${psCommand}"`, { stdio: 'inherit' });

// Copy to artifact directory
fs.copyFileSync(zipTargetDownloads, zipTargetArtifact);

console.log(`Successfully created ZIP at ${zipTargetDownloads} and ${zipTargetArtifact}!`);

// Clean staging
fs.rmSync(stagingDir, { recursive: true, force: true });
