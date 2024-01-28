class MySQLDatabase {
    public connectionToMySQLDB(uri: string ): void{
        console.log(`connection To MySQL DB: ${uri}`);
    }

    public executeMySQLQuery(query: string ): void{ 
        console.log(`execute MySQL Query: ${query}`); 
    }
}

class PostgreSQL {
    connectionToPostgreDB(uri: string ){
        console.log(`connectionToPostgreDB: ${uri}`);
    }

    executePostgreQuery(query: string ){ 
        console.log(`executePostgreQuery: ${query}`); 
    }
}

class DBAdapter{

    constructor( private postgreSQL: PostgreSQL) {}

    connectionToMySQLDB(uri: string): void{
        this.postgreSQL.connectionToPostgreDB(uri);
    }

    executeMySQLQuery(query: string ): void{
        this.postgreSQL.executePostgreQuery(query);
    }
}

// ----------------------------------------------------------------
let postgresSQL: PostgreSQL = new PostgreSQL();

let dbAdapter: DBAdapter = new DBAdapter(postgresSQL);

dbAdapter.connectionToMySQLDB('postgresql://localhost:5432/db_name');
dbAdapter.executeMySQLQuery('SELECT * FROM pg_catalog');




