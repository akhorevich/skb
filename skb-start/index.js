var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZTM2OTJmYjc0ZDAwMTFiZTgxZjAiLCJ1c2VybmFtZSI6ImEua2hvcmV2aWNoQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNDc4MDI2MDk1fQ.iob9ewta11leTvFoxeYdw6KeYoNjqZSb3CmcI84tDY4';
var skb = new Skb(token);
skb.taskHelloWorld('Hi!!!');