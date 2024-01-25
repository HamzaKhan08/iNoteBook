const connectToMongo = require("./db"); // importing db file to call connectToMongo() function
var cors = require('cors')

connectToMongo(); // calling connectToMongo() function only
const express = require("express"); // importing express server
const app = express(); // importing app from express function
const port = 4000; // port number where testing will show

app.use(cors())


app.use(express.json()); // we can use app by passing json function

// Available Routes //
app.use("/api/auth", require("./routes/auth")); // creating API to call when we required, also importing routes/auth to integrate
app.use('/api/notes', require('./routes/notes')); // creating API to call when we required, also importing routes/notes to integrate

app.listen(port, () => {
  console.log(`iNotebook backend server is live on port ${port}`); // this is our port console
});
