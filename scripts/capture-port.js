const { spawn } = require('child_process');
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const section = process.argv[2] || 'latest';
const PORT = 3009;

async function run() {
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  const artifactDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\a21e65b7-7277-4951-805a-7f8a4fd485b5';

  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  // Start next on port 3009
  console.log(`Starting next on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-p', PORT.toString()], {
    shell: true,
    stdio: 'pipe',
  });

  // Wait for server to be ready
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(), 4000);
    server.stdout.on('data', data => {
      const msg = data.toString();
      console.log(msg.trim());
      if (msg.includes('Ready') || msg.includes('started')) {
        clearTimeout(timer);
        resolve();
      }
    });
    server.on('error', reject);
  });

  console.log('Opening Playwright browser...');
  const browser = await chromium.launch();

  // Desktop 1440px
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  await desktopPage.goto(`http://localhost:${PORT}`, { waitUntil: 'domcontentloaded' });
  await desktopPage.waitForTimeout(1000);

  const desktopPath = path.join(screenshotsDir, `${section}-desktop-1440.png`);
  const artifactDesktop = path.join(artifactDir, `${section}-desktop-1440.png`);
  await desktopPage.screenshot({ path: desktopPath, fullPage: true });
  fs.copyFileSync(desktopPath, artifactDesktop);
  console.log('Desktop screenshot saved:', desktopPath);

  // Mobile 375px
  const mobilePage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  await mobilePage.goto(`http://localhost:${PORT}`, { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(1000);

  const mobilePath = path.join(screenshotsDir, `${section}-mobile-375.png`);
  const artifactMobile = path.join(artifactDir, `${section}-mobile-375.png`);
  await mobilePage.screenshot({ path: mobilePath, fullPage: true });
  fs.copyFileSync(mobilePath, artifactMobile);
  console.log('Mobile screenshot saved:', mobilePath);

  await browser.close();

  // Kill server
  console.log('Killing test server...');
  if (process.platform === 'win32') {
    spawn('taskkill', ['/pid', server.pid.toString(), '/f', '/t']);
  } else {
    server.kill();
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
