import { DataTypes, Model, ModelDefined } from 'sequelize';
import dbConnect from '../../dbConnect';
import UserInterface from './user.interface';
import UserInputInterface from './userInput.interface';


export default class User 
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
    sequelize: dbConnect, // passing the `sequelize` instance is required
})