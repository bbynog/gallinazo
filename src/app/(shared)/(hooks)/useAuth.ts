// import { useCallback, useEffect, useState } from 'react';

const useAuth = () => {
  // const auth = getAuth(app);

  // const [currentUser, setCurrentUser] = useState<User | null>(null);
  // // Subscribe to changes in the current user
  // useEffect(() => {
  //   // Subscribe to changes in the current user
  //   const unsubscribe = auth?.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //   });

  //   // Unsubscribe from the listener when the component unmounts
  //   return () => unsubscribe();
  // }, [auth]); // Only re-run the effect when the `auth` variable changes
  // console.log('user', !!currentUser?.uid);

  // const signOut = useCallback(() => {
  //   return auth?.signOut();
  // }, [auth]);

  return {
    currentUser: { uid: 'testing' },
    signOut: () => 'must change the code to next auth and mysql db',
  };
};

export default useAuth;
