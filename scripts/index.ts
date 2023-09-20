import { startAutoUpdate } from './update';

const { startManualUpdate } = require('./update/index');

if (process.argv.length < 3) {
  console.error('Please provide a function name to execute');
} else {
  const functionName = process.argv[2];

  switch (functionName) {
    case 'manual-update':
      startManualUpdate();
      break;
    case 'auto-update':
      startAutoUpdate();
      break;

    default:
      console.log(
        "The exported function '" + functionName + "' doesn't exists"
      );
      break;
  }
}
