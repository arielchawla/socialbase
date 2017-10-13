import guideCodeEn from './views/en.html';
import guideCodePt from './views/pt.html';

const guideRoute = ($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('guide', {
      abstract: true,
      url     : '/guide'
    })
    .state('guide.en', {
      url     : '/en',
      template: guideCodeEn
    })
    .state('guide.pt', {
      url     : '/pt',
      template: guideCodePt
    });
};

export default guideRoute;
