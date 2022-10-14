import { getSession } from 'next-auth/react';

async function changePasswordHandler(req, res) {
    if (req.method !== "POST") {
        return
    }
    // Wichtig: hier wird die api Route abgesichert, dass nur authentifizierte User darauf zugreifen können.
    // Funktioniert genauso wie in getServerSideProps().
    const session = await getSession({ req: req });
    if (!session) {
        return res.status(401).json({ message: 'not authenticated' })
    }
    // Logik die das Passwort ändern würde

    res.status(200).json({ message: 'password changed to "tester" ' })
}

export default changePasswordHandler