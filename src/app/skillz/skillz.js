app.controller('skillzController', ['$scope', function($scope){
    $scope.skillz = [
                {
                    father: "Web",
                    description: "I love the web. I have great interest in web technologies like Javascript and recently I discovered and fell in love with AngularJS. I build things for fun, and my fun is neverending.",
                    skillClass: "js.png",
                    children: [
                        {
                            child: "Javascript"
                        },
                        {
                            child: "HTML"
                        },
                        {
                            child: "CSS"
                        },
                        {
                            child: "AngularJS"
                        }
                    ]
                },
                {
                    father: "Tests",
                    description: "Tests are, and always have been, my greatest passion. I have a great eye and love analytical thinking. I'm interested not only in test automation but in continuous integration, with some experience now in a continuous delivery approach.",
                    skillClass: "test.png",
                    children: [
                        {
                            child: "Test Automation"
                        },
                        {
                            child: "Test Definition"
                        },
                        {
                            child: "Groovy"
                        },
                        {
                            child: "Selenium"
                        },
                        {
                            child: "Protractor"
                        },
                        {
                            child: "Jasmine"
                        }
                    ]
                },
                {
                    father: "Scrum",
                    description: "I've always worked with scrum. I'm a Certified ScrumMaster® (CSM) by Scrum Alliance and worked as a scrum master for roughly 1 year for a team of 6 people.",
                    skillClass: "scrum.JPG",
                    children: [
                        {
                            child: "ScrumMaster"
                        }
                    ]
                },
                {
                    father: "Soft Skills",
                    description: "I love communication and I'm good at it. There is no better way for you to find out if you don't contact me. Feel free!",
                    skillClass: "soft.JPG",
                    children: [
                        {
                            child: "Communication"
                        },
                        {
                            child: "English"
                        }
                    ]
                }
    ];
}]);