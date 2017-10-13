import angular from 'angular';

import layoutRoute from './layout.route';
import HomeController from './controllers/home.controller';

const moduleName = 'fe.layout';

angular
  .module(moduleName, [])
  .controller('HomeController', HomeController)
  .config(layoutRoute);

export default moduleName;
