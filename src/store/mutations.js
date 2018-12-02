import {
  RECEIVE_MSITE_DATA,
  RECEIVE_NAV_DATA,
  RECEIVE_TOPIC_DATA,
  RECEIVE_SWIPER_DATA
}from './mutation-types'

export default ({
[RECEIVE_MSITE_DATA](state,{data}){
  state.dataHome = data
},
  [RECEIVE_NAV_DATA](state,{data}){
    state.dataNav = data
  },
  [ RECEIVE_TOPIC_DATA](state,{data}){
    state.dataTopic = data
  },
  [RECEIVE_SWIPER_DATA](state,{data}){
    state.SwiperData = data
  },
})
