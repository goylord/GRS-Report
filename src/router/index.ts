import { createRouter, createWebHashHistory } from 'vue-router'
import { viewRegister } from '@/utils/system'

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'designer',
        component: viewRegister('designer/index')
    }]
})

export default Router