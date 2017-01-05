
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');

/**
 * Parse, validate, manipulate, and display dates in JavaScript.
 */

window.moment = require('moment');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');


/**
 * The plugin for Vue.js provides services for making web requests
 * and handle responses using a XMLHttpRequest or JSONP.
 */

require('vue-resource');


/**
 *  Events is a var that has a vue instance for haddle events such as emit, on, off
 *
 *  to emit   -> Events.$emit('key', val);
 *  to listen -> Events.$on('key', function(val){ console.log(val) });
 *  to off    -> Events.$off('key', val);
 */

window.Events = new Vue({});

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
  request.headers['X-CSRF-TOKEN'] = Laravel.csrfToken;

  next();
});


/**
* Laravel routes
*/

window.Routes = require('./routes.js');


/**
* Config
*/

require('./config');


/**
* Filters
*/

require('./filters');
