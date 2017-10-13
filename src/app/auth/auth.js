import angular from 'angular';
import authRoute from './auth.route';
import AuthController from './controllers/auth.controller';
const moduleName = 'fe.auth';

angular
  .module(moduleName, [])
  .controller('AuthController', AuthController)
  .config(authRoute);

export default moduleName;
