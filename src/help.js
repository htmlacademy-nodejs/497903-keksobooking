const findCommand = (commandKeyAll, commandKey) => {
  return commandKeyAll.find((item) => item.name === commandKey);
};

module.exports = {
  name: `help`,
  description: `Shows program help`,
  execute(commandKeyAll) {
    console.log(`
    Доступные команды:
      --${this.name} — ${this.description};
      --${findCommand(commandKeyAll, `version`).name} — ${findCommand(commandKeyAll, `version`).description};
      --${findCommand(commandKeyAll, `author`).name} — ${findCommand(commandKeyAll, `author`).description};
      --${findCommand(commandKeyAll, `license`).name} — ${findCommand(commandKeyAll, `license`).description};
      --${findCommand(commandKeyAll, `description`).name} — ${findCommand(commandKeyAll, `description`).description};
    `);
  }
};
