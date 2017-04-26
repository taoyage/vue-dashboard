<template>
    <div>
        <div class="heading">
            <h2 class="title">{{ total }}条数据</h2>
            <form class="search el-icon-search" @submit.prevent="handleSearch">
                <input type="text" placeholder="搜索" v-model="search">
            </form>
        </div>
        <!-- 表格 -->
        <el-table :data="settlement" style="width: 100%">
            <el-table-column prop="transaction_id" label="交易编号" width="100">
            </el-table-column>
            <el-table-column prop="customer" label="姓名" width="100">
            </el-table-column>
            <el-table-column prop="start_date" label="交易起始日" width="120">
            </el-table-column>
            <el-table-column prop="maturity" label="交易到期日" width="120">
            </el-table-column>
            <el-table-column prop="settle_pay_date" label="结算支付日" width="120">
            </el-table-column>
            <el-table-column prop="client_init_principal" label="初始名义本金" width="120">
            </el-table-column>
            <el-table-column prop="bonds_balance" label="资产组合结算金额" width="150">
            </el-table-column>
            <el-table-column prop="assets_settle_principal" label="保证金余额" width="120">
            </el-table-column>
            <el-table-column prop="our_pay_money" label="我司应付金额" width="120">
            </el-table-column>
            <el-table-column prop="customer_pay_money" label="客户应付金额" width="120">
            </el-table-column>
            <el-table-column prop="customer_tran_loss" label="客户交易损益" width="120">
            </el-table-column>
            <el-table-column prop="settle_tran_amount" label="最终结算净额" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="结算信息" width="100">
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
        name: 'settlement',
        data() {
            return {
                total: 0,
                search: '',
                settlement: []
            };
        },
        created() {
            this.initdata();
        },
        methods: {
            initdata() {
                this.$services.Settlement.get('product')
                    .then(res => {
                        this.total = res.data.result.length;
                        this.settlement = res.data.result;
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
