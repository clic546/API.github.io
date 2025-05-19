import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import subscriptionRoutes from './routes/subscription.js';

const app = express();
app.use(express.json());

const swaggerDocument = YAML.load('./src/swagger/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/subscriptions', subscriptionRoutes);
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
