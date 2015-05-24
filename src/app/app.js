var app = angular.module('personalSite', []);

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var elem = document.getElementsByClassName("aboutMe");
            var elem2 = document.getElementsByClassName("landingMe");
            var elem3 = document.getElementsByClassName("arrowDownContainer");

            var aboutMe = elem[0].getBoundingClientRect().top;
            var landingMe = elem2[0].getBoundingClientRect().top;
            var arrowDown = elem3[0].getBoundingClientRect().top;


            if (landingMe > arrowDown) {
                angular.element(document.getElementsByClassName('arrowDownContainer')).addClass('arrowDownContainerHidden');
            } else if (angular.element(document.getElementsByClassName('arrowDownContainer'))[0].className.indexOf('arrowDownContainerHidden') != -1  ){
                angular.element(document.getElementsByClassName('arrowDownContainer')).removeClass('arrowDownContainerHidden');
            }
            
            if (aboutMe < landingMe) {
                angular.element(document.getElementsByClassName('landingContainer')).addClass('fixedMe');
                angular.element(document.getElementsByClassName('imageFixed')).addClass('landingMeOpa');

            } else {
                angular.element(document.getElementsByClassName('landingContainer')).removeClass('fixedMe');
                angular.element(document.getElementsByClassName('imageFixed')).removeClass('landingMeOpa');
            }

            scope.$apply();
        });
    };
});

app.directive("social", function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.bind('mouseenter', function() {
                if($scope.social.animation){
                    angular.element(document.getElementById("facebook").getElementsByClassName("descriptionContainer")).addClass('fixedFace');
                    angular.element(document.getElementsByClassName('facebookIcon')).addClass('facebookDisabled');
                }
            });
        }
    };
});

new Awty().init();

  app.controller('blogSupport', ['$scope', '$http', function($scope, $http){   

      $http({
             method: 'GET',
             url: 'http://antoniocapelo.com/api/trout/lastpost',
             //params: '',
             //headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
          }).success(function(data){
             console.log('succ',data);
             $scope.image = data.image;
             $scope.title = data.title;
             $scope.url = data.url;
         }).error(function(){
             console.log("error");
         });
  }]);