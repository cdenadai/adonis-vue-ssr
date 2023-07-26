// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DashboardController {

    async index({ inertia }) {
        return inertia.render("Dashboard", {
            title: "Dashboard",
            message: "Hello World Vue On Adonis",
        });
    }    
}
