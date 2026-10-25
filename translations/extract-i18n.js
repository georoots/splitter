'use strict';

const path = require('path');
const { writeExports } = require('./extract-i18n-lib.js');

writeExports({
    html: path.join(__dirname, '..', 'splitter.html'),
    format: 'inline-js',
    dataVar: 'I18N_SPLITTER_DATA',
});
