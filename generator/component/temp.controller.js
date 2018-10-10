export default function () {
  let vm;

  class <%= upCaseName %>Controller {
    constructor () {
      vm = this;
      vm.name = '<%= name %>';
    }
  }

  return new <%= upCaseName %>Controller()
}
