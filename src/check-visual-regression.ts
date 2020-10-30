import { promises as util } from 'fs';
import * as fs from 'fs-extra';
import { exec } from 'shelljs';

const DIR_DIFF = './cypress/snapshots/diff';

const isDirEmpty = (path: string) =>
  util
    .readFile(path)
    .then((files) => files.length === 0)
    .catch(() => false);

const checkVisualRegression = async () => {
  const hasDirDiff = await fs.pathExists(DIR_DIFF);
  if (hasDirDiff) {
    console.log('XXX remove dir');
    await fs.remove(DIR_DIFF);
  }
  console.log('XXX create[] dir');
  await fs.ensureDir(DIR_DIFF);

  await exec('npm run visual:diff');

  const isDirDiffEmpty = await isDirEmpty(DIR_DIFF);

  if (isDirDiffEmpty) {
    console.log('All good! No visual differences');
  } else {
    console.error('Some visuals do not match or are failing!');
    process.exit(1);
  }
};

checkVisualRegression();
