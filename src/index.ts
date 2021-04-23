import { server } from './entities';
import * as db from './models';

const main = async () => {
  try {
    const port = parseInt(process.env.PORT as string) || 3000;

    await db.connect();

    server(port);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

main();
