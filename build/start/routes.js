"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const HealthCheck_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/HealthCheck"));
Route_1.default.get('/', async ({ view }) => {
    return view.render('welcome');
});
Route_1.default.group(() => {
    Route_1.default.get('/login', 'SessionController.login').as('login');
    Route_1.default.post('/authenticate', 'SessionController.authenticate').as('authenticate');
});
Route_1.default.group(() => {
    Route_1.default.get('/dashboard', 'DashboardController.index').as('dashboard');
}).middleware('auth');
Route_1.default.get('health', async ({ response }) => {
    const report = await HealthCheck_1.default.getReport();
    return report.healthy
        ? response.ok(report)
        : response.badRequest(report);
});
//# sourceMappingURL=routes.js.map