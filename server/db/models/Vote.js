const Sequelize = require('sequelize');
const db = require('../db');

const Vote = db.define('vote', {
  vote: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Vote;
