const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname));

app.set('port', (process.env.PORT || 5000));

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(app.get('port'), () => {
	console.log("App listening on " + app.get('port'));
});
