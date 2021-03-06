#!/usr/bin/env node
import { program } from 'commander';
import serve from '@ladle/react/api/serve.js';
import build from '@ladle/react/api/build.js';

/**
 * @param {string} n
 */
const strToInt = (n) => parseInt(n, 10);

program.showHelpAfterError().showSuggestionAfterError();

program
  .command('serve')
  .description('start developing')
  .option('--stories [string]', 'glob to find stories ===')
  .option('--port [number]', 'port to serve the application', strToInt)
  .option('--theme [string]', 'theme light, dark or auto')
  .option('--open [string]', 'open browser, e.g. chrome, firefox, safari. Set none to disable')
  .option('--config [string]', 'folder where config is located, default .ladle')
  .action(async (params) => {
    const customParams = { stories: 'stories/**/*.stories.{js,jsx,ts,tsx}' };
    const serveParams = { ...customParams, serve: customParams };
    await serve(serveParams);
  });
program
  .command('build')
  .description('build static production app')
  .option('--stories [string]', 'glob to find stories')
  .option('--out <path>', 'output directory')
  .option('--sourcemap', 'generate source maps')
  .option('--theme [string]', 'theme light, dark or auto')
  .option('--base-url [string]', 'when hosted in a sub-directory, default /')
  .option('--config [string]', 'folder where config is located, default .ladle')
  .action(async (params) => {
    const success = await build({ ...params, build: params });
    if (success) {
      console.log(6677);
      process.exit(0);
    }
    process.exit(1);
  });

program.parse(process.argv);
