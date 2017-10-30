'use strict';

angular.module('components', [])
  .component('citiesList', {
    templateUrl: 'js/citiesList.html',
    controller: function($timeout) {
      this.$onInit = () => {
        this.cities = [];
      };
      this.validate = (city) => {
        if (this.cities.indexOf(city) === -1) {
          this.cities.push(city);
        } else {
          this.error = `${city} existe déjà !`;
          $timeout(() => {this.error = '';}, 10000);
        }
      }
    }
  });