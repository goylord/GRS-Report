import { createRouter, createWebHashHistory } from 'vue-router'
import { viewRegister } from '@/utils/system'

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'index',
        redirect: '/designer'
    }, {
        path: '/designer',
        name: 'designer',
        component: viewRegister('designer/index')
    }, {
        path: '/dataSource',
        name: 'dataSource',
        component: viewRegister('dataSource/index')
    }, {
        path: '/dataSet',
        name: 'dataSet',
        component: viewRegister('dataSet/index')
    }]
})

export default Router