import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'https://api.open.fec.gov/v1/candidates/totals/?office=P&page=1&cycle=2016&per_page=20&api_key=CM6aede8buIUxkluklIvJDAm2wBaRKQkKK2x0cIP';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
