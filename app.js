const chalk = require("chalk");
const yargs = require("yargs");
const crud = require("./crud");

// creating database using yargs
yargs.command({
  command: "createDatabase",
  describe: "Create database",
  builder: {
    dbName: {
      describe: "Database name",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    crud.createDatabase(argv.dbName);
  },
});

// yargs command to delete the database
yargs.command({
  command: "deleteDatabase",
  describe: "Deleting a database",
  builder: {
    dbName: {
      describe: "Name of the database",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    crud.deleteDatabase(argv.dbName);
  },
});

// inserting data into the table command using yargs
yargs.command({
  command: "insertData",
  describe: "Inserting data into the table",
  builder: {
    id: {
      describe: "project id",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "project name",
      demandOption: true,
      type: "string",
    },
    description: {
      describe: "project description",
      demandOption: true,
      type: "string",
    },
    made_by: {
      describe: "project made_by",
      demandOption: true,
      type: "string",
    },
    github_username: {
      describe: "project github username",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    crud.insertDataIntoGithubProjects(
      argv.id,
      argv.name,
      argv.description,
      argv.made_by,
      argv.github_username
    );
  },
});

// yargs command to delete row of data from the table
yargs.command({
  command: "deleteRow",
  describe: "Deleting a row",
  builder: {
    id: {
      describe: "Delete the row using this id",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    crud.deleteRow(argv.id);
  },
});

// Parsing the yargs argument vectors
yargs.parse();
