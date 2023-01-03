import pusherJs from 'pusher-js';
import getConfig from 'next/config';
import { getAuthendpoint } from './functions';

class PusherService {
  private static serviceInstance = new PusherService();
  private pusherInstance: pusherJs | null;
  private serviceUid: string | null;

  private constructor() {
    this.pusherInstance = null;
    this.serviceUid = null;
  }

  getInstance(uid: string): pusherJs {
    if (!this.pusherInstance || uid !== this.serviceUid) {
      const { PUSHER_APP_KEY, PUSHER_APP_CLUSTER } =
        getConfig().publicRuntimeConfig;

      const authEndpoint = getAuthendpoint(uid);

      this.pusherInstance = new pusherJs(PUSHER_APP_KEY, {
        cluster: PUSHER_APP_CLUSTER,
        authEndpoint
      });
      this.serviceUid = uid;

      return this.pusherInstance;
    }
    return this.pusherInstance;
  }

  public static getServiceInstance(): PusherService {
    if (!PusherService.serviceInstance) {
      PusherService.serviceInstance = new PusherService();
    }

    return PusherService.serviceInstance;
  }
}

export default PusherService.getServiceInstance();
