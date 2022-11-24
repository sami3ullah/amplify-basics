import { Auth } from 'aws-amplify';

async function signIn(username:string, password:string) {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

export default signIn