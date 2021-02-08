const path = require('path');

console.log(path.dirname(process.require.main.filename));
module.exports = path.dirname(process.require.main.filename);