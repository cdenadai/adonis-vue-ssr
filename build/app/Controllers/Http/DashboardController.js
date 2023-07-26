"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DashboardController {
    async index({ inertia }) {
        return inertia.render("Dashboard", {
            title: "Dashboard",
            message: "Hello World Vue On Adonis",
        });
    }
}
exports.default = DashboardController;
//# sourceMappingURL=DashboardController.js.map