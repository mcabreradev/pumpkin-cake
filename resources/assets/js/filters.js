/**
 * Filtros utiles
 */
Vue.filter('dateOnly', function (value) {
  return moment(value).format('DD/MM/Y');
});

Vue.filter('hourSecondsOnly', function (value) {
  return moment(value, 'HH:mm:ss').format('HH:mm');
});
