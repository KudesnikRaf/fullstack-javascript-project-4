#!/usr/bin/env node
import { Command } from 'commander'; 
import loadPage from '../src/index.js';

const program = new Command();

program 
  .name('page-loader')
  .description('Page loader utility')
  .version('1.0.0', '-V, --version', 'output the version number')
  .arguments('<url>')
  .action((url, options) => {
    loadPage(url);
    console.log(options);
  });

  program.parse();

