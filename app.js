const express = require('express');

const app = express();

const PORT = 9001;

const dataRoute = require('./routes/dashboarddata')

app.use('/dashboarddata', dataRoute)

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`server successful, listening on port ${PORT}`)
})


