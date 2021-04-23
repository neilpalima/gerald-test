import { Column, DataType, Model, PrimaryKey, Table, ForeignKey } from 'sequelize-typescript';

import AirportTerminal from './AirportTerminal';

@Table({
  tableName: 'airport_departure_availability',
  timestamps: false
})
class AirportArrivalAvailability extends Model<AirportArrivalAvailability> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number;

  @ForeignKey(() => AirportTerminal)
  @Column(DataType.INTEGER)
  public airport_terminal_id!: number;

  @Column(DataType.DATE)
  public schedule!: string;
}

export default AirportArrivalAvailability;
