import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/punto-venta'
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/huesped-lista',
        name: 'HuespedLista',
        component: () => import(/* webpackChunkName: "HuespedLista" */ '../views/Huesped/Lista')
    },
    {
        path: '/huesped-nuevo',
        name: 'HuespedNuevo',
        component: () => import(/* webpackChunkName: "HuespedNuevo" */ '../views/Huesped/Nuevo')
    },
    {
        path: '/punto-venta',
        name: 'Venta',
        component: () => import(/* webpackChunkName: "PuntoVenta" */ '../views/Venta')
    },
    {
        path: '/reportes',
        name: 'Reporte',
        component: () => import(/* webpackChunkName: "Reporte" */ '../views/Reportes')
    },
    {
        path: '/caja',
        name: 'Caja',
        component: () => import(/* webpackChunkName: "Caja" */ '../views/Caja')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
