import Ember from 'ember';

export function billCommittee(bill) {
  console.log(bill.committee_ids[0]);
  var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=d80443fa3bce480987512151213c5e88&committee_id=' + bill.committee_ids[0];

  var resultName;

  return Ember.$.getJSON(url).then(function(responseJSON) {
    this.resultName = responseJSON.results[0].name;
    console.log(this.resultName);
    return this.resultName;


  });
  // return Ember.$.getJSON(url).then(function(responseJSON) {
  //   console.log(responseJSON.results[0].committee_id);
  //   if (responseJSON.results[0].committee_id === bill[0].committee_ids[0]) {
  //     // return ("Hello");
  //   };
  // });
}

export default Ember.Helper.helper(billCommittee);
