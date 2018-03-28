export default function () {
  let vm;

  class HeroController {
    constructor () {
      vm = this;
      vm.name = 'hero';
    }
  }

  return new HeroController();
}
