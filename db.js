import pkg from 'pg';
const { Pool} = pkg;
const pool=new Pool({
    user:"postgres",
    password:"1000123",
    host:"localhost",
    port:5432,
    database:"perntodo"
});
export default pool;
