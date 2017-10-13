import angular from 'angular';
import pitchRoute from './pitch.route';

const moduleName = 'fe.pitch';

angular
  .module(moduleName, [])
  .config(pitchRoute);

export default moduleName;
