'use strict';
module.exports = (sequelize, DataTypes) => {
  const widget = sequelize.define('widget', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  widget.associate = function(models) {
    // associations can be defined here
  };
  return widget;
};