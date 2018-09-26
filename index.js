if (process.argv = `--version`) {
  console.log(`v0.0.1`);
  console.error(0);
}

if (process.argv = `--help`) {
  console.log(`
    Доступные команды:
    --help— печатает этот текст;
    --version— печатает версию приложения;
    `);
  console.error(0);
}

console.log(`
  Привет пользователь!
  Эта программа будет запускать сервер «Кексобукинг».
  Автор: Кекс.
`);
console.error(0);

if (process.argv != `--help` || process.argv != `--version`) {
  console.log(`
    Неизвестная команда {{ ... }}.
    Чтобы прочитать правила использования приложения, наберите "--help"
  `);
  console.error(1);
}
