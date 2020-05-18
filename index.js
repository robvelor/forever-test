const forever = require('forever-monitor');
const { sleep, log } = require('./helper');
// const spawn = require('spawnly');

const main = () => {
  /* const cp = spawn('node_modules/.bin/forever -c node api.js', {
    stdio: 'inherit',
    detached: false,
  });

  cp.on('error', err => console.error(err)); */

  const cp = new forever.Monitor('./api.js');

  cp.on('restart', async () => {
    console.log(new Date(), `Forever restarting script for ${cp.times} time(s)`);
    await sleep(5000);
    console.log(new Date(), 'Is this async?');
    await log('API was restarted!');
  });

  cp.start();
};

main();
