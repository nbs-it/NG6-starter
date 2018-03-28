export default function () {
  let vm;

  class HomeController {
    constructor () {
      vm = this;
      vm.name = 'home';
    }
  }

  return new HomeController();
}
