const generatePresenceChannelName = (uid: string) => {
  if (!uid) {
    return '';
  }

  const now = Date.now().toString();
  return `presence-${uid.substring(
    uid.length / 2,
    uid.length - 1,
  )}-${now.substring(now.length / 2, now.length - 1)}`;
};

export default generatePresenceChannelName;
