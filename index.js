if (process.argv[2] === `--version`) {
  console.log(`v0.0.1`);
  process.exit(0);
} else if (process.argv[2] === `--help`) {
    console.log(`
      Доступные команды:
      --help— печатает этот текст;
      --version— печатает версию приложения;
      `);
    process.exit(0);
} else if (!process.argv[2]) {
    console.log(`
      Привет пользователь!
      Эта программа будет запускать сервер «Кексобукинг».
      Автор: Кекс.
      `);
    process.exit(0);
} else if ((process.argv[2] !== `--help`) || (process.argv[2] !== `--version`)) {
    console.log(`
      Неизвестная команда {{ ${process.argv[2]} }}.
      Чтобы прочитать правила использования приложения, наберите "--help"
    `);
    process.exit(1);
}
