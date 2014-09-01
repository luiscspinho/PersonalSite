app.controller('skillzController', ['$scope', function($scope){
    $scope.skillz = [
                {
                    father: "Web",
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
                },
                {
                    father: "Soft Skills",
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
/*
app.directive("cenas", function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.bind('mouseenter', function() {
                console.log("CENAS");
            });
        }
    };
});*/