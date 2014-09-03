app.controller('skillzController', ['$scope', function($scope){
    $scope.skillz = [
                {
                    father: "Web",
                    skillClass: "back2.JPG",
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
                    skillClass: "back6.JPG",
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
                    skillClass: "back6.JPG"
                },
                {
                    father: "Soft Skills",
                    skillClass: "back2.JPG",
                    children: [
                        {
                            child: "Verbal Communication"
                        },
                        {
                            child: "English"
                        }
                    ]
                }
    ];
}]);