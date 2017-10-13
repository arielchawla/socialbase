import angular from 'angular';
import guideRoute from './guide.route';

const moduleName = 'fe.guide';

angular
  .module(moduleName, [])
  .config(guideRoute);

export default moduleName;
