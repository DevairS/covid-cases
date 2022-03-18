import AppStore from './app.store';
import CovidStore from './covid.store';

class RootStore {
  app: AppStore;

  covid: CovidStore;

  constructor() {
    this.app = new AppStore();
    this.covid = new CovidStore();
  }
}

const store = new RootStore();
export { RootStore, AppStore, CovidStore };
export default store;
