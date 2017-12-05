# Paging for Dynamic Table
Paging and sorting reversely for a table with dynamic data by using AngularJS and bootstrap

In html file, to disable ***Next*** you should define your own expression: <br>
`ng-class="{disabled: pagedItems[currentPage].length < itemsPerPage}"`
  
Expression **`pagedItems[currentPage].length < itemsPerPage`** is because of the length of my sample data.

 
