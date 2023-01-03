'use client';

import useAuth from '@hooks/useAuth';

const ProfileMenu = () => {
  const { currentUser, signOut } = useAuth();

  return (
    <div className='flex-1 flex-row'>
      <p>HALU: </p>
      <p>{currentUser?.email}</p>
      {currentUser ? <button onClick={signOut}>Logout</button> : null}
    </div>
  );
};

export default ProfileMenu;
