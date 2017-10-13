import loginTemplate from './views/login.html';
import userTemplate from './views/userinfo.html';

const authRoute = ($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('auth', {
      abstract: true,
      url     : '/auth'
      // controller:'HeaderController',
      // controllerAs:'hd'
    })
    .state('auth.login', {
      url     : '/login',
      controller  : 'AuthController',
      controllerAs: 'au',
      template    : loginTemplate
    })
    .state('auth.user', {
      url     : '/user',
      controller  : 'AuthController',
      controllerAs: 'au',
      template    : userTemplate
    });
  
};

export default authRoute;
