import { IncludeOptions, WhereOptions } from 'sequelize';

import FlightModel from '../models/Flight';

export const findAll = async (include?: IncludeOptions): Promise<FlightModel[]> => FlightModel.findAll({ include });

export const findOne = async (where: WhereOptions, include?: IncludeOptions): Promise<FlightModel | null> => FlightModel.findOne({ where, include });

export const insert = async (params: FlightModel): Promise<FlightModel> => {
  const flight = await FlightModel.create(params);

  return flight.get();
};

export const destroy = async (where: WhereOptions): Promise<number> => FlightModel.destroy({ where });

export const update = async (where: WhereOptions, params: FlightModel) => FlightModel.update(params, { where });
