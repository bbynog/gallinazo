'use client';

import useAuth from '@hooks/useAuth';

const ProfileMenu = () => {
  const { currentUser, signOut } = useAuth();

  return (
    <div className='flex flex-row'>
      <p>HALU: </p>
      <p>{currentUser?.uid}</p>
      {currentUser ? <button onClick={signOut}>Logout</button> : null}
    </div>
  );
};

export default ProfileMenu;
