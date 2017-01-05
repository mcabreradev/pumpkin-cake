/**
 * Mostrar Errores y Warings
 */
Vue.config.silent = false;

/**
 * Define el endpoint
 */
window.API = 'api.v2';


/**
 * Para hacer mas facil y comoda la redireccion
 */
window.Redirect = function (url) {
  if (!url) {
    return;
  }
  window.location.replace(url);
};
