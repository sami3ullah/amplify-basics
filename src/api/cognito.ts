import { Auth } from 'aws-amplify';

export const signUp = async (username:string, password:string, email:string, name:string) => {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,
                name
            },
            autoSignIn: { 
                enabled: true,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export const signIn = async (username:string, password:string) => {
  try {
      const user = await Auth.signIn(username, password);
  } catch (error) {
      console.log('error signing in', error);
  }
}