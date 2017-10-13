/* global process */
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngSanitize from 'angular-sanitize';
import ngTouch from 'angular-touch';
import ngBootstrap from 'angular-ui-bootstrap';
import ngTranslate from 'angular-translate';
import ngTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';
import uiRouter from 'angular-ui-router';

import '../styles/main.scss';
import '../styles/fonts/icomoon.css';

import appConfig from './app.config';

import layout from './layout/layout';
import auth from './auth/auth';
import guide from './guide/guide';
import pitch from './pitch/pitch';
import sales from './sales/sales';

import 'jquery';
import 'tether';
import 'popper.js';
import 'bootstrap';

//Injecting service in app

// import servicesModule from './services';
import UserService from './services/data.service';
//import header controller
import HeaderController from './header/header';
import headerTemplate from './header/header.html';

import head from './header/header';

const moduleName = 'fe';

angular
  .module(moduleName, [
    ngAnimate,
    ngAria,
    ngSanitize,
    ngTouch,
    ngBootstrap,
    ngTranslate,
    ngTranslateLoaderStaticFiles,
    uiRouter,
    layout,
    auth,
    guide,
    pitch,
    sales,
    head
  ])
  .config(appConfig)
  .constant('ENVIRONNEMENT', process.env.ENV_NAME).service('User', UserService)
  .directive('header', function () {
    return {
      template: headerTemplate,
      controller:"HomeController"
      // controllerAs: "hd"
    };
  })
  .run(["$rootScope","$timeout", function ($rootScope, $timeout) {
    $timeout($rootScope.$on('$routeChangeStart', function (next, current) {
    }),1000);
  }]);

// Create the module where our functionality can attach to

export default moduleName;
