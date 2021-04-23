import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'flight',
  timestamps: false
})
class Flight extends Model<Flight> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number;

  @Column(DataType.INTEGER)
  public origin_airport_id!: number;

  @Column(DataType.INTEGER)
  public destination_airport_id!: number;
}

export default Flight;
