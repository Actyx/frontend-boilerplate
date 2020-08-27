import { echo, exec } from 'shelljs';

import { DEVELOPER_SITE } from './settings';

echo('Checking links:');

exec(`npx blc ${DEVELOPER_SITE} -ro --color always`);
