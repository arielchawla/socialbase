import layoutTemplate from './views/default.html';

import criarPitchTemplate from './views/criar-pitch.html';
import materiaisTemplate from './views/materiais.html';
import materialTemplate from './views/new-material.html';
import creatematerialsTemplate from './views/create-materials.html';
import meusPitchsTemplate from './views/meus-pitchs.html';

import resumoDoCenarioTemplate from './views/resumo-do-cenario.html';
import gestaoPitchTemplate from './views/gestao-pitch.html';
import editarConteudoTemplate from './views/editar-conteudo.html';
import apresentacaoPitchTemplate from './views/apresentacao-pitch.html';

import modalTemplate from './views/modal.html';

const layoutRoute = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('app', {
      abstract: true,
      url: '/',
      template: layoutTemplate
    })
    .state('home', {
      url: '/home',
      controller: 'HomeController',
      controllerAs: 'vm',
      template: criarPitchTemplate
    })
    .state('criar-pitch', {
      url: '/criar-pitch',
      controller: 'HomeController',
      template: criarPitchTemplate
    })
    .state('materiais', {
      url: '/materiais',
      controller: 'HomeController',
      controllerAs: 'vm',
      template: materiaisTemplate
    })
    .state('new-material', {
      url: '/new-material',
      controller: 'HomeController',
      controllerAs: 'vm',
      template: materialTemplate
    })
    .state('create-materials', {
      url: '/create-materials',
      controller: 'HomeController',
      controllerAs: 'vm',
      template: creatematerialsTemplate
    })
    .state('meus-pitchs', {
      url: '/meus-pitchs',
      template: meusPitchsTemplate
    })
    .state('resumo-do-cenario', {
      url: '/resumo-do-cenario',
      template: resumoDoCenarioTemplate
    })
    .state('gestao-pitch', {
      url: '/gestao-pitch',
      template: gestaoPitchTemplate
    })
    .state('apresentacao-pitch', {
      url: '/apresentacao-pitch',
      template: apresentacaoPitchTemplate
    })
    .state('editar-conteudo', {
      url: '/editar-conteudo',
      template: editarConteudoTemplate
    })
    .state('default', {
      url: '/default',
      controller: 'HomeController',
      controllerAs: 'vm',
      template: layoutTemplate
    })
    .state('modal', {
      url: '/modal',
      template: modalTemplate
    });

  $urlRouterProvider.otherwise('/auth/login');
};

export default layoutRoute;