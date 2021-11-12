<script lang="tsx">
import { defineComponent } from 'vue'
import useScopeId from '@/hooks/useScopeId'
export default defineComponent({
  name: 'NoAccess',
  setup() {
    const withScoped = useScopeId()

    // 渲染的dom
    const renderDom = () => (
      <div class='no-access w-full h-full flex flex-col justify-center items-center fixed z-1'>
        <img class='w-400px' src='./src/assets/image/access-error.png' />
        <p>抱歉，您没有此平台的访问权限</p>
      </div>
    )
    return withScoped(renderDom)
  },
})
</script>
<style scoped lang="scss"></style>
