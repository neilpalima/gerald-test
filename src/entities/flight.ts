import { flightRepository } from '../repositories';

import FlightModel from '../models/Flight';

export const findAll = async () => flightRepository.findAll();

export const create = async (params: FlightModel) => flightRepository.insert(params);

export const getById = async (id: number | string) => flightRepository.findOne({ id });

export const destroyById = async (id: number | string) => flightRepository.destroy({ id });

export const updateById = async (id: number | string, params: FlightModel) => flightRepository.update({ id }, params);
