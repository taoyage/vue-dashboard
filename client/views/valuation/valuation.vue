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
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button type="text" size="small" @click="getProducts(scope.row.transaction_id)">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 表格 end -->
        <!--   <el-pagination :total="total" :page-size="size" :current-page="page" :page-sizes="[1, 30, 50]" layout="total, sizes, prev, pager, next" @size-change="handlePageSizeChange" @current-change="handleCurrentPageChange"></el-pagination> -->
        <!-- 弹出框 -->
        <el-dialog title="互换产品详情" v-model="dialogTableVisible">
            <template>
                <el-tabs v-model="activeName">
                    <el-tab-pane label="合约基础信息" name="first">
                        <el-table :data="products" style="width: 100%">
                            <el-table-column prop="transaction_id" label="交易编号">
                            </el-table-column>
                            <el-table-column prop="customer" label="姓名">
                            </el-table-column>
                            <el-table-column prop="start_date" label="交易起始日期">
                            </el-table-column>
                            <el-table-column prop="project_maturity" label="交易">
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="合约估值信息" name="second">
                        <el-table :data="products" style="width: 100%">
                            <el-table-column prop="portfolio_asset" label="资产组合估值">
                            </el-table-column>
                            <el-table-column prop="picket_line" label="警戒线">
                            </el-table-column>
                            <el-table-column prop="open_line" label="平仓线">
                            </el-table-column>
                            <el-table-column prop="market_target" label="盯市指标">
                            </el-table-column>
                            <el-table-column prop="initial_bonds" label="初始保证金">
                            </el-table-column>
                            <el-table-column prop="bonds_balance" label="保证金金额">
                            </el-table-column>
                            <el-table-column prop="performance_guarantee" label="履约保障率">
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="合约收益信息" name="third">
                        <el-table :data="products" style="width: 100%">
                            <el-table-column prop="our_income_paid" label="我司已付收益">
                            </el-table-column>
                            <el-table-column prop="customer_income_paid" label="客户已付利息">
                            </el-table-column>
                            <el-table-column prop="accrued_interest" label="本期应计利息">
                            </el-table-column>
                            <el-table-column prop="portfolio_asset" label="客户交易损益">
                            </el-table-column>
                            <el-table-column prop="investment" label="客户投资收益率（年华）">
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="各基础资产估值信息" name="fourth">
                        <el-table :data="assets_list" style="width: 100%">
                            <el-table-column prop="index" label="序号">
                            </el-table-column>
                            <el-table-column prop="hook_label" label="证券代码">
                            </el-table-column>
                            <el-table-column prop="hook_name" label="证券名称">
                            </el-table-column>
                            <el-table-column prop="notional_amount" label="名义数量">
                            </el-table-column>
                            <el-table-column prop="average_settle" label="平均持仓成本">
                            </el-table-column>
                            <el-table-column prop="now_tran_price" label="当前净价（元）">
                            </el-table-column>
                            <el-table-column prop="now_settle_price" label="当前全价（元）">
                            </el-table-column>
                            <el-table-column prop="asset_proportion" label="组合占比">
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </template>
        </el-dialog>
        <!-- 弹出框end -->
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
                products: [],
                assets_list: [],
                filters: filters,
                total: 0,
                size: 20,
                page: 1,
                search: '',
                dialogTableVisible: false,
                activeName: 'first'
            };
        },
        created() {
            this.initdata();
        },
        methods: {
            initdata() {
                this.$services.Valuation.get()
                    .then(res => {
                        this.valuation = res.data.result;
                        this.total = res.data.result.length;
                    })
                    .catch(err => {
                        console.error(err);
                    });
            },
            getProducts(id) {
                this.$services.Valuation.get(`product?transaction_id=${id}`)
                    .then(res => {
                        this.dialogTableVisible = true;
                        this.activeName = 'first';
                        this.assets_list = res.data.result.assets_list;
                        if (Object.prototype.toString(res.data.result) === '[object Object]') {
                            this.products = [];
                            this.products.push(res.data.result);
                        } else {
                            this.products = res.data.result;
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            },
            handleSearch() {
                this.initdata();
            },
            filterTag(value, row) {
                if (row.status_indication) {
                    return row.status_indication === value;
                }
            }
        }
    };
</script>
