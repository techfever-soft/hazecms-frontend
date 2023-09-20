import axios = require('axios');
import fs = require('fs');
import xmlParser = require('fast-xml-parser');

import * as rootPackageJson from '../../package.json';

import chalk = require('chalk');
import ora = require('ora');

const checkLastVersion = () => {
  return new Promise((resolve, reject) => {
    axios.default
      .get('https://api.hazecms.com/v1/version/getChangelog')
      .then((response) => {
        const changelogUrl = response.data.data[0];

        axios.default.get(changelogUrl).then((xmlResponse) => {
          const rawXML = xmlResponse.data as string;

          const parser = new xmlParser.XMLParser();
          const xmlObject = parser.parse(rawXML);

          const changelogObject = xmlObject.changelogs as any;
          const changelogArray = changelogObject.changelog as any[];

          const xmlOrdered = changelogArray.sort((a, b) => b.date - a.date);

          const lastVersionTag = xmlOrdered[0].version;

          resolve(lastVersionTag);
        });
      });
  });
};

const checkCurrentVersion = () => {
  return new Promise((resolve, reject) => {
    resolve(rootPackageJson.version);
  });
};

export const checkVersions = () => {
  return new Promise(async (resolve, reject) => {
    const checkVersionSpinner = ora(
      chalk.bold('Checking current & last version...')
    ).start();

    const lastVersionTag = await checkLastVersion();
    const currentVersionTag = await checkCurrentVersion();

    if (lastVersionTag && currentVersionTag) {
      checkVersionSpinner.succeed('Versions checked');
      console.log(' ');
      if (lastVersionTag === currentVersionTag) {
        console.log('No need to update, you already have the latest version');
      } else {
        resolve({
          current: currentVersionTag,
          latest: lastVersionTag,
        });
      }
    }
  });
};
