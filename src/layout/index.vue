<script lang="tsx">
import { defineComponent, VNode, Transition, KeepAlive } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'

import MenuPage from './components/menu/menu.vue'
export default defineComponent({
  name: 'LayoutPage',
  components: { MenuPage },
  setup() {
    // 默认渲染
    const renderDefault = ({ Component }: { Component: VNode; route?: RouteLocationNormalizedLoaded }) => (
      <el-container class='w-full h-full'>
        {/* 侧栏 */}
        <el-aside width='200px'>
          <menu-page></menu-page>
        </el-aside>
        {/* 主体 */}
        <el-main>
          <Transition name='slide-right' mode='out-in'>
            <KeepAlive include={[]}>{Component}</KeepAlive>
          </Transition>
        </el-main>
      </el-container>
    )

    // return () => <router-view v-slots={{ default: renderDefault }} />
    return () => <router-view>{{ default: renderDefault }}</router-view>
  },
})
</script>
