'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Reptile = app.model.define('Reptile', {
    id: { type: INTEGER, primaryKey: true, allowNull: false },
    title: { type: STRING, allowNull: true },
  }, {
    tableName: 'reptile_list',
    timestamps: false,
  });

  return Reptile;
};
