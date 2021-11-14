<script lang="tsx">
import { defineComponent, ref } from 'vue'
import useScopeId from '@/hooks/useScopeId'
import accessLog from '@/assets/image/access-error.png'
export default defineComponent({
  name: 'HomePage',
  setup() {
    const counter = ref(0)
    const loading = ref(true)
    const withScoped = useScopeId()
    return withScoped(() => (
      <div class='home-wrap'>
        <div v-loading={loading.value} class='w-200px h-200px bg-red-200'>
          {counter.value}
        </div>
        <img src={accessLog} class='w-400px' />
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
