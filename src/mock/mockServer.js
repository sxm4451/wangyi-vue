import Mock from 'mockjs'
import dataHome from './datahome.json'
import dataNav from './datanav.json'
import dataTopic from './datatopic.json'
import SwiperData from './swiper.json'

Mock.mock('/datahome',{code:0,data:dataHome})
Mock.mock('/datanav',{code:0,data:dataNav.categoryL1List})
Mock.mock('/datatopic',{code:0,data:dataTopic})
Mock.mock('/swiper',{code:0,data:SwiperData.banner})
