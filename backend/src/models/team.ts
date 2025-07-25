import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

class Team extends Model {
  public id!: number;
  public name!: string;
  public tournamentId!: number;
  public players!: string; // JSON string of player IDs or names
  public createdAt!: Date;
  public updatedAt!: Date;
}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tournamentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tournaments', // name of the target model
        key: 'id', // key in the target model
      },
    },
    players: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'teams',
  }
);

export default Team;