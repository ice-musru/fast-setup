<script lang="tsx">
import { defineComponent } from 'vue'
import useScopeId from '@/hooks/useScopeId'
import { Location } from '@element-plus/icons'

export default defineComponent({
  name: 'MenuPage',
  setup() {
    const withScoped = useScopeId()
    return withScoped(() => (
      <el-menu default-openeds={['1', '3']} router={true} class='h-full'>
        <el-sub-menu index='/'>
          {{
            title: () => (
              <span>
                <el-icon>
                  <Location></Location>
                </el-icon>
                Navigator One
              </span>
            ),
            default: () => (
              <>
                <el-menu-item-group title='1234'>
                  <el-menu-item index='/'>Option 1</el-menu-item>
                  <el-menu-item index='/about'>Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title='Group 2'>
                  <el-menu-item index='/home'>Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index='/404'>
                  {{
                    title: () => 'oppp4',
                    default: () => <el-menu-item index='1-4-1'>Option 4-1</el-menu-item>,
                  }}
                </el-sub-menu>
              </>
            ),
          }}
        </el-sub-menu>
      </el-menu>
    ))
  },
})
</script>
