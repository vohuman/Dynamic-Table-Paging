# Paging for Dynamic Table
Paging and sortig reversely for a table with dynamic data by using AngularJS and bootstrap

To disable ***Next*** you should define your own expression: <br>
<code>ng-class="{disabled: pagedItems[currentPage].length < itemsPerPage}"</code>
  
Expression **<code>pagedItems[currentPage].length < itemsPerPage</code>** is because of the lenght of my sample data.
