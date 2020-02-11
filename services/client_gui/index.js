import http from 'http';
import amqp from 'amqplib';
import express from 'express';

const app = express();
const hostname = '0.0.0.0';
const port = process.env.PORT;
const q = 'hello';

function bail(err) {
    console.error(err);
    process.exit(1);
}

function queue() {
    amqp.connect({
        protocol: 'amqp',
        hostname: 'queue',
        port: 5672,
        username: 'admin',
        password: 'YourStrongPasswort'
    }).then(function(conn) {
        return conn.createChannel().then(function(ch) {
            let msg = 'Hello World!';

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
app.get('/send', (req, res) => {
    queue();
    return res.send('Hello World from client side!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));