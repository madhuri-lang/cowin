var express = require('express');
var dbConfig = require('./db.config');
var Sequelize = require('sequelize');
var cors = require('cors');
var bcrypt = require('bcrypt');

const app = express();
app.use(cors());
const sequelize = new Sequelize(dbConfig.DB , dbConfig.USER, dbConfig.password,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});