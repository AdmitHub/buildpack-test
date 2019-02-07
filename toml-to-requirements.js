#!/usr/bin/env node

const toml = require('toml');
const fs = require('fs');

const file_path = process.argv[2]
// console.log(process.argv)
const packages = toml.parse(fs.readFileSync(file_path).toString())

const requirements = packages['package'].map(x => x['name'] + '==' + x['version']).join('\n')
console.log(requirements)
