import * as express from 'express';

import { flightController } from '../controllers';
import { validationMiddleware } from '../middlewares';

const router = express.Router();

router.get('/');
router.post('/',
  flightController.createValidation,
  flightController.create
);
router.get('/:id', flightController.getDetails);
router.patch('/:id');
router.delete('/:id', flightController.destroy);

export default router;
