const version = require(`./version`);
const author = require(`./author`);
const description = require(`./description`);
const license = require(`./license`);

module.exports = function () {
  version.execute();
};

module.exports = function () {
  author.execute();
};

module.exports = function () {
  description.execute();
};

module.exports = function () {
  license.execute();
};
