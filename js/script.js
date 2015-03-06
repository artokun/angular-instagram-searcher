angular.module('myApp', ['ngMessages', 'ngAnimate'])
  .controller('searcherCtrl', function ($scope, $q, $http) {
    var client_id = '6cb80ad7a1434bbe9f2637b1d3bd644b';
    var access_token = '1737665452.1fb234f.45e4a46403c64c42ab6f0af1b78ac765';
    var client_secret = '5666e1735aaf495f9a9b772b8d239099';

    $scope.search = function () {
      var url = 'https://api.instagram.com/v1/tags/' + $scope.input.keyword + '/media/recent?client_id=' + client_id + '&callback=JSON_CALLBACK';
      var params = {
        method: 'JSONP',
        url: url
      };
      $http(params)
        .success(function (response) {
          $scope.images = response.data;
        }).error(function (response) {
          alert(error.meta.code);
          //need to flesh this one out
        });
    };
  });