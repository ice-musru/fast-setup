import { defineComponent, VNode, Transition, KeepAlive } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'
export default defineComponent({
  setup() {
    // 默认渲染
    const renderDefault = ({ Component }: { Component: VNode; route?: RouteLocationNormalizedLoaded }) => (
      <Transition name='slide-right' mode='out-in'>
        <KeepAlive include={[]}>{Component}</KeepAlive>
      </Transition>
    )

    return () => <router-view v-slots={{ default: renderDefault }} />
    // return () => <router-view>{{ default: renderDefault }}</router-view>
  },
})
