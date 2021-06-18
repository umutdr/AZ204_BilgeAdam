const { ClientSecretCredential } = require('@azure/identity');
const { SecretClient } = require('@azure/keyvault-secrets');

const credential = new ClientSecretCredential(
  'c0fbd282-68ef-4c22-8ce3-88e3e5d9c688', // Tenant Id
  'daa34687-3333-479b-97de-b5b50f46d7c3', // Client Id
  '1ICc2S~mA1P.9E51lN46nT1-3f1Qf-IG~1' // Client Secret
);

const client = new SecretClient(
  'https://mykeyvaultudr.vault.azure.net/',
  credential
);

client
  .getSecret('mysecret')
  .then((response) => {
    console.log('secret value: ', response);
  })
  .catch((err) => {
    console.log('error', err);
  });
