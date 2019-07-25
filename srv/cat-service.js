"use strict";

module.exports = (srv) => {

    // Reply mock data for Books...
    srv.on('READ', 'Users', async (req) => {

        return [
            {
                email: 'jef.dev@test.com',
                firstname: 'Jef',
                lastname: 'dev'
            },
            {
                email: 'jan.jansen@test.com',
                firstname: 'Jan',
                lastname: 'Jansen'
            }
        ]
    }
    )

}