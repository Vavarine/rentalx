import express from 'express';

import { logSuccess } from './utils/log';

const app = express();

app.listen(3333, () =>
	logSuccess('server', `started on port ${process.env.DEV_LOG_PORT || 3333} 😎`)
);
