import { NextFunction, Request, Response } from 'express';

import { cache, flight } from '../entities';

export const createValidation = (req: Request, res: Response, next: NextFunction) => {
  // do validation here
  next();
};

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await flight.create(req.body);

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await flight.findAll();

    if (!result.length) {
      res.status(404).send({
        message: 'Not found'
      });
      return;
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await flight.getById(req.params.id);

    if (!result) {
      res.status(404).send({
        message: 'Not found'
      });
      return;
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const destroy = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await flight.destroyById(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
