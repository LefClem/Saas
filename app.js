const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user');
const clientsRoutes = require('./routes/clients');
const tasksRoutes = require('./routes/tasks');


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:8080');
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
        );
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    });
    
app.use(express.json());
app.use(cookieParser());


app.use('/auth', userRoutes);
app.use('/clients', clientsRoutes);
app.use('/tasks', tasksRoutes);




module.exports = app;