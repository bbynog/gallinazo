'use client';

import pusherJs from 'pusher-js';
import { getAuthendpoint } from './functions';
import { clientEnv } from 'src/env/client.mjs';

class ClientPusherService {
  private static serviceInstance = new ClientPusherService();
  private pusherInstance: pusherJs | null;
  private serviceUid: string | null;

  private constructor() {
    this.pusherInstance = null;
    this.serviceUid = null;
  }

  getInstance(uid: string): pusherJs {
    if (!this.pusherInstance || uid !== this.serviceUid) {
      const PUSHER_APP_KEY = clientEnv.NEXT_PUBLIC_PUSHER_APP_KEY;
      const PUSHER_APP_CLUSTER = clientEnv.NEXT_PUBLIC_PUSHER_APP_CLUSTER;
      console.log(
        '🚀 ~ file: index.ts:18 ~ PusherService ~ getInstance ~ PUSHER_APP_CLUSTER',
        PUSHER_APP_CLUSTER
      );
      console.log(
        '🚀 ~ file: index.ts:18 ~ PusherService ~ getInstance ~ PUSHER_APP_KEY',
        PUSHER_APP_KEY
      );

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

  public static getServiceInstance(): ClientPusherService {
    if (!ClientPusherService.serviceInstance) {
      ClientPusherService.serviceInstance = new ClientPusherService();
    }

    return ClientPusherService.serviceInstance;
  }
}

export default ClientPusherService.getServiceInstance();
