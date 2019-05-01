require('es6-promise').polyfill();
require('isomorphic-fetch');

const ServiceRunner = require('jade-service-runner-package');
const client = new ServiceRunner({transport: { type: 'browser', port: 8002}});
client.installService('mgeth', '1').then((x) => console.log(x));

const submitAccount = document.getElementById('submitAccount');
const accountAddress = document.getElementById('accountAddress');

submitAccount.addEventListener('click', function(event) {
  event.preventDefault();

  console.log('Client :: ==>', client);
  console.log('EVENT :: ==>', event);
  console.log('We have values :: =>', accountAddress.value);
});