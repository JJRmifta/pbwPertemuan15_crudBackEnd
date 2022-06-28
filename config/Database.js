import {Sequelize} from "sequelize";
 
const db = new Sequelize('mifta_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
