'use strict';

angular.module('weatherApp')

  .service('WeatherService', function ($http, $q) {

    const API_URL = "http://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q=";
    const API_KEY = "7c5ce78a2ff0501fc1657cf229981aac";

    this.get = (city) => {
      let defer = $q.defer();

      $http.get(`${API_URL}${city}&APPID=${API_KEY} `).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });
      return defer.promise;
    }
  });