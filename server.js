const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002

const sequelize = require('./config/connection')


//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//turn on routes
app.use(require('./routes'))

//PORT connection 
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
