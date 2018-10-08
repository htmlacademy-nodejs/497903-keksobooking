const fndCmd = (cmdKeyAll, cmdKey) => {
  return cmdKeyAll.find((item) => item.name === cmdKey);
};

module.exports = {
  name: `help`,
  description: `Shows program help`,
  execute(cmdKeyAll) {
    console.log(`
    Доступные команды:
      --${this.name} — ${this.description};
      --${fndCmd(cmdKeyAll, `version`).name} — ${fndCmd(cmdKeyAll, `version`).description};
      --${fndCmd(cmdKeyAll, `author`).name} — ${fndCmd(cmdKeyAll, `author`).description};
      --${fndCmd(cmdKeyAll, `license`).name} — ${fndCmd(cmdKeyAll, `license`).description};
      --${fndCmd(cmdKeyAll, `description`).name} — ${fndCmd(cmdKeyAll, `description`).description};
    `);
  }
};
