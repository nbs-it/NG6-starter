import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appConfig from './app.config';
import Common from './common/common';
import Components from './components/components';
import Directives from './directives/directives';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  Common,
  Components,
  Directives
])
  .config(appConfig)
  .component('app', AppComponent);
