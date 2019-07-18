'use strict'


const User = use('App/Models/User')

class UserController {
    async create({ request, response, auth }){
        
         const dataUser = request.only(['name', 'username', 'email', 'password'])

         try {
             // save user to database
            const user = await User.create(dataUser)
            // generate JWT token for user
            //const token = await auth.generate(user)

            await auth.login(user);
            return response.redirect('/');
            console.log('User created')

         } catch (error) {
             console.log(error)
         }

         
    }
}

module.exports = UserController
