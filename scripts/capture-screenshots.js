const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const section = process.argv[2] || 'latest';

async function capture() {
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  const artifactDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\a21e65b7-7277-4951-805a-7f8a4fd485b5';

  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch();

  // Desktop 1440px
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 1050 },
    deviceScaleFactor: 2,
  });
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await desktopPage.waitForTimeout(600);

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
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(600);

  const mobilePath = path.join(screenshotsDir, `${section}-mobile-375.png`);
  const artifactMobile = path.join(artifactDir, `${section}-mobile-375.png`);
  await mobilePage.screenshot({ path: mobilePath, fullPage: true });
  fs.copyFileSync(mobilePath, artifactMobile);
  console.log('Mobile screenshot saved:', mobilePath);

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
