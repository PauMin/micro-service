<?php

require_once __DIR__ . '/vendor/autoload.php';
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

$connection = null;
$connection = new AMQPStreamConnection('queue', 5672, 'admin', 'YourStrongPasswort');
$channel = $connection->channel();

$channel->queue_declare('hello', false, false, false, false);

$channel->basic_consume('hello', 'tag', false, false, false, false, 'say_hello');

function say_hello(AMQPMessage $message): void
{
    echo " [x] Received message. " . $message->getBody() . "\n";
}

echo " [*] Waiting for messages. To exit press CTRL+C\n";

while (count($channel->callbacks)) {
    try {
        $channel->wait();
    } catch (Exception $e) {
        echo $e;
    }
}