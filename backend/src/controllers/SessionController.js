const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        console.log(':' + request.body);
        console.log('id:' + id);
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        // console.log('---'+ong);
        if (!ong) {
            return response.status(400).json({ error: 'No Ong found with this id.' });
        }
        return response.json(ong);
    }
};