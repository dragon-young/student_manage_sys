<template>
    <div>
        <el-tabs type="border-card">
            <!-- 基本信息 -->
            <el-tab-pane label="基础信息">
                <el-card>
                    <el-form label-width="70px">
                        <el-form-item label="姓名">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="工号">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="民族">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="政治面貌">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="身份证号">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="教师等级">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="家庭地址">
                            <el-input></el-input>
                        </el-form-item>
                        <el-button type="primary" icon="el-icon-edit">编辑</el-button>
                        <el-button type="warning" icon="el-icon-warning">保存</el-button>
                    </el-form>
                </el-card>
            </el-tab-pane>
            <!-- 联系方式 -->
            <el-tab-pane label="联系方式">
                <el-form>
                    <el-form-item label="手机号码">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="电子邮箱">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="QQ号码">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="家庭地址">
                        <el-input></el-input>
                    </el-form-item>
                    <el-button type="primary" icon="el-icon-edit">编辑</el-button>
                    <el-button type="warning" icon="el-icon-warning">保存</el-button>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
</style>
