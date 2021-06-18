const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require('@azure/storage-blob');

const defaultAzureCredential = new StorageSharedKeyCredential(
  'mystorageudr',
  'ccuw1UKK8juWouLen311BX1krhQurl6lJHCuRcXZXolXboOvKJnl+zv3DDHWMZvsUvufoT2fpKlK9rgr9W6kyg=='
);

const blobServiceClient = new BlobServiceClient(
  'https://mystorageudr.blob.core.windows.net',
  defaultAzureCredential
);

const containerClient = blobServiceClient.getContainerClient('images');

const blobName = 'item_' + new Date().getTime() + '.jpg';
const blockBlobClient = containerClient.getBlockBlobClient(blobName);

blockBlobClient
  .uploadFile('blob.jpg', {})
  .then((response) => {
    console.log(response);

    const fileUrl =
      'https://mystorageudr.blob.core.windows.net' + '/images/' + blobName;
    console.log('file url: ', fileUrl);
  })
  .catch((err) => {
    console.log(err);
  });
