export const getAuthendpoint = (uid: string) => {
  const params = new URLSearchParams();
  params.set('user_id', uid);

  return `/api/pusher/user-auth?${params.toString()}`;
};
