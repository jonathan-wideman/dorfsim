(function(data) {
    var app = angular.module('simDwarf', []);

    app.controller('mainController', ['$scope', function($scope){

        $scope.game = game;
        $scope.fortress = fortress;

        $scope.supplies = supplies;
        $scope.rooms = rooms;
        $scope.population = population;

        $scope.debug = debug;

    }]);

    app.filter('area', function() {
        return function(input, units) {
            input = input || '';
            units = units || 'm²';
            return input + units;
        };
    });

    debug = {
        cheats: true,
    }

    now = new Date();
    game = {
        date: now,
    }

    fortress = {
        name: "Guzrimtar",
    }

    supplies = [
        {item: {name: 'Food', icon: 'gfx/sliced-bread.png'}, amount: 0},
        {item: {name: 'Drink', icon: 'gfx/beer-stein.png'}, amount: 0},
        {item: {name: 'Stone', icon: 'gfx/stone-block.png'}, amount: 0},
        {item: {name: 'Wood', icon: 'gfx/wood-pile.png'}, amount: 0},
        {item: {name: 'Iron', icon: 'gfx/metal-bar.png'}, amount: 0},
        {item: {name: 'Gems', icon: 'gfx/emerald.png'}, amount: 0},
        {item: {name: 'Crystal', icon: 'gfx/crystal-growth.png'}, amount: 0},
        {item: {name: 'Sulfur', icon: 'gfx/powder.png'}, amount: 0},
        {item: {name: 'Mercury', icon: 'gfx/round-bottom-flask.png'}, amount: 0},
        {item: {name: 'Money', icon: 'gfx/crown-coin.png'}, amount: 0},
        {item: {name: 'Magic', icon: 'gfx/doubled.png'}, amount: 0},
    ]

    rooms = [
        {template: {name: 'Meeting Hall'}, area: 50},
        {template: {name: 'Garden'}, area: 20},
        {template: {name: 'Garden'}, area: 20},
    ]

    population = [
        {name: 'Urist Bembulinod'},
        {name: 'Stodir Gutsilgut'},
        {name: 'Vucar Dastotnicat'},
    ]



})(data);
