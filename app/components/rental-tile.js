import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateRentalForm: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    destroy(rental) {
      if(confirm('Are you sure you want to delete?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
//  isImageShowing: false',' < DO NOT FORGET COMMA AFTER VAR
//    imageShow: function() {
    //   this.set('isImageShowing', true);
    // }, < DO NOT FORGET COMMA AFTER FUNCTION
