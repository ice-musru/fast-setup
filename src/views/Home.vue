<script lang="tsx">
import { defineComponent } from 'vue'
import useScopeId from '@/hooks/useScopeId'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const withScoped = useScopeId()
    return withScoped(() => <div class='home-wrap'>这里是主页</div>)
  },
})
</script>

<style scoped lang="scss">
.home-wrap {
  font-size: 30px;
}
</style>
