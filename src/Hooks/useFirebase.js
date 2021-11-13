import initAuth from "../Firebase/init";
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

initAuth()

const useFirebase = () => {

    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    // providers 
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
        .finally(() => setIsLoading(false))
    }

    // register create 
  const register =(email, password)=>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user)
      sevaUser(email.displayName)
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(()=> setIsLoading(false));
  }

  // signIn With Email And Password
  const loginUser = (email, password)=>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    setError('')
    sevaUser(email.displayName)
  })
  .catch((error) => {
    setError(error.message);
  })
  .finally(()=> setIsLoading(false));
  }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    },[])

        // logOut function
      const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            
        })
        .finally(() => setIsLoading(false))
      }
      const sevaUser =(email,displayName)=>{
        const user = {email, displayName};
        fetch('https://damp-dusk-48668.herokuapp.com/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
      }

    return {
        handleGoogle,
        user,
        error,
        setUser,
        setError,
        logOut,
        isLoading,
        register,
        loginUser,
    }
};

export default useFirebase;