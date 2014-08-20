var app = angular.module('personalSite', []);


app.controller('socialController', ['$scope', function($scope){
    $scope.socialNetworks = [
                {
                    name: "Twitter",
                    id: "twitter",
                    link: "http://www.twitter.com/LuisCSPinho",
                    description: "Wanna know where am I flying?",
                    dataHover: "Or just mess around...",
                    className: "socialIcon",
                    path: "/assets/twitter.png",
                    animation: false
                },
                {
                    name: "LinkedIn",
                    id: "linkedin",
                    link: "https://www.linkedin.com/in/luiscspinho",
                    description: "Why don't you link with me?",
                    dataHover: "On LinkedIn only...",
                    className: "socialIcon",
                    path: "/assets/linkedin.png",
                    animation: false
                },
                {
                    name: "GitHub",
                    id: "github",
                    link: "https://github.com/luiscspinho/",
                    description: "Some code of my own?",
                    dataHover: "Be careful...",
                    className: "socialIcon",
                    path: "/assets/github.png",
                    animation: false
                },
                {
                    name: "Lastfm",
                    id: "lastfm",
                    link: "http://www.last.fm/user/LuisCSPinho",
                    description: "There is no better music for you to listen",
                    dataHover: "For real...",
                    className: "socialIcon",
                    path: "/assets/lastfm.png",
                    animation: false
                },
                {
                    name: "I don't have Facebook!",
                    id: "facebook",
                    link: "http://luispinhodoesnthavefacebook.com/",
                    description: "Simply my facebook page",
                    dataHover: "Facebook, facebook...",
                    className: "facebookIcon",
                    path: "/assets/blank.png",
                    animation: true,
                    enable: true
                }
                ];

    $scope.aboutMeInfo = "Hi. I am a QA Engineer with great passion for automation process, frontend technologies and web development. I am very passionate about Scrum and Agile methodologies.";

    $scope.detailsAboutMe = {
        name: "Luís Pinho",
        age: "25",
        email: "luiscspinho@gmail.com",
    };

    $scope.events = {
        mouseEnter : function (social) {
            social.enable = false;
        }
    };

}]);

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