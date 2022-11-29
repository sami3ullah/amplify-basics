import { Auth } from 'aws-amplify';

export const signUp = async (
  username: string,
  password: string,
  email: string,
  name: string
) => {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        name,
      },
      autoSignIn: {
        enabled: true,
      },
    });
    return user;
  } catch (error: any) {
    return error.message;
  }
};

export const signIn = async (username: string, password: string) => {
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (error) {
    console.log("error signing in", error);
  }
};

export const confirmSignUp = async (username: string, code: string) => {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("error confirming sign up", error);
  }
};

export const resendConfirmationCode = async (username: string) => {
  try {
    await Auth.resendSignUp(username);
  } catch (err: any) {
    throw new Error("error resending code: ", err);
  }
};
