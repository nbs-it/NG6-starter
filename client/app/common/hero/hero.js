import angular from 'angular';
import heroComponent from './hero.component';

let heroModule = angular.module('hero', [
])
  .component('hero', heroComponent)
  .name;

export default heroModule;
