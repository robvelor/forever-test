const { sleep, log } = require('./helper');

const main = async () => {
  const exitProcess = (eventType, code) => {
    console.log(new Date(), 'exitProcess', eventType, code);
    process.exit();
  };

  ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM'].forEach(eventType => {
    process.on(eventType, code => exitProcess(eventType, code));
  });

  await log('Running API!');
  console.log(new Date(), 'Running API for 30 seconds');
  await sleep(30000);
};

main();
