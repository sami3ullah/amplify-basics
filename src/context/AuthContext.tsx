import React, { useReducer } from "react";

export const AuthContext = React.createContext(null);

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "USER":
      return { user: action.payload };
    case "LOGIN":
      return { loginState: true };
    case "LOGOUT":
      return {
        user: null,
        loginState: false,
      };
    default:
      return state;
  }
};

const AuthContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loginState: false,
  });
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
