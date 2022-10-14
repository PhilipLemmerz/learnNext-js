import User from "../../../dummy-user";
import { hash } from 'bcryptjs'


async function SignUpUser(req, res) {
    if (req.method !== "POST") {
        return
    }
    
    // Valdation of Input !
    // Normalerweise kommt hier MongoDB zum einsatz 
    // hier nur dummy Lösung

    const data = req.body
    const { email, password } = data;
    console.log(data)

    const hashedPSW = await hash(password, 12);

    const newUser = {
        email: email,
        password: hashedPSW
    }

    User.push(newUser)

    console.log(newUser)

    res.status(201).json({ message: 'User created !', data: newUser })
}

export default SignUpUser