const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())
const router = new express.Router();
const server = app.listen(3005, () => {
    console.log('server listen to 3005')
});
const io = require('socket.io')(server, {
    path: '/mysocket/',
    cors: {
        origin: '*',
    }
});

io.sockets.on('connection', (socket) => {
    console.log('Connection', socket.id);
    socket.emit('connected', socket.id)
    socket.on('disconnect', () => {
        console.log('disconnect');
    });

});

app.use(express.json())
app.use(router)



