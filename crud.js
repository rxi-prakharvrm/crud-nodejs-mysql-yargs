const mysql = require("mysql");
const chalk = require("chalk");
const yargs = require("yargs");

// Connecting to mysql database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  // database: "Projects",
});

con.connect((err) => {
  if (err) throw err;
  console.log(chalk.green.inverse("Connected to the database Successfully!"));
  // createDatabase();
  // createTableInProjects();
  // insertDataIntoGithubProjects();
  // alterTable();
  // insertData(id, name, description, made_by, github_username);
});

// function to create a database
const createDatabase = (dbName) => {
  const sqlQuery = `CREATE DATABASE ${dbName}`;
  con.query(sqlQuery, (err) => {
    if (err) throw err;
    console.log(chalk.green.inverse("Database created successfully!"));
  });
};

// function to delete the database
const deleteDatabase = (dbName) => {
  const sqlQuery = `DROP DATABASE ${dbName}`;
  con.query(sqlQuery, (err) => {
    if (err) throw err;
    console.log(chalk.green.inverse("Database deleted successfully!"));
  });
};

// function to create the table in Projects database
const createTableInProjects = () => {
  const sqlQuery = `CREATE TABLE Github_Projects (
    ID INT NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(255),
    DESCRIPTION VARCHAR(255),
    MADE_BY VARCHAR(255),
    PRIMARY KEY (ID)
  )`;
  con.query(sqlQuery, (err) => {
    if (err) throw err;
    console.log("Table is created successfully!");
  });
};

// function to inserting data into the table github_projects
const insertDataIntoGithubProjects = (
  id,
  name,
  description,
  made_by,
  github_username
) => {
  const sqlQuery = `INSERT INTO github_projects (ID, NAME, DESCRIPTION, MADE_BY, GITHUB_USERNAME)
  VALUES (${id}, "${name}", "${description}", "${made_by}", "${github_username}")`;
  con.query(sqlQuery, (err) => {
    if (err) throw err;
    console.log(chalk.magenta("Data is inserted successfully!"));
  });
};

//function to Alter existing table
const alterTable = () => {
  const sqlQuery = `ALTER TABLE github_projects ADD GITHUB_USERNAME VARCHAR(255)`;
  con.query(sqlQuery, (err) => {
    if (err) throw err;
    console.log(chalk.greenBright("Table Altered successfully!"));
  });
};

// function to update the data in the table
const updateData = () => {
  const sqlQuery = `UPDATE github_projects SET GITHUB_USERNAME = "rxi-prakharvrm" WHERE ID = 1`;
  con.query(sqlQuery, (err) => {
    if (err) throw err;
    console.log("Data is updated successfully!");
  });
};

// function to delete any row from the table
const deleteRow = (id) => {
  const sqlQuery = `DELETE FROM github_projects WHERE id = ${id}`;
  con.query(sqlQuery, (err) => {
    if (err) throw err;
    console.log("Row is deleted successfully!");
  });
};

// exporting the function so that they can be used through other .js files
module.exports = {
  insertDataIntoGithubProjects,
  deleteRow,
  createDatabase,
  deleteDatabase,
};
