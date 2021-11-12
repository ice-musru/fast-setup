<script lang="tsx">
import { defineComponent } from 'vue'
import useScopeId from '@/hooks/useScopeId'

export default defineComponent({
  name: 'HelloWorldVue',
  setup() {
    const withScoped = useScopeId()
    return withScoped(() => <div>这里是hello 页面</div>)
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  border-radius: 4px;
  padding: 2px 4px;
  color: #304455;
  background-color: #eee;
}
</style>
