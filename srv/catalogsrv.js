const cds = require('@sap/cds');
const { Books } = cds.entities;

module.exports = srv => {
    const db = cds.db;

    //   srv.on('READ', 'Bookset',async (req,resp)=>{
    //       results = [];
    //       results = await db.run([
    //            SELECT.from(Books).where({ ID: req.data.ID })
    //       ]);
    //        return results;
    //    });

    srv.on('CREATE', 'Bookset', async (req, resp) => {
        results = [];
        results = await db.run([
            INSERT.into(Books).entries(req.data)
        ])
            .then((resolve, rejeect) => {
                if (resolve)
                    return req.data;
                else
                    return req.error(400, 'Failed to create book');
            })
            .catch(err => {
                return req.error(400, 'Try after some time');
            }
            )
        return results;
    });
}
