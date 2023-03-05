import SignOutButton from '@components/SignOutButton';
import { getServerAuthSession } from '@features/authentication/getServerAuthSession';

const ProfileMenu = async () => {
  const session = await getServerAuthSession();
  return (
    <div className='flex flex-row'>
      <>
        <p>HALU: </p>
        <p>{session?.user.name || session?.user.email || 'Guest'}</p>
        {session?.user.id ? <SignOutButton children={'Sign Out'} /> : null}
      </>
    </div>
  );
};

export default ProfileMenu;
