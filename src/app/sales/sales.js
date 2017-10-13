import angular from 'angular';
import salesRoute from './sales.route';

const moduleName = 'fe.sales';

angular
  .module(moduleName, [])
  .config(salesRoute);

export default moduleName;
