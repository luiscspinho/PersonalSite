var app = angular.module('personalSite', []);

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