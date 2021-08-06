'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // https://levelup.gitconnected.com/creating-sequelize-associations-with-the-sequelize-cli-tool-d83caa902233

      User.hasMany(models.Tweet, {
        foreignKey: 'userId'
      })

      User.hasMany(models.User, { through: 'UserFollowing', as: "followingId", foreignKey: 'userId' })
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    verificationCode: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};