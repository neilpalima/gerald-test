import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';

import Meal from './Meal';
import Flight from './Flight';

@Table({
  tableName: 'flight_meal',
  timestamps: false
})
class FlightMeal extends Model<FlightMeal> {
  @ForeignKey(() => Flight)
  @Column(DataType.INTEGER)
  public flight_id!: number;

  @ForeignKey(() => Meal)
  @Column(DataType.INTEGER)
  public meal_id!: number;

  @Column(DataType.DECIMAL)
  public price!: number;

  @Column(DataType.STRING)
  public currency!: string;
}

export default FlightMeal;
