/**
 * Convert animated WebP files to MP4 and concatenate them.
 * Usage: node convert-demo.js
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ffmpegPath = 'C:\\Users\\Hp\\AppData\\Roaming\\npm\\node_modules\\ffmpeg-static\\ffmpeg.exe';
const outDir = path.join(__dirname);

// Files to process in order
const recordings = [
    { file: 'landing_page_demo.webp', label: 'Landing Page' },
    { file: 'dashboard_alerts_demo.webp', label: 'Dashboard & Map' },
    { file: 'contacts_ai_demo.webp', label: 'Contacts & AI' },
];

// Step 1: Extract frames from each WebP file, re-encode individually
const partFiles = [];

recordings.forEach((rec, idx) => {
    const input = path.join(outDir, rec.file);
    const output = path.join(outDir, `part_${idx}.mp4`);
    
    if (!fs.existsSync(input)) {
        console.log(`Skipping ${rec.file} - file not found`);
        return;
    }

    const size = fs.statSync(input).size;
    if (size < 50000) { // Skip files smaller than 50KB (likely broken)
        console.log(`Skipping ${rec.file} - too small (${size} bytes)`);
        return;
    }

    console.log(`Processing ${rec.file} (${(size / 1024 / 1024).toFixed(2)} MB)...`);

    try {
        // Try using image2 demuxer with webp decoder
        execSync(
            `"${ffmpegPath}" -y -f image2 -framerate 5 -i "${input}" -c:v libx264 -pix_fmt yuv420p -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:-1:-1:color=0a1628" -r 10 "${output}"`,
            { stdio: 'pipe' }
        );
        partFiles.push(output);
        console.log(`  ✓ Created ${path.basename(output)}`);
    } catch (e) {
        console.log(`  ✗ Direct conversion failed, trying alternate method...`);
        try {
            // Alternative: skip frames with errors
            execSync(
                `"${ffmpegPath}" -y -err_detect ignore_err -i "${input}" -c:v libx264 -pix_fmt yuv420p -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:-1:-1:color=0a1628" -r 10 "${output}"`,
                { stdio: 'pipe' }
            );
            partFiles.push(output);
            console.log(`  ✓ Created ${path.basename(output)} (with error recovery)`);
        } catch (e2) {
            console.log(`  ✗ Could not convert ${rec.file}: ${e2.message?.slice(0, 100)}`);
        }
    }
});

if (partFiles.length > 0) {
    // Step 2: Concatenate all parts
    const listFile = path.join(outDir, 'parts.txt');
    fs.writeFileSync(listFile, partFiles.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n'));

    const finalOutput = path.join(outDir, 'ctrl_aid_demo.mp4');
    try {
        execSync(
            `"${ffmpegPath}" -y -f concat -safe 0 -i "${listFile}" -c copy "${finalOutput}"`,
            { stdio: 'pipe' }
        );
        console.log(`\n✅ Final demo video created: ${finalOutput}`);
        console.log(`   Size: ${(fs.statSync(finalOutput).size / 1024 / 1024).toFixed(2)} MB`);
    } catch (e) {
        console.log(`Could not concatenate: ${e.message?.slice(0, 100)}`);
    }

    // Cleanup temp files
    try { fs.unlinkSync(listFile); } catch(e) {}
} else {
    console.log('\n⚠️  No videos could be converted.');
    console.log('The animated WebP files can still be viewed in any modern browser.');
    console.log('Open demo-player.html to view the complete demo presentation.');
}

console.log('\n📹 Alternative: Open demo-player.html in a browser and use a screen recorder');
console.log('   to create the MP4 video. The HTML player includes all recordings.');
