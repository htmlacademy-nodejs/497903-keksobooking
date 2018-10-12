const packageInfo = require(`../package.json`);

module.exports = {
  name: `welcome`,
  description: `Shows program welcome`,
  execute() {
    console.log(`
      Привет пользователь!
      Эта программа будет запускать сервер «Кексобукинг».
      Автор: ${packageInfo.author}.
    `);
  }
};
