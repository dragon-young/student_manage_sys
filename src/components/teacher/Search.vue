<template>
    <div>
        <el-card>
            <el-row>
                <el-col :span="12">
                    <el-input
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        v-model="input2" style="width:400px">
                    </el-input>
                </el-col>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
</style>
