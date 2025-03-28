const express = require("express");
const dbconnection = require("./config/db");
const routes = require("./routes/packages")
const cors = require("cors");
const bodyParser = require("body-parser");
//const bookingRoutes = require("./routes/PackageBookings");

const app = express();
app.use(cors({ origin: true, credentials: true }));

//DB connection
dbconnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

// Routes
app.get("/",(req,res)=> res.send("Hello World"));
app.use("/api/package",routes);
//app.use("/api/book", bookingRoutes);

const PORT = 5000;

app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`)); 
