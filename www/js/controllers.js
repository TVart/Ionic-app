angular.module('starter.controllers', ['youtube-embed'])

.controller('DashCtrl', function($scope,Home) {
  $scope.start='img/start.jpg';
  $scope.socnets=Home.all();
})

.controller('ChatsCtrl', function($scope, Playlists) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.playlists = Playlists.all();
  $scope.remove = function(playlist) {
    Playlists.remove(playlist);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Playlists) {
  $scope.playlist = Playlists.get($stateParams.playlistId);
})

.controller('ChatVideoCtrl', function($scope,$sce,$stateParams, Playlists) {
  $scope.playlist = Playlists.get($stateParams.playlistId);
  $scope.video = Playlists.getvideos($stateParams.playlistId,$stateParams.videoId);
  $scope.q =$sce.trustAsResourceUrl($scope.video.q);
  $scope.r =$sce.trustAsResourceUrl($scope.video.r);
  $scope.settings = {
    enableFriends: false
  };
});
