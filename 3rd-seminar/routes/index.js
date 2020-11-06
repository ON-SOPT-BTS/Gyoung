var express = require('express');
var router = express.Router();

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('from client', function(msg) {
        console.log('message: ' + msg);
        io.emit('to client', msg);
    })
})

router.use('/users', require('./users'));
router.use('/ranking', require('./ranking'));
router.use('/society', require('./society'));
router.use('/members', require('./members'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
