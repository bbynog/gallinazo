import Pusher from 'pusher';

export const pusher = new Pusher({
  appId: '1529034',
  key: '8d98df256164e76186ad',
  secret: '57349b009c14e0924a8e',
  cluster: 'us2',
  encrypted: true
});

pusher.trigger('presence-halu-channel', 'say-halu', 'HALU!!!!');
