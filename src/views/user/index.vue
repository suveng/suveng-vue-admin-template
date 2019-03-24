<template>
  <div class="user">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      @sort-change="sortChange">
      <el-table-column sortable="custom" prop="id" align="center" label="ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="Username">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="Password" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.password }}</span>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :total="total"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      class=" el-pagination__rightwrapper"
      background
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>

</template>

<script>
import { getUserList } from '@/api/user'

export default {
  name: 'User',
  data() {
    return {
      currentPage: 1, // 初始页
      pageSize: 10, // 每页的数据
      total: 0,
      list: null,
      data: null,
      listQuery: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getUserList(this.listQuery, this.currentPage - 1, this.pageSize).then(response => {
        // 设置数据 jpa
        this.data = response.data
        this.list = response.data.content
        this.total = response.data.totalElements
        // debug
        console.log(this.data)
        // loading动画设置为false
        this.listLoading = false
      })
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      // 每页下拉显示数据
      this.pageSize = size
      console.log(size)
      this.fetchData()
    },
    handleCurrentChange: function(currentPage) {
      // 点击第几页
      this.currentPage = currentPage
      console.log(currentPage)
      this.fetchData()
    },
    sortChange: function(column, prop, order) {
      console.log(column + '-' + column.prop + '-' + column.order)
    }
  }
}
</script>

<style scoped>

</style>
