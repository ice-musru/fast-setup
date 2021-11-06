<script lang="tsx">
import { defineComponent } from 'vue'
import useScopeId from '@/hooks/useScopeId'
import HelloWorldVue from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'HomePage',
  components: { HelloWorldVue },
  setup() {
    const withScoped = useScopeId()
    return withScoped(() => (
      <div class='home-wrap  flex  items-center justify-center red-600 w-140px bg-red-500 text-green-600 mt-20px text-14px shadow-xl shadow-yellow-900 h-140px'>
        <hello-world-vue></hello-world-vue>
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
