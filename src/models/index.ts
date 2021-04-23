import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';

import Flight from './Flight';
import Airport from './Airport';
import AirportArrivalAvailability from './AirportArrivalAvailability';
import AirportDepartureAvailability from './AirportDepartureAvailability';
import Meal from './Meal';
import FlightMeal from './FlightMeal';

let sequelize: Sequelize;

dotenv.config();

export const connect = async () => {
  if (sequelize) {
    return sequelize;
  }

  const {
    APP_DEBUG,
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT,
    DB_DATABASE
  } = process.env;

  const appDebug = APP_DEBUG === 'true';

  sequelize = new Sequelize(DB_DATABASE as string, DB_USERNAME as string, DB_PASSWORD as string, {
    host: DB_HOST,
    port: parseInt(DB_PORT as string),
    dialect: 'mysql',
    logging: appDebug && console.log,
    benchmark: appDebug
  });

  // Add models.
  sequelize.addModels([
    Flight,
    Airport,
    AirportArrivalAvailability,
    AirportDepartureAvailability,
    Meal,
    FlightMeal
  ]);

  await sequelize.authenticate();

  /* istanbul ignore next */
  if (appDebug) {
    console.log('Successfully connected to the database!');
  }

  return sequelize;
};

export const getSequelize = () => sequelize;
