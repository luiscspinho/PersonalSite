var app = angular.module('personalSite', []);

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var elem = document.getElementsByClassName("aboutMe");
            var elem2 = document.getElementsByClassName("landingMe");

            var a = elem[0].getBoundingClientRect().top;
            var b = elem2[0].getBoundingClientRect().top;


             if (a < b) {
                angular.element(document.getElementsByClassName('landingContainer')).addClass('fixedMe');

             } else {
                //angular.element(document.getElementsByClassName('imageFixed')).addClass('landingMeOpa');
                //angular.element(document.getElementsByClassName('landingContainer')).removeClass('fixedMe');
             }
            //scope.$apply();
        });
    };
});

app.directive("social", function () {
    return {
        restrict: 'A',
        //templateUrl: 'src/app/social/social.html',
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