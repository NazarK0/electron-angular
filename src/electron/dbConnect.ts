import { Sequelize } from 'sequelize';

const dbConnect = new Sequelize({
    dialect: 'sqlite',
    storage: '../../test.db'
  });

export function testConnection() {
    try {
        dbConnect.authenticate()
         .then(() => {
            console.log('Connection has been established successfully.');
         });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export function syncModels() {
    dbConnect.sync({ force: true })
        .then(() => console.log('db models synchronization complete.'));
}

export function disconnect() {
    dbConnect.close()
      .then(() => console.log('db connection closed.'));
}
  

export default dbConnect;