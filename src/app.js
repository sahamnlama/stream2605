const Peer = require('simple-peer');

const $ = require('jquery');
const p = new Peer({initiator: location.hash === '#1', trickle:false});

p.on('signal', token => {
  $('#txtMySignal').val(JSON.stringify(token));
});

p.on('connect', () => {
  console.log('connected');
  setInterval(function(){
    p.send(Math.random());
  },2000)
});

p.on('data', data => console.log('NHAN DU LIEU:'+ data));

$('#btnConnect').click(() => {
  const friendSignal = JSON.parse($('#txtFriendSignal').val());
  p.signal(friendSignal);
})
