import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'airport_terminal',
  timestamps: false
})
class AirportTerminal extends Model<AirportTerminal> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number;

  @Column(DataType.STRING)
  public name!: string;

  @Column(DataType.STRING)
  public place!: string;
}

export default AirportTerminal;
