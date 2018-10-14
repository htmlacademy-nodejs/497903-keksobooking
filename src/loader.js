const author = require(`./author`);
const description = require(`./description`);
const help = require(`./help`);
const license = require(`./license`);
const unknown = require(`./unknown`);
const version = require(`./version`);
const welcome = require(`./welcome`);

const commandKeyAll = [
  author,
  description,
  help,
  license,
  unknown,
  version
];

module.exports = function (currentCommand) {
  const commandKey = commandKeyAll.find((item) => `--${item.name}` === currentCommand);

  if (commandKey) {
    commandKey.execute(commandKeyAll);
  } else if (!currentCommand) {
    welcome.execute();
  } else if (commandKey !== currentCommand) {
    commandKeyAll.find((item) => item.name === `unknown`).execute();
    process.exit(1);
  }
};
