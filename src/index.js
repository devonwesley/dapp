require('es6-promise').polyfill();
import 'isomorphic-fetch';

import ServiceRunner from 'jade-service-runner-package';
import MGethService from 'mgeth-service';
const client = new ServiceRunner({transport: { type: 'browser', port: 8002}});
const mgeth = new MGethService({transport: { type: 'browser', port: 8545}})

client.installService('mgeth', '1').then((x) => console.log(x));

const submitAccount = document.getElementById('submitAccount');
const accountAddress = document.getElementById('accountAddress');

submitAccount.addEventListener('click', function(event) {
  event.preventDefault();
  mgeth.eth_getBalance(accountAddress.value, '0x0')
    .then((x) => console.log('balance: ' + parseInt(x)));
    .catch(error => console.log('ERROR :: ==>', error));
});