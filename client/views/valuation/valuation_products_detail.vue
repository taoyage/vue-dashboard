<template>
    <div>
        <div class="heading">
            <h2 class="title">{{ total }}条数据</h2>
            <form class="search el-icon-search" @submit.prevent="handleSearch">
                <input type="text" placeholder="搜索" v-model="search">
            </form>
        </div>
        <!-- 表格 -->
        <el-table :data="valuation" style="width: 100%">
            <el-table-column prop="index" sortable label="序号">
            </el-table-column>
            <el-table-column prop="transaction_id" label="交易编号">
            </el-table-column>
            <el-table-column prop="customer" label="姓名">
            </el-table-column>
            <el-table-column prop="client_init_principal" label="名义本金">
            </el-table-column>
            <el-table-column prop="portfolio_asset" label="资产组合估值">
            </el-table-column>
            <el-table-column prop="market_target" label="盯市指标">
            </el-table-column>
            <el-table-column prop="picket_line" label="警戒线">
            </el-table-column>
            <el-table-column prop="open_line" label="平仓线">
            </el-table-column>
            <el-table-column prop="performance_guarantee" label="履约保障率">
            </el-table-column>
            <el-table-column prop="project_maturity" sortable label="交易到期日">
            </el-table-column>
            <el-table-column prop="status_indication" label="状态指示" :filters="filters.status" :filter-method="filterTag">
            </el-table-column>
        </el-table>
        <!-- 表格 end -->
        <el-pagination :total="total" :page-size="size" :current-page="page" :page-sizes="[1, 30, 50]" layout="total, sizes, prev, pager, next" @size-change="handlePageSizeChange" @current-change="handleCurrentPageChange"></el-pagination>
    </div>
</template>
<script>
    export default {
        name: 'valuation',

        data() {
            const filters = {
                status: [{
                    text: 'orange',
                    value: 'orange'
                }, {
                    text: 'red',
                    value: 'red'
                }, {
                    text: 'none',
                    value: 'none'
                }]
            };
            return {
                valuation: [],
                filters: filters,
                total: 0,
                size: 20,
                page: 1,
                search: ''
            };
        },
        created() {
            this.initdata();
        },
        methods: {
            initdata() {
                this.$services.Valuation.get('market')
                    .then(res => {
                        this.valuation = res.data.result;
                        this.total = res.data.result.length;
                    })
                    .catch(err => {
                        console.error(err);
                    });
            },
            handleSearch() {
                this.initdata();
            },
            filterTag(value, row) {
                return row.status_indication === value;
            }
        }
    };
</script>
