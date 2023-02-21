import mongoose from 'mongoose';
import {
  MONGODB_DATABASE,
  MONGODB_HOST,
  MONGODB_PASS,
  MONGODB_USER,
} from '../../shared/constants/database.constants';

const connectionString = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}/${MONGODB_DATABASE}`;

const options: mongoose.ConnectOptions = {
  keepAlive: true,
};

mongoose.set('strictQuery', true);

export const database = () =>
  mongoose
    .connect(connectionString, options)
    .then((connection) => {
      process.stdout.write('MongoDB Connected!\n');
      return connection;
    })
    .catch((err) => {
      process.stdout.write(JSON.stringify(err));
      process.exit(1);
    });

export default database;
