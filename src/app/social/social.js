app.controller('socialController', ['$scope', function($scope){
    $scope.socialNetworks = [
                {
                    name: "Twitter",
                    id: "twitter",
                    link: "http://www.twitter.com/LuisCSPinho",
                    description: "Want to know where am I flying?",
                    dataHover: "Or you can just mess around!",
                    className: "socialIcon",
                    path: "/assets/twitter.png",
                    animation: false
                },
                {
                    name: "LinkedIn",
                    id: "linkedin",
                    link: "https://www.linkedin.com/in/luiscspinho",
                    description: "Why don't you link with me?",
                    dataHover: "I won't say no.",
                    className: "socialIcon",
                    path: "/assets/linkedin.png",
                    animation: false
                },
                {
                    name: "GitHub",
                    id: "github",
                    link: "https://github.com/luiscspinho/",
                    description: "Some code of my own?",
                    dataHover: "Including this site.",
                    className: "socialIcon",
                    path: "/assets/github.png",
                    animation: false
                },
                {
                    name: "Lastfm",
                    id: "lastfm",
                    link: "http://www.last.fm/user/LuisCSPinho",
                    description: "There is no better music for you to listen!",
                    dataHover: "If you have good taste.",
                    className: "socialIcon",
                    path: "/assets/lastfm.png",
                    animation: false
                },
                {
                    name: "I don't have Facebook!",
                    id: "facebook",
                    link: "http://luispinhodoesnthavefacebook.com/",
                    description: "Simply my facebook page",
                    dataHover: "I am sorry...",
                    className: "facebookIcon",
                    path: "/assets/blank.png",
                    animation: true,
                    enable: true
                }
                ];

    $scope.aboutMeInfo = "QA Engineer with great passion for automation process, front-end technologies and web development. Fan of Scrum and Agile methodologies.";

    $scope.detailsAboutMe = {
        music: "lover.",
        book: "enthusiast.",
        travel: "passionate."
    };

    $scope.events = {
        mouseEnter : function (social) {
            social.enable = false;
        }
    };
}]);