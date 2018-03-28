export default function () {
  let vm;

  class NavbarController {
    constructor () {
      vm = this;
      vm.name = 'navbar';
    }
  }

  return new NavbarController();
}
