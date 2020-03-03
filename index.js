const app = require('express')();

app.get('/', (request, response) => response.send('Hello, world!'));
app.listen(3000, '0.0.0.0');
