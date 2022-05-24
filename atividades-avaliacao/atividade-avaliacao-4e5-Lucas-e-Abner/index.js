const express = require("express");
const app = express();
const database = require("./config/database");

app.database = database;
