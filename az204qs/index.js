const { QueueServiceClient } = require('@azure/storage-queue');

const queueServiceClient = QueueServiceClient.fromConnectionString(
  'DefaultEndpointsProtocol=https;AccountName=mystorageudr;AccountKey=jqNv82KZSYGzrpeaO6+VnR7zoxT6znLntslxwqXc81xM+Y5IrrdhT+bvKitEYv/nOeeVErtOLY+sWs+w2nHhPg==;EndpointSuffix=core.windows.net'
);

const receiveMessages = async () => {
  const queueClient = queueServiceClient.getQueueClient('orders');
  const response = await queueClient.receiveMessages(); // mesaj okur ve siler
  // const responsep = await queueClient.peekMessages() // mesaj okur ama silmez
  console.log(response.receivedMessageItems);

  response.receivedMessageItems.forEach(async (message) => {
    await queueClient.deleteMessage(message.messageId, message.popReceipt);
  });
};

setInterval(() => {
  receiveMessages();
}, 2000);
