"use strict";

module.exports = (srv) => {

    // Reply mock data for Books...
    srv.on('READ', 'Users', async (req) => {

        const users = [
            {
                email: 'joachim.vanpraet@flexso.com',
                firstname: 'Joachim',
                lastname: 'Van Praet'
            },
            {
                email: 'nico.deleener@flexso.com',
                firstname: 'Nico',
                lastname: 'Deleener'
            }
        ]
        // try to get the cards for each user
        // users.forEach(usr => {
        //     usr.cards.push({

        //     })
        // })
        console.log(req.query)
        return users;
    }
    )

}