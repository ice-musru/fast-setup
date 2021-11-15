<script lang="tsx">
import { defineComponent, ref } from 'vue'
import useScopeId from '@/hooks/useScopeId'
export default defineComponent({
  name: 'HomePage',
  setup() {
    const counter = ref(0)
    const loading = ref(false)
    const withScoped = useScopeId()
    return withScoped(() => (
      <div class='home-wrap'>
        <el-button type='primary'>测试</el-button>
        <div v-loading={loading.value} class='w-200px h-200px bg-red-200'>
          {counter.value}
        </div>
        <div>
          <el-input type='text' v-model={counter.value} />
        </div>
      </div>
    ))
  },
})
</script>

<style scoped lang="scss">
.home-wrap {
  font-size: 30px;
}
</style>
