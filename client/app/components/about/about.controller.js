export default function () {
  let vm;

  class AboutController {
    constructor () {
      vm = this;
      vm.name = 'about';
    }
  }

  return new AboutController();
}
