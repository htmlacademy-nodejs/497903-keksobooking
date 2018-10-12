const loader = require(`./src/loader`);

const currentCommand = process.argv[2];

loader(currentCommand);
