import { Auth } from 'aws-amplify';

const signUp = async (username:string, password:string, email:string, name:string) => {
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

export default signUp;