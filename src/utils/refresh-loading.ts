import { nextTick } from 'vue'
import Tools from '@/utils/tools'
/**
 * 页面全局 Loading
 * @method start 创建 loading
 * @method done 移除 loading
 */
const refreshLoading = {
  // 创建 loading
  start: () => {
    const bodys: Element = document.body
    const div = document.createElement('div')
    div.setAttribute('class', 'loading-next')
    // 方案一
    const htmls = `
    <div class="loading-next-box">
      <div class="loading-next-box-warp">
        <div class="loading-next-box-item"></div>
        <div class="loading-next-box-item"></div>
        <div class="loading-next-box-item"></div>
        <div class="loading-next-box-item"></div>
        <div class="loading-next-box-item"></div>
        <div class="loading-next-box-item"></div>
        <div class="loading-next-box-item"></div>
        <div class="loading-next-box-item"></div>
        <div class="loading-next-box-item"></div>
      </div>
    </div>
    `
    div.innerHTML = htmls
    bodys.insertBefore(div, bodys.childNodes[0])
    window.refreshLoading = true
  },
  // 移除 loading
  done: () => {
    nextTick(async () => {
      await Tools.$sleep(200)
      window.refreshLoading = false
      const el = document.querySelector('.loading-next')
      el && el.parentNode?.removeChild(el)
    })
  },
}
export default refreshLoading
