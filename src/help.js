const findCommand = (commandKeyAll, commandKey) => {
  return commandKeyAll.find((item) => item.name === commandKey);
};

module.exports = {
  name: `help`,
  description: `Shows program help`,
  execute(commandKeyAll) {
    console.log(
        `
    Доступные команды:
    
      --${this.name.gray} — ${this.description.green};
      --${findCommand(commandKeyAll, `version`).name.gray} — ${findCommand(commandKeyAll, `version`).description.green};
      --${findCommand(commandKeyAll, `author`).name.gray} — ${findCommand(commandKeyAll, `author`).description.green};
      --${findCommand(commandKeyAll, `license`).name.gray} — ${findCommand(commandKeyAll, `license`).description.green};
      --${findCommand(commandKeyAll, `description`).name.gray} — ${findCommand(commandKeyAll, `description`).description.green};`
    );
  }
};
