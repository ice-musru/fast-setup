<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '404Page',
  render() {
    return <div class='page-404'>404了</div>
  },
})
</script>

<style lang="scss" scoped>
.page-404 {
  color: red;
}
</style>
