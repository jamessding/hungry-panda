/* exported data */

var data = {
  view: 'search-form',
  results: [],
  pricing: null,
  distance: 10,
  foodType: '',
  latitude: null,
  longitude: null
};

var previousDataJSON = localStorage.getItem('data-local-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-local-storage', dataJSON);
  this.localStorage.clear();
});
