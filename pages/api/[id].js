function handler(req, res) {
    if (req.method === "GET") {
        const id = req.query.id;
        console.log(id)
        res.status(200).json({id: id});
    }
}

export default handler