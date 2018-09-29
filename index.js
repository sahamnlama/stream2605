const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home')
});

app.listen(3000, function(){
  console.log('Server started');
})
