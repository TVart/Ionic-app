angular.module('starter.services', ['youtube-embed'])

.factory('Home', function() {
      var socnets = [
        {
          'logo': 'img/youtube-black.jpg',
          'url': 'https://www.youtube.com/channel/UCynH9O3PG4YqqoDzUZw8tOw',
        },
        {
          'logo': 'img/facebook.png',
          'url': 'https://www.facebook.com/Code-de-la-route-134819859894197/?fref=ts',
        }
        /*,
        {
          'logo': 'img/twitter.png',
          'url': 'http://youtube.com',
        }*/
      ];
      return {
        all: function () {
          return socnets;
        }
      };
})
.factory('Playlists', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var playlists = [
    {
    id: 0,
    name: 'Série 1',
    lastText: 'Route, Autoroute',
    face: 'img/ben.png',
    videos:[
      {
        id:0,
        q:"Q_o0SsqzeSk",
        r:"B8sKV6b-_88",
        title:'Route prioritaire'
      },{
        id:1,
        q:"EoOlQ6dAN_Q",
        r:"B8sKV6b-_88",
        title:'Limitation de vitesse'
      },{
        id:2,
        q:"yQeV_A98J4E",
        r:"B8sKV6b-_88",
        title:'Distance de sécurité, Tunnel'
      },{
        id:3,
        q:"Hc3ZJ52FxTk",
        r:"B8sKV6b-_88",
        title:'Route prioritaire'
      },{
        id:4,
        q:"xM97QcZ2cDo",
        r:"B8sKV6b-_88",
        title:'Conduire dans Agglomération éclairée'
      },{
        id:5,
        q:"k8cvPFycf6Q",
        r:"B8sKV6b-_88",
        title:'Placement'
      },{
        id:6,
        q:"n38vSQ4QRDU",
        r:"B8sKV6b-_88",
        title:'Arrêt, Stationnement'
      },{
        id:7,
        q:"eIvjGONVH-k",
        r:"B8sKV6b-_88",
        title:'Dépassement'
      },{
        id:7,
        q:"XfwbkCTxTDo",
        r:"B8sKV6b-_88",
        title:'Placement, Choisir la direction'
      },{
        id:7,
        q:"eHmjUYAFtr8",
        r:"B8sKV6b-_88",
        title:'Arrêt, Stationnement'
      },{
        id:7,
        q:"tH5UAm89kt8",
        r:"B8sKV6b-_88",
        title:'Arrêt, Stationnement'
      }
    ]
  }, {
    id: 1,
    name: 'Arrêt et Stationnement',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
      videos:[
        {
        id:0,
        q:"refw1",
        r:"refw2"
      },
        {
          id:1,
          q:"zref1",
          r:"zref2"
        }
      ]
  }, {
    id: 2,
    name: 'Panneau Interdiction',
    lastText: 'I should buy a boat',
    face: 'img/interdiction.jpg'
  }, {
    id: 3,
    name: 'Panneau Indication',
    lastText: 'Look at my mukluks!',
    face: 'img/indication.png'
  }, {
    id: 4,
    name: 'Panneau Direction',
    lastText: 'This is wicked good ice cream.',
    face: 'img/direction.png'
  }, {
      id: 5,
      name: 'Panneau Obligation',
      lastText: 'This is wicked good ice cream.',
      face: 'img/obligation.png'
    }, {
      id: 6,
      name: 'Panneau Danger',
      lastText: 'This is wicked good ice cream.',
      face: 'img/danger.png'
    }];

  return {
    all: function() {
      return playlists;
    },
    remove: function(playlist) {
      playlists.splice(playlists.indexOf(playlist), 1);
    },
    get: function(playlistId) {
      for (var i = 0; i < playlists.length; i++) {
        if (playlists[i].id === parseInt(playlistId)) {
          return playlists[i];
        }
      }
      return null;
    },
    getvideos: function(playlistId,videoId) {
      for (var i = 0; i < playlists.length; i++) {
        if (playlists[i].id === parseInt(playlistId)) {
          for (var j = 0; j < playlists[i].videos.length; j++) {
            if (playlists[i].videos[j].id === parseInt(videoId)) {
              return playlists[i].videos[j];
            }
          }
        }
      }
      return null;
    }
  };
});
