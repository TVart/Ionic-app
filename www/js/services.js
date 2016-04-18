angular.module('starter.services', [])

.factory('Home', function() {
      var socnets = [
        {
          'logo': 'img/youtube-black.jpg',
          'url': 'http://youtube.com',
        },
        {
          'logo': 'img/facebook.png',
          'url': 'http://youtube.com',
        },
        {
          'logo': 'img/twitter.png',
          'url': 'http://youtube.com',
        }
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
    name: 'Générique',
    lastText: 'You on your way?',
    face: 'img/ben.png',
    videos:[{
        id:0,
        q:"http://www.youtube.com/embed/_zTpoJlNRAQ?rel=0",
        r:"http://www.youtube.com/embed/B8sKV6b-_88?rel=0"
      },
      {
        id:1,
        q:"refx1",
        r:"refx2"
      }
    ]
  }, {
    id: 1,
    name: 'Arrêt et Stationnement',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
      videos:[{
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
