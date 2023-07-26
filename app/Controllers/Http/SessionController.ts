// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionController {

    async login({ inertia }) {
        return inertia.render("Login", {
            title: "Home",
            message: "Hello World Vue On Adonis",
        });
    }

    async authenticate ({ auth, request, response }) {
        const email = request.input('email')
        const password = request.input('password')
        const rememberMe = request.input('rememberMe')
      
        try {
          await auth.use('web').attempt(email, password, rememberMe)
          response.redirect('/dashboard')
        } catch {
          return response.badRequest('Invalid credentials')
        }
    }
    
}
