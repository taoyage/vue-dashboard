<template>
    <div>
        <div class="heading">
            <h2 class="title">{{ total }}条数据</h2>
            <form class="search el-icon-search" @submit.prevent="handleSearch">
                <input type="text" placeholder="搜索" v-model="search">
            </form>
        </div>
        <!-- 表格 -->
        <el-table :data="margin" style="width: 100%">
            <el-table-column prop="transaction_id" label="交易编号">
            </el-table-column>
            <el-table-column prop="customer" label="姓名">
            </el-table-column>
            <el-table-column prop="bonds_amount" label="保证金金额">
            </el-table-column>
            <el-table-column label="操作（流水记录）" width="150">
                <template scope="scope">
                    <el-button type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 表格 end -->
    </div>
</template>
<script>
    export default {
        name: 'margin',
        data() {
            return {
                total: 0,
                search: '',
                margin: []
            };
        },
        created() {
            this.initdata();
        },
        methods: {
            initdata() {
                this.$services.Contract.get('bonds')
                    .then(res => {
                        this.total = res.data.result.bonds_flow.length;
                        this.margin = res.data.result.bonds_flow;
                    })
                    .catch(err => {
                        console.error(err);
                    });
            },
            handleSearch() {
                this.initdata();
            }
        }
    };
</script>
