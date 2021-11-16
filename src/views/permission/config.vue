<script lang="tsx">
import { defineComponent, ref } from 'vue'
import useScopeId from '@/hooks/useScopeId'

export default defineComponent({
  name: 'PermissionConfig',
  setup() {
    // 弹窗控制开关
    let configDialogShow = ref(false)
    let configDialogTitle = ref('配置')
    let configTableData = ref([{ name: '冰心', role: 'admin' }])

    const handleConfig = (scope: Record<string, any>, type: string) => {
      console.log(scope.row, type)
      configDialogTitle.value = type
      configDialogShow.value = true
    }

    // 配置头部
    const ConfigHeader = () => (
      <div class='config-head flex justify-between p-2 mb-5'>
        <h2>权限配置</h2>
        <el-button type='primary' onClick={() => handleConfig({}, '添加')}>
          添加
        </el-button>
      </div>
    )
    // 表格模块
    const ConfigTable = () => (
      <el-table data={configTableData.value} border={true} stripe={true}>
        <el-table-column label='名称' prop='name' align='center'></el-table-column>
        <el-table-column label='角色' prop='role' align='center'></el-table-column>
        <el-table-column label='配置' align='center'>
          {{
            default: (scope: any) => (
              <>
                <el-button type='success' onClick={() => handleConfig(scope, '配置')}>
                  配置
                </el-button>
              </>
            ),
          }}
        </el-table-column>
      </el-table>
    )
    // 弹窗模块
    const ConfigDialog = () => <el-dialog v-model={configDialogShow.value} title={configDialogTitle.value + '权限'}></el-dialog>
    // 添加scoped函数
    const withScoped = useScopeId()
    return withScoped(() => (
      <div class='permission-config'>
        {/*配置按钮 */}
        <ConfigHeader></ConfigHeader>
        {/*配置表格 */}
        <ConfigTable></ConfigTable>
        {/*配置弹窗 */}
        <ConfigDialog></ConfigDialog>
      </div>
    ))
  },
})
</script>

<style scoped lang="scss"></style>
