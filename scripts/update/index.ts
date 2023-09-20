import chalk = require('chalk');
import ora = require('ora');

import { confirm, input } from '@inquirer/prompts';

import { checkVersions } from './check-version';
import { performAutoUpdate } from './auto-update';
import { performManualUpdate } from './manual-update';

export const startManualUpdate = () => {
  console.log(chalk.bgHex('#3f51b5').bold('Welcome to HazeCMS Update Helper'));
  console.log(' ');

  checkVersions().then(async ({ current, latest }) => {
    console.log('Your current version : v' + chalk.bold(current));
    console.log('Last version available : v' + chalk.bold(latest));
    console.log(' ');

    const stashResponse = await confirm({
      message:
        'Do we need to stash (save) your local code ? (applying it after update)',
    });

    const updateResponse = await confirm({
      message: 'Do you want to update now ?',
    });

    if (updateResponse) {
      if (stashResponse) {
        performManualUpdate(true);
      } else {
        performManualUpdate(false);
      }
    }
  });
};

export const startAutoUpdate = () => {
  checkVersions().then(async ({ current, latest }) => {
    console.log('Your current version : v' + current);
    console.log('Last version available : v' + latest);

    performAutoUpdate();
  });
};
