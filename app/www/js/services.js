angular.module('starter.services', [])

  /*测试数据开始*/

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'HTML',
    lastText: 'You Know?',
    price: '$20.00',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'JavaScript',
    lastText: '脚步语言',
    price: '$20.00',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'VueJS',
    lastText: '前端框架',
    price: '$20.00',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'IonIC',
    lastText: '前端框架',
    price: '$20.00',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'angular',
    lastText: '前端框架',
    price: '$20.00',
    face: 'img/mike.png'
  }, {
    id: 5,
    name: 'react',
    lastText: '前端框架!',
    price: '$20.00',
    face: 'img/perry.png'
  }, {
    id: 6,
    name: 'bootstrap',
    lastText: '前端框架',
    price: '$20.00',
    face: 'img/mike.png'
  }, {
    id: 7,
    name: 'jQuery',
    lastText: '前端框架',
    price: '$20.00',
    face: 'img/max.png'
  }, {
    id: 8,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    price: '$20.00',
    face: 'img/adam.jpg'
  }, {
    id: 9,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    price: '$20.00',
    face: 'img/perry.png'
  }, {
    id: 10,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 11,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 12,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
