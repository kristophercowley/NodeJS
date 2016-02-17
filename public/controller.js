app.controller('MainController', function ($scope) {
    $scope.test = "test";
})

app.controller('HomeController', function ($scope, $http) {
    $scope.test = "home page test";
    $scope.talkToServer = function () {
        $http.get('/doesitwork')
            .success(function (res) {
                $scope.serverMessage = res;
                console.log(res)
                // debugger
            })
            .error(function (res) {
                console.log(res)
                // debugger
            })
    }

    $scope.remove = function (i) {
        $scope.words.splice(i, 1);
    }
    $scope.push = function (i) {
        $scope.words.push({ "one": $scope.newitem })
    }
    $scope.words = [
        {
            one: "One"
        },
        {
            one: "Two"
        },
        {
            one: "Three"
        },
        {
            one: "Four"
        },
    ]
})

app.controller('NotHomeController', function ($scope) {
    $scope.test = "not home page test";
    $scope.remove = function (i) {
        $scope.things.splice(i, 1);
    }
    $scope.things = [
        {
            one: "this"
        },
        {
            one: "that"
        },
        {
            one: "thee"
        },
        {
            one: "other"
        },
    ]
})