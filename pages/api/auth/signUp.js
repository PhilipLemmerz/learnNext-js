import User from "../../../dummy-user";
import { hash } from 'bcryptjs';

async function SignUpUser(req, res) {
    if (req.method !== "POST") {
        return
    }
    const data = req.body
    const { email, password } = data;
    
    // Valdation of Input !
    // Normalerweise kommt hier MongoDB zum einsatz 
    // hier nur dummy Lösung

    const existingUser = User.filter(u => u.email === email);

    if (existingUser.length > 0) {
        return res.status(422).json({ message: 'User existis already' })
    }

    const hashedPSW = await hash(password, 12);
    const newUser = {
        email: email,
        password: hashedPSW
    }
    console.log(newUser)
    User.push(newUser)
    res.status(201).json({ message: 'User created !', data: newUser })
}

export default SignUpUser