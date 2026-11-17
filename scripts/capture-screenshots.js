const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function capture() {
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  const artifactDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\a21e65b7-7277-4951-805a-7f8a4fd485b5';

  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch();

  // Desktop 1440px
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(800);

  const desktopPath = path.join(screenshotsDir, 'hero-desktop-1440.png');
  const artifactDesktop = path.join(artifactDir, 'hero-desktop-1440.png');
  await desktopPage.screenshot({ path: desktopPath, fullPage: false });
  fs.copyFileSync(desktopPath, artifactDesktop);
  console.log('Desktop screenshot saved:', desktopPath);

  // Mobile 375px viewport
  const mobilePage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(800);

  const mobilePath = path.join(screenshotsDir, 'hero-mobile-375.png');
  const artifactMobile = path.join(artifactDir, 'hero-mobile-375.png');
  await mobilePage.screenshot({ path: mobilePath, fullPage: false });
  fs.copyFileSync(mobilePath, artifactMobile);
  console.log('Mobile screenshot saved:', mobilePath);

  // Mobile full page to see arch image on mobile
  const mobileFullPath = path.join(screenshotsDir, 'hero-mobile-375-full.png');
  const artifactMobileFull = path.join(artifactDir, 'hero-mobile-375-full.png');
  await mobilePage.screenshot({ path: mobileFullPath, fullPage: true });
  fs.copyFileSync(mobileFullPath, artifactMobileFull);
  console.log('Mobile full screenshot saved:', mobileFullPath);

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
