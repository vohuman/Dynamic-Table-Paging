(function () {
    var app = angular.module('tableapp');
    app.$inject = ['$scope', '$filter'];
    app.controller('myCtrl', [
        '$scope', 'myService',
        function ($scope, myService) {

            $scope.reverse = true;

            $scope.items = [];

            $scope.pagedItems = [];

            $scope.refresh = function () {
                getdata();
            };

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

            $scope.gap = 5;

            filteredItems = [];
            groupedItems = [];
            $scope.itemsPerPage = 10;

            $scope.currentPage = 0;

            getdata = function () {

                myService.getAllData().then(function (result) {

                    console.log(result);
                    $scope.items = result.data;

                    for (var i = 0; i < $scope.data.length; i++) {
                        if (i % $scope.itemsPerPage === 0) {
                            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.items[i]];
                        } else {
                            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
                        }
                    }
                });
            }

            $scope.range = function (size, start, end) {

                var ret = [];
                console.log(size, start, end);

                if (size < end) {
                    end = size;
                    start = size - $scope.gap;
                }
                for (var i = start; i < end; i++) {
                    ret.push(i);
                }
                console.log(ret);
                return ret;
            };

            $scope.prevPage = function () {

                if ($scope.currentPage > 0) {
                    $scope.currentPage--;
                }
            };

            $scope.nextPage = function () {

                if ($scope.currentPage < $scope.pagedItems.length - 1) {
                    $scope.currentPage++;
                }
            };

            $scope.setPage = function (n) {

                $scope.currentPage = n;
            };

            // functions have been describe process the data for display
            getdata();
        }
    ]);


})();