import pitchTemplate from './views/pitch.html';

const pitchRoute = ($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('pitch', {
      url     : '/pitch',
      template: pitchTemplate
    });
};

export default pitchRoute;
