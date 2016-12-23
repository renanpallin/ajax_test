const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', (req, res) => {
	console.log(req.body);
	// res.send(req.body);
	res.send('vlw!');
})

app.listen(3000, function(){
	console.log('servidor ligado');
})