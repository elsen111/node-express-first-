const express = require('express');
const app = express();

const workers = [
    {"id": 1, "name": "Sam", "age": 45 },
    {"id": 1, "name": "Tom", "age": 34 },
    {"id": 1, "name": "Sam", "age": 18 }
]

app.get('/users', function(request, response){
    response.send(workers);
});

app.listen(3000, () => {console.log('Server running....')})