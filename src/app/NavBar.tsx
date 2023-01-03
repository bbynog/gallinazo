import Link from 'next/link';
import ProfileMenu from './ProfileMenu';

const NavBar = () => {
  return (
    <div
      className={
        'flex-1 h-8 min-h-8 w-full flex-row content-between bg-indigo-500'
      }>
      <button className={'px-5 text-white'}>
        <Link href={'/signup'}>SignUp</Link>
      </button>
      <button>
        <Link href={'/signin'}>SignIn</Link>
      </button>
      <button>
        <Link href={'/dashboard'}>dashboard</Link>
      </button>
      <button>
        <Link href={'/about'}>About (presencechannel testing)</Link>
      </button>
      <ProfileMenu />
    </div>
  );
};

export default NavBar;
