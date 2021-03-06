//Dependencies
const express = require('express');
const app = express();
const db = require("./app/models")
const apiRoutes = require("./app/routes/api-routes.js");

// setting up port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('./app/public'));

//routes
apiRoutes(app);


db.sequelize.sync().then(() => 
    app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
)

