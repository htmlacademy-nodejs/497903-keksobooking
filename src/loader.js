const author = require(`./author`);
const description = require(`./description`);
const help = require(`./help`);
const license = require(`./license`);
const unknown = require(`./unknown`);
const version = require(`./version`);

const cmdKeyAll = [
  author,
  description,
  help,
  license,
  unknown,
  version
];

module.exports = function (arg) {
  const cmdKey = cmdKeyAll.find((item) => `--${item.name}` === arg);

  if (cmdKey) {
    cmdKey.execute();
  } else if (cmdKey === help) {
    help.execute();
    process.exit(1);
  } else {
    unknown.execute();
  }
};
