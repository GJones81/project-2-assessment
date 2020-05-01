const express = require('express');
const methodOverride = require('method-override');
let db = require('./models')

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('static'));
app.use(methodOverride('_method'));

// WRITE YOUR ROUTES HERE /////////////////////
app.get('/', (req, res) => {
	db.widget.findAll()
	.then((widget) => {
		res.render('index', {widget})
	})
	
})

app.post('/', (req, res) => {
	db.widget.create(req.body)
	.then(() => {
		res.redirect('/')
	})
})

app.delete('/delete', (req, res) => {
	db.widget.destroy({
		where: {
			name: req.body.name,
			quantity: req.body.quantity

		}
	})
	.then(() => {
		res.redirect('/')
	})
})


// YOUR ROUTES ABOVE THIS COMMENT /////////////

app.listen(3000);
