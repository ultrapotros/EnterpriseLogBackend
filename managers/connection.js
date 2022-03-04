const { Client } = require('pg')

try {
    const connectionData = {
        user: 'postgres',
        host: 'localhost',
        database: 'enterprise',
        password: '1234',
        port: 5432,
    }

    const myClient = new Client(connectionData)
    myClient.connect();
    console.log(" active");
        
} catch (error) {
    console.log(error)
}