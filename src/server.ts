import express from 'express';

import { routes } from './routes/index.routes';
import { logSuccess } from './utils/log';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () =>
	logSuccess('server', `started on port ${process.env.DEV_LOG_PORT || 3333} 😎`)
);
