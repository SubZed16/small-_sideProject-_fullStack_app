const express = require("express");
const cors = require('cors');
const adminRoutes = require("./src/Routers/admin.routes");
const itemRoutes = require("./src/Routers/item.routes");
const ConnectToDB = require("./src/DB/connection/connectToDB");


const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

const StartServer = () => {
    ConnectToDB(process.env.CONNECTION_STRING);
    app.listen(port, (err) =>
      err ? console.log(err) : console.log(`Listening on port : ${port} ...`)
    );
  };


  app.use(cors({
    origin: 'http://localhost:5173', // Replace with the actual origin of your React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to include cookies in your requests
  }));

  
//starting the server
StartServer()


// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Temporary error handler
app.use((err, req, res, next) => {

    statusCode = err.statusCode || 500;
    errorMessage = err.message || "Server Error";
    return res.status(statusCode).json({success:false, error:errorMessage})
  });

  app.use("/api/item", itemRoutes);
  app.use("/api/admin", adminRoutes);

  //redirecting unvalid end-point
  app.use("*", (req, res) => {
    res.status(404).json({ error: "end-point none valid" });
  });
  