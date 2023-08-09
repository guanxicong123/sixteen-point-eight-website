<!-- 
  @Author: gxc
  @CreateDate: 2023-08-09
  @FilePath: src\views\UserManagement\Account\index.vue
  @Describe: 账号管理
-->
<template>
    <div class="com-index">
        <div class="table-header"></div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="account" label="账号" />
            <el-table-column prop="role" label="权限" :formatter="formatterRole" />
        </el-table>
    </div> 
</template>

<script lang="ts" setup>
import { roleType, roleMapCn } from '../components/roleConfig.ts'
const tableData = ref([
    {
        account: 'admin',
        role: [1],
    }
])
const formatterRole = (row: { role: numebr[] }) => {
    let roleString = ''
    row.role.map(item => {
        roleString += roleMapCn[item]
    })
    return roleString
}
// mounted 实例挂载完成后被调用
onMounted(() => {

})

</script>

<style lang="less" scoped>
.table-header{
 magin-botton:10px;
}
</style>