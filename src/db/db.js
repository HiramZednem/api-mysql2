import { createConnection } from 'mysql2';

// create the connection to database
export const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'adminadmin',
  database: 'usam',
});
