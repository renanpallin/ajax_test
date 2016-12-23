document.getElementById('button').addEventListener('click', () => {
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		// processa resposta do servidor
		
		// Dentro de try..catch para o caso de não existir httpRequest
		// Queda de servidor pode ocasionar exception
		try {
			// Verifica se transação já ocorreu
			// if (httpRequest.readyState === httpRequest.DONE) {
			if (httpRequest.readyState === 4){
				console.log('tudo ocorreu bem!');

				// Verifica se o servidor respondeu que tá beleza
				if(httpRequest.status === 200) {
					console.log('tá beleza');
					console.log('dados (responseText): ' + httpRequest.responseText);
					displayData(httpRequest.responseText);
				} else {
					console.log('NÃO tá beleza: ' + httpRequest.status);
				}

			} else {
				console.log('ocorreu alguma merda ou não foi ainda. readyState: ' + httpRequest.readyState);
			}
			
		} catch(e) {
			console.log(e);
		}
	}


	/* Provavlemente será algo parecido com isso */
	var musicas = {
		email: 'renan@gmail.com',
		id: 4941891941,
		musicas: ["angel", "never", "justin bieber", "grace", "snoop", "bass", "50", "OneRepublic"]
	}


	httpRequest.open('POST', 'http://localhost:3000/');
	// httpRequest.open('GET', 'http://localhost:8000/manifest.json');
	// httpRequest.open('GET', 'http://jsonplaceholder.typicode.com/posts/1');
	httpRequest.setRequestHeader('Cache-Control', 'no-cache');
	httpRequest.setRequestHeader('Content-Type', 'application/json');
	// httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	// httpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
	// httpRequest.send('{"user": "Renan"}');
	httpRequest.send(JSON.stringify(musicas));
})

function displayData(data){
	document.getElementById('data').innerText = data;
}
