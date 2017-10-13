import salesTemplate from './views/sales.html';

const salesRoute = ($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('sales', {
      url     : '/sales',
      template: salesTemplate
    });
};

export default salesRoute;
