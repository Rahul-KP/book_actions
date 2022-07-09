const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'frontend')));

app.listen(port, () => {
	console.log('Listening on port ' + port);
});

app.get('/', (req,res)=>{
	res.send('index.html')
});