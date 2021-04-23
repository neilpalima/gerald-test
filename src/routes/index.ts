import * as express from 'express';

import flightRoute from './flight';

const router = express.Router();

router.use('/flight', flightRoute);

export default router;
