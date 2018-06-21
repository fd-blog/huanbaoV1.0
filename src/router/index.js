import Vue from 'vue'
import Router from 'vue-router'
import huanbao from '@/components/common/myHome'
import bsxd from '@/components/page/bsxd'
import gzcy from '@/components/page/gzcy'
import jtxd from '@/components/page/jtxd'
import ltbwz from '@/components/page/ltbwz'
import qfxd from '@/components/page/qfxd'
import stbh from '@/components/page/stbh'
import wryjg from '@/components/page/wryjg'
import zyhbjc from '@/components/page/zyhbjc'
import hbyjj from '@/components/page/hbyjj'
import hzz from '@/components/page/hzz'

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            redirect: "/huanbao/wryjg"
        },
        {
            path: '/huanbao',
            name: 'huanbao',
            component: huanbao,
            children: [{
                    path: '/huanbao/bsxd',
                    name: '碧水行动',
                    component: bsxd
                },
                {
                    path: '/huanbao/gzcy',
                    name: '公众参与',
                    component: gzcy
                },
                {
                    path: '/huanbao/jtxd',
                    name: '净土行动',
                    component: jtxd
                },
                {
                    path: '/huanbao/ltbwz',
                    name: '蓝天保卫战',
                    component: ltbwz
                },
                {
                    path: '/huanbao/qfxd',
                    name: '清废行动',
                    component: qfxd
                },
                {
                    path: '/huanbao/stbh',
                    name: '生态保护',
                    component: stbh
                },
                {
                    path: '/huanbao/wryjg',
                    name: '污染源监管',
                    component: wryjg
                },
                {
                    path: '/huanbao/zyhbjc',
                    name: ' 中央环保督察',
                    component: zyhbjc
                },
                {
                    path: '/huanbao/hbyjj',
                    name: ' 环境与经济',
                    component: hbyjj
                },
                {
                    path: '/huanbao/hzz',
                    name: ' 河长制',
                    component: hzz
                }
            ]
        }
    ]
})