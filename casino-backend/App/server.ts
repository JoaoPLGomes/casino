import express from 'express';
import cors from 'cors';
import countries from './routes/Countries';
import helmet from 'helmet';
import compression from 'compression';

const app: express.Application = express();
app.use(helmet())
app.use(cors());
app.use(compression());
app.use('/api/v1', countries);

app.listen(8000, () => {
    console.log('Casino app listening on port 8000!');
});
