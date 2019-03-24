<template>
  <div class="user">
    <el-row>
      <el-button class="el-button--primary" @click="addTestData">增加测试数据</el-button>
      <el-button class="el-button--primary" >添加</el-button>
    </el-row>
    <el-row>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row="true"
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
    </el-row>

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
import { addUserTestData } from '@/api/user'
import * as Message from 'element-ui'
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
    addTestData() {
      console.log('addTestData')
      addUserTestData().then(response => {
        console.log(response)
        Message.success('添加成功')
      }).catch(err => {
        console.log(err)
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

<style scoped >
  .el-row{
    margin: 10px 10px;
  }

</style>
