import chalk from 'chalk';
import { exec } from 'child_process';

export const performManualUpdate = (stash: boolean) => {
  if (stash) {
    console.log('Stash in progres...');
    exec('git stash', (err: any, stdout: any, stderr: any) => {
      if (err) {
        console.log(chalk.red("Error when executing 'git stash'"));
      }

      console.log('Pull in progress...');
      exec('git pull', (err: any, stdout: any, stderr: any) => {
        if (err) {
          console.log(chalk.red('Error when pulling repository'));
        }

        console.log('installing dependencies...');
        exec('npm install', (err: any, stdout: any, stderr: any) => {
          if (err) {
          }

          console.log('stash restoration in progres...');
          exec('git stash pop', (err: any, stdout: any, stderr: any) => {
            if (err) {
            }

            console.log('Update finished successfuly');
          });
        });
      });
    });
  } else {
    console.log('Pull in progress...');
    exec('git pull', (err: any, stdout: any, stderr: any) => {
      if (err) {
        console.log(chalk.red('Error when pulling repository'));
      }

      console.log('installing dependencies...');
      exec('npm install', (err: any, stdout: any, stderr: any) => {
        if (err) {
        }

        console.log('Update finished successfuly');
      });
    });
  }
};
