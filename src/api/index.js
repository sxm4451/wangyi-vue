import ajax from './ajax'

export const reqMsiteData = () => ajax('/datahome')
export const reqNavData = () => ajax('/datanav')
export const reqTopicData = () => ajax('/datatopic')
export const reqSwiperUrl = () => ajax('/swiper')
