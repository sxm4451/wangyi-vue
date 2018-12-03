import {
  reqMsiteData,
  reqNavData,
  reqTopicData,
  reqSwiperUrl
}from '../api'
import {
  RECEIVE_MSITE_DATA,
  RECEIVE_NAV_DATA,
  RECEIVE_TOPIC_DATA,
  RECEIVE_SWIPER_DATA,
  RECEIVE_NAV_INDEX,
}from './mutation-types'

export default ({
  async getMsiteData({commit},cb){
  const result = await reqMsiteData()
  if(result.code === 0){
    const data = result.data
    commit(RECEIVE_MSITE_DATA,{data})
    typeof cb === 'function' && cb()
  }
},

  async getNavData({commit},cb){
    const result = await reqNavData()
    if(result.code === 0){
      const data = result.data
      commit(RECEIVE_NAV_DATA,{data})
      typeof cb === 'function' && cb()
    }
  },

  async getTopicData({commit},cb){
    const result = await reqTopicData()
    if(result.code === 0){
      const data = result.data
      commit(RECEIVE_TOPIC_DATA,{data})
      typeof cb === 'function' && cb()
    }
  },

  async getSwiperData({commit},cb){
    const result = await reqSwiperUrl()
    if(result.code === 0){
      const data = result.data
      commit(RECEIVE_SWIPER_DATA,{data})
      typeof cb === 'function' && cb()
    }
  },
  setNavIndex({commit}){
    commit(RECEIVE_NAV_INDEX)
  },

})
