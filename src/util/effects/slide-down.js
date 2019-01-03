/**
 * 竖直方向移动
 *
 */
import Vue from 'vue'
import snabbt from '../snabbt'
import dom from '../dom'

export default {
  beforeEnter(el) {
    el.style.opacity = 0
  },
  enter(el, done) {
    snabbt(el, {
      fromPosition: [0, -50, 0],
      fromOpacity: 0,
      position: [0, 0, 0],
      opacity: 1,
      duration: 800,
      easing: 'easeOut',
      complete() {
        el.style.opacity = 1
        done()
      }
    })
  },
  leave(el, done) {
    done()
  }
}
