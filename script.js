var app = angular.module("myapp", []);

app.controller("CartForm", function ($scope) {
  $scope.cart = {
    items: [{ description: "", qty: 1, cost: 0 }],
  };

  $scope.addItem = function () {
    $scope.cart.items.push({ description: "", qty: 1, cost: 0 });
  };

  $scope.removeItem = function (index) {
    $scope.cart.items.splice(index, 1);
  };

  $scope.total = function () {
    var total = 0;
    angular.forEach($scope.cart.items, function (item) {
      if (item.qty > 0 && item.cost > 0) {
        total += item.qty * item.cost;
      }
    });
    return total;
  };

  $scope.clearCart = function () {
    if (confirm("Are you sure you want to clear the cart?")) {
      $scope.cart.items = [{ description: "", qty: 1, cost: 0 }];
    }
  };
});