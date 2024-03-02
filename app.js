const express = require('express');
const routes = require('./routes')

const app = express();

app.use(routes);

const port = 3000;

app.listen(port, (err) => {
    if (err){
        throw err;
    }
    else{
        console.log(`Server is running on Port ${port}.`);
}
});