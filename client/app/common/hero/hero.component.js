import template from './hero.html';
import controller from './hero.controller';
import './hero.scss';

let heroComponent = {
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default heroComponent;
