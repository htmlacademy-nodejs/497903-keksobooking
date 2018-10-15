module.exports = {
  name: `unknown`,
  description: `Shows program unknown`,
  execute() {
    console.log(`Команда не определена.`.red + ` Наберите ` + `--help`.green + ` для вывода списка команд.`);
  }
};
