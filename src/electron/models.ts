import { DataTypes, Model, ModelDefined, Sequelize } from 'sequelize';
import UserInterface from './entities/user/user.interface';
import UserInputInterface from './entities/user/userInput.interface';

export default function modelsInit(sequelize: Sequelize) {
  class User 
    extends Model<UserInterface, UserInputInterface> 
    implements UserInterface {
      id: number;
      login: string;
      password: string;

      // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  };

  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    login: {
      type: new DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(200),
      allowNull: true,
    },
  }, {
      tableName: "users",
      sequelize, // passing the `sequelize` instance is required
  })
};