<template>
    <div>
        <div class="heading">
            <h2 class="title">{{ total }}条数据</h2>
            <form class="search el-icon-search" @submit.prevent="handleSearch">
                <input type="text" placeholder="搜索" v-model="search">
            </form>
        </div>
        <!-- 表格 -->
        <el-table :data="position" style="width: 100%">
            <el-table-column fixed prop="hook_label" label="标的代码">
            </el-table-column>
            <el-table-column prop="hook_name" label="标的名称" width="100">
            </el-table-column>
            <el-table-column prop="coupon_rate" label="票面利率" width="100">
            </el-table-column>
            <el-table-column prop="issue_size" label="发行规模" width="100">
            </el-table-column>
            <el-table-column prop="issue_date" label="发行日" width="120">
            </el-table-column>
            <el-table-column prop="maturity" label="到期日" width="120">
            </el-table-column>
            <el-table-column prop="rate_frequency" label="利息支付频率" width="120">
            </el-table-column>
            <el-table-column prop="principal_frequency" label="本金归还频率" width="120">
            </el-table-column>
            <el-table-column prop="balance" label="余额信息" width="100">
            </el-table-column>
            <el-table-column prop="average_position_tran" label="平均持仓（净价）" width="150">
            </el-table-column>
            <el-table-column prop="average_position_settle" label="平均持仓（全价）" width="150">
            </el-table-column>
            <el-table-column prop="last_valuation_date" label="上一估值日" width="120">
            </el-table-column>
            <el-table-column prop="last_tran_price" label="估值结果（净价）" width="150">
            </el-table-column>
            <el-table-column prop="last_settle_price" label="估值结果（全价）" width="150">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 表格 end -->
    </div>
</template>
<script>
    export default {
        name: 'position',
        data() {
            return {
                total: 0,
                search: '',
                position: []
            };
        },
        created() {
            this.initdata();
        },
        methods: {
            initdata() {
                this.$services.Position.get('asset')
                    .then(res => {
                        this.total = res.data.result.length;
                        this.position = res.data.result;
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
