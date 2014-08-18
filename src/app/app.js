var app = angular.module('personalSite', []);

app.controller('navigationController', ['$scope', function($scope){
  $scope.navigationOptions = [
                {
                    description: "Home",
                    link: "TOP"
                },
                {
                    description: "About Me",
                    link: "footer"
                },
                {
                    description: "Interests",
                },
                {
                    description: "CV"
                },
                {
                    description: "Contact"
                }];
}]);

app.controller('socialController', ['$scope', function($scope){
    $scope.socialNetworks = [
                {
                    name: "Twitter",
                    link: "http://www.twitter.com/LuisCSPinho",
                    description: "Wanna know where am I flying?",
                    dataHover: "Or just mess around...",
                    className: "socialIcon",
                    path: "/assets/twitter.png",
                    animation: false
                },
                {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/luiscspinho",
                    description: "Why don't you link with me?",
                    dataHover: "On LinkedIn only...",
                    className: "socialIcon",
                    path: "/assets/linkedin.png",
                    animation: false
                },
                {
                    name: "GitHub",
                    link: "https://github.com/luiscspinho/",
                    description: "Some code of my own?",
                    dataHover: "Be carefull...",
                    className: "socialIcon",
                    path: "/assets/github.png",
                    animation: false
                },
                {
                    name: "Lastfm",
                    link: "http://www.last.fm/user/LuisCSPinho",
                    description: "There is no better music for you to listen",
                    dataHover: "For real...",
                    className: "socialIcon",
                    path: "/assets/lastfm.png",
                    animation: false
                },
                {
                    name: "I don't have Facebook!",
                    link: "http://luispinhodoesnthavefacebook.com/",
                    description: "Simply my facebook page",
                    dataHover: "Facebook, facebook...",
                    className: "facebookIcon",
                    path: "/assets/blank.png",
                    animation: true,
                    enable: true
                }
                ];

    $scope.events = {
        mouseEnter : function (social) {
            social.enable = false;
        }
    };

}]);

app.directive("social", function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
        }
    };
});

app.directive("scroll", function ($window) {
    return {
        restrict: 'A',
        controller: 'navigationController',
        link: function ($scope, element, attrs) {
                window.addEventListener('scroll', function(ev) {
                    $scope.onHeader = false;
                    $scope.enableBar = element[0].offsetTop;
                    $scope.onHeader = (window.pageYOffset >= $scope.enableBar);
                    $scope.$apply();
                });
            }
    };
});