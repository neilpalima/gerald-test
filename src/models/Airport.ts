import { Column, DataType, Model, PrimaryKey, Table, ForeignKey } from 'sequelize-typescript';

import AirportArrivalAvailability from './AirportArrivalAvailability';
import AirportDepartureAvailability from './AirportDepartureAvailability';

@Table({
  tableName: 'airport',
  timestamps: false
})
class Airport extends Model<Airport> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number;

  @ForeignKey(() => AirportArrivalAvailability)
  @Column(DataType.INTEGER)
  public airport_arrival_availability_id!: number;

  @ForeignKey(() => AirportDepartureAvailability)
  @Column(DataType.INTEGER)
  public airport_departure_availability_id!: number;
}

export default Airport;
