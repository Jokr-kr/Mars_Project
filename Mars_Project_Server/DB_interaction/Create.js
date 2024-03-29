const MySQL_db = require('./DB_Connect');

function createTable()
{
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS test_table (
            id INT AUTO_INCREMENT PRIMARY KEY,
            column1 VARCHAR(255),
            column2 INT
        )
    `;

    MySQL_db.query(createTableQuery, (err, results) =>
    {
        if (err)
        {
            console.error('Error creating table:', err);
            return;
        }
        console.log('Table created successfully');
    });
}

module.exports = createTable;