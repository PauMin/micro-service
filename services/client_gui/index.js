import http from 'http';
import amqp from 'amqplib';
import express from 'express';

const app = express();
const port = process.env.PORT;

function bail(err) {
    console.error(err);
    process.exit(1);
}

function queue(q, msg) {
    amqp.connect({
        protocol: 'amqp',
        hostname: 'queue',
        port: 5672,
        username: 'admin',
        password: 'YourStrongPasswort'
    }).then(function(conn) {
        return conn.createChannel().then(function(ch) {
            let ok = ch.assertQueue(q, {durable: false});

            return ok.then(function(_qok) {
                ch.sendToQueue(q, Buffer.from(msg));
                console.log(" [x] Sent '%s'", msg);
                return ch.close();
            });
        }).finally(function() { conn.close(); });
    }).catch(console.warn);
}

app.get('/', (req, res) => res.send('Hello World from client side!'));
app.get('/users', (req, res) => {
    queue('users', 'Hello users');
    return res.send('Hello World from client side! users');
});
app.get('/posts', (req, res) => {
    queue('posts', 'Hello posts');
    return res.send('Hello World from client side! posts');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));