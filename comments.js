// Create web server
// Run: node comment.js
// Test: http://localhost:3000
// Test: http://localhost:3000/comments
// Test: http://localhost:3000/comments/1

// Load modules
var express = require('express');
var bodyParser = require('body-parser');

// Create web server
var app = express();

// Configure web server
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Create router
var router = express.Router();

// Setup routes
router.get('/', function(req, res) {
	res.json({message: 'Hello World'});
});

var comments = [
	{id: 1, author: 'Pete Hunt', text: 'This is one comment'},
	{id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
];

router.route('/comments')
	.get(function(req, res) {
		res.json(comments);
	})
	.post(function(req, res) {
		var comment = req.body;
		comment.id = comments.length + 1;
		comments.push(comment);
		res.json(comment);
	});

router.route('/comments/:id')
	.get(function(req, res) {
		var id = req.params.id;
		var comment = comments.filter(function(c) {
			return c.id == id;
		})[0];
		res.json(comment);
	})
	.put(function(req, res) {
		var id = req.params.id;
		var comment = comments.filter(function(c) {
			return c.id == id;
		})[0];
		comment.author = req.body.author;
		comment.text = req.body.text;
		res.json(comment);
	})
	.delete(function(req, res) {
		var id = req.params.id;
		var comment = comments.filter(function(c) {
			return c.id == id;
		})[0];
		var index = comments.indexOf(comment);
		comments.splice(index, 1);
		res.json(comment);
	});

// Register routes
app.use('/', router);

// Start web server
app.listen(3000);
console.log('Web server listening on port 3000');