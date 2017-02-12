'use strict';
module.exports = function(sequelize, DataTypes) {
  var memo = sequelize.define('memo', {
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return memo;
};