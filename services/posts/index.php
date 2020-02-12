<?php

require_once __DIR__ . '/vendor/autoload.php';
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

$connection = null;

$waitingConnection = true;

while ($waitingConnection) {
    try {
        $connection = new AMQPStreamConnection('queue', 5672, 'admin', 'YourStrongPasswort');
        $waitingConnection = false;
    } catch (Exception $e) {
        // Fail silently
        sleep(10);
    }
}

$channel = $connection->channel();

$channel->queue_declare('posts', false, false, false, false);

$channel->basic_consume('posts', 'tag', false, false, false, false, 'say_hello');

function say_hello(AMQPMessage $message): void
{
    echo " [x] Received message in posts. " . $message->getBody() . "\n";
}

echo " [*] Waiting for messages. To exit press CTRL+C\n";

while (count($channel->callbacks)) {
    try {
        $channel->wait();
    } catch (Exception $e) {
        echo $e;
    }
}