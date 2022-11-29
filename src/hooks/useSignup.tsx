// import React, { useState } from "react";
// import { signUp } from "../api/cognito";
// import { useAuthContext } from "./useAuthContext";

// const useSignup = () => {
//   const [error, setError] = useState<string>("");
//   const [isLoading, setIsLoading] = useState(false);
//   const { dispatch } = useAuthContext();

//   const signup = async (
//     username: string,
//     password: string,
//     email: string,
//     name: string
//   ) => {
//     setIsLoading(true);
//     setError("");

//     const response = await signUp(username, password, email, name);
//     console.log(response);
//     if(!response){
//       setIsLoading(false);
//       setError("Something wrong")
//     }

//     if(response){
//       // set the user in local storage
//       dispatch({type: "USER": payload: response})
//     }
//   };

//   return { signup, isLoading, error };
// };

// export default useSignup;

export const useSignup = () => {};
