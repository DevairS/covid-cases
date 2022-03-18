import { makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist('object')
  userLocation: GeolocationPosition = null;

  getGeolocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    });
  }

  setGeolocation = async (): Promise<void> => {
    this.userLocation = await this.getGeolocation();
  };
}

export default AppStore;
