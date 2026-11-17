const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = 3009;

async function audit() {
  console.log('Starting production server for Lighthouse on port', PORT);
  const server = spawn('npx', ['next', 'start', '-p', PORT.toString()], {
    shell: true,
    stdio: 'pipe',
  });

  // Wait for server to start
  await new Promise((resolve) => {
    const timer = setTimeout(resolve, 3500);
    server.stdout.on('data', data => {
      const msg = data.toString();
      if (msg.includes('Ready') || msg.includes('started')) {
        clearTimeout(timer);
        resolve();
      }
    });
  });

  console.log('Running Lighthouse CLI audit...');
  try {
    const reportPath = path.join(__dirname, '..', 'lighthouse-report.json');
    execSync(`npx lighthouse http://localhost:${PORT} --output=json --output-path="${reportPath}" --chrome-flags="--headless --no-sandbox" --only-categories=performance,accessibility,best-practices,seo --quiet`, {
      stdio: 'inherit',
    });

    if (fs.existsSync(reportPath)) {
      const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      const categories = data.categories;
      console.log('================ LIGHTHOUSE SCORES ================');
      console.log('Performance:   ', Math.round(categories.performance.score * 100));
      console.log('Accessibility: ', Math.round(categories.accessibility.score * 100));
      console.log('Best Practices:', Math.round(categories['best-practices'].score * 100));
      console.log('SEO:           ', Math.round(categories.seo.score * 100));
      console.log('===================================================');
    }
  } catch (err) {
    console.error('Audit run error:', err.message);
  } finally {
    console.log('Stopping server...');
    if (process.platform === 'win32') {
      execSync(`taskkill /pid ${server.pid} /f /t 2>nul || true`, { shell: 'cmd.exe' });
    } else {
      server.kill();
    }
  }
}

audit();
