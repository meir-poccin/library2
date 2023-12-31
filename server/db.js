const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'postgres',
    password:'test',
    host:'localhost',
    port: 5432,
    database: 'perntodo'
})


/*
const pool = new Pool({
    user: 'postgres',
    password:'yaaleh18veyavo',
    host:'db.bbqihtrmoxpallrorixi.supabase.co',
    port: 5432,
    database: 'postgres'
})
*/

module.exports = pool;
