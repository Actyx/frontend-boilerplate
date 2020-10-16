
# End to end testing for Actyx websites (production)

This project performs automatic testing on Actyx websites iun production. It aims to catch common issues like broken links, not working web forms, and so on.

| Script                             | Description                                                 |
|------------------------------------|-------------------------------------------------------------|
| npm run evaluate                   | Run end to end testing and link checker                     |
| npm run links:check:prod           | Check for broken links across all Actyx websites            |
| npm run links:check:prod:developer | Check for broken links across <https://developer.actyx.com> |
| npm run links:check:prod:main      | Check for broken links across <https://www.actyx.com>       |
| npm run links:check:prod:download  | Check for broken links across <https://download.actyx.com>  |

## Caveats

- Only URLs which are server-rendered in the DOM will be followed by the link checker

# End to end testing for Actyx websites (developer environment)

Perform the same test as above but locally, useful when developing new features.
In order to run e2e, you need to build each website locally and set some global variables..
You need to have a local server installed, please use: `npm install --global http-server`.

## Build locally downloads.actyx.com

- Go to downloads.actyx.com folder and run `npm run build`
- Enter the public folder `cd ./public`
- Run website locally: `npx http-server -p 8081`
- Switch to this repository and export some global variable: `export AX_WEB_E2E_DOWNLOAD='http://localhost:8081'`
- Now you can run tests using: `links:check:dev:download`

## Build locally www.actyx.com

- Go to www.actyx.com folder and run `npm run build`
- Run website locally: `npm run serve`
- Switch to this repository and export some global variable: `export AX_WEB_E2E_MAIN='http://localhost:9000'`
- Now you can run tests using: `links:check:dev:main`

## Build locally developer.actyx.com

- Go to developer.actyx.com folder and run `npm run build`
- Enter the public folder `cd ./build`
- Run website locally: `npx http-server -p 8082`
- Switch to this repository and export some global variable: `export AX_WEB_E2E_DEVELOPER='http://localhost:8082'`
- Now you can run tests using: `links:check:dev:developer`
