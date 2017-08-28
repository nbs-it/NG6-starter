import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

let <%= name %>Component = {
  bindings: { },
  template,
  controller,
  controllerAs: 'vm'
};

// controller.$inject = [''];

export default <%= name %>Component;
