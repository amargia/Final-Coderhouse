import info from '../services/info.js';

const getAllInfo = async (req, res) => {
    const infoData = await info.getInfo(req.params.id);
    res.status(200).send(infoData);
}

export { getAllInfo }