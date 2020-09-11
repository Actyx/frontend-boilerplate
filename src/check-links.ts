import { echo, exec } from 'shelljs';

import { SETTINGS } from './settings';

const mode = process.argv[2] as 'prod';
const site = process.argv[3] as 'developer' | 'main' | 'download';

echo(`Checking links: ${mode} ${site}`);

exec(`npx blc ${SETTINGS[mode][site]} -ro ${mode === 'prod' && '-e'} --color always`);
