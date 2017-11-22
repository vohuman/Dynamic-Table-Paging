
var app = angular.module('tableapp', []);

app.controller('myCtrl', [
    '$scope', 'myService',
    function ($scope, myService) {

        $scope.usingService = true;

        $scope.reverse = true;

        $scope.items = [];

        $scope.pagedItems = [];

        //the amount of pages to be shown
        $scope.pagesAmount = 2;

        //the amount of items per page
        $scope.itemsPerPage = 2;

        $scope.currentPage = 0;


        $scope.resetAll = function () {
            $scope.Header = ['', ''];
        }

        $scope.orderByMe = function (x) {

            $scope.resetAll()

            if ($scope.reverse)
                iconName = 'glyphicon glyphicon-chevron-up';
            else
                iconName = 'glyphicon glyphicon-chevron-down';

            $scope.reverse = !$scope.reverse;

            if ($scope.myOrderBy === x) {
                $scope.myOrderBy = '-' + x;
            } else if ($scope.myOrderBy === '-' + x) {
                $scope.myOrderBy = x;
            } else {
                $scope.myOrderBy = x;
            }

            if (x === 'name') {
                $scope.Header[0] = iconName;
            }
            else if (x === 'age') {
                $scope.Header[1] = iconName;
            }
        }

        getdata = function () {

            if ($scope.usingService) {

                console.log(myService.getData());
                $scope.items = myService.getData();

                for (var i = 0; i < $scope.items.length; i++) {
                    if (i % $scope.itemsPerPage === 0) {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.items[i]];
                    } else {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
                    }
                }
            }
            else {

                $scope.items = [
                    { name: "Anna", age: 20 },
                    { name: "Shane", age: 20 },
                    { name: "James", age: 19 },
                    { name: "Julia", age: 21 }
                ];

                for (var i = 0; i < $scope.items.length; i++) {
                    if (i % $scope.itemsPerPage === 0) {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.items[i]];
                    } else {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
                    }
                }
                
            }
        }

        $scope.range = function (size, start, end) {

            var ret = [];
            console.log(size, start, end);

            if (size < end) {
                end = size;
                start = size - $scope.pagesAmount;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            console.log(ret);
            return ret;
        };

        $scope.prevPage = function () {
            $scope.resetAll();
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.nextPage = function () {
            $scope.resetAll();
            if ($scope.currentPage < $scope.pagedItems.length - 1) {
                $scope.currentPage++;
            }
        };

        $scope.setPage = function (n) {

            $scope.resetAll();
            $scope.currentPage = n;
        };

        // functions have been describe process the data for display
        getdata();
    }
]);

app.factory('myService', function () {

    //or you can define your own method
    return {

        getData: function () {

            var data = [
                { name: "Anna", age: 20 },
                { name: "Shane", age: 18 },
                { name: "James", age: 19 },
                { name: "Julia", age: 21 },
                { name: "John", age: 22 }
            ];

            return data;
        }
    };

});
