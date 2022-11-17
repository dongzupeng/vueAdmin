<template>
    <div class="login">
        <el-card class="box-card">
            <div class="title">头文字D系统</div>
            <el-form
                ref="form"
                label-width="80px"
                label-position="top"
                :model="form"
               
            >
                <el-form-item prop="username">
                    <el-input
                        v-model="form.username"
                        placeholder="用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        v-model="form.password"
                        placeholder="密码"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="login-button" @click="handerLogin('form')">
                        登 录
                    </div>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { nameRule, passRule } from "@/utils/validate";
import { setCache } from "@/utils/setCache";
import { login,getUserInfo } from "@/constants/login"
export default {
    data() {
        return {
            form: {
                username: "admin",
                password: "123456",
            },
            rules: {
                username: [
                    {
                        validator: nameRule,
                        trigger: "blur",
                    },
                ],
                password: [
                    {
                        validator: passRule,
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    methods: {
        /**
         * 登录
         */
        handerLogin(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    login({...this.form}).then(res => {
                        console.log(res);
                        if(res.code == "000"){
                            getUserInfo().then( user => {
                                this.$store.commit('user/SET_TOKEN', res.data.token)
                                setCache('token',res.data.token)
                                this.$store.commit('user/SET_USERINFO', user.data)
                                setCache('userInfo',user.data)
                                this.$router.push("/home/user")
                            }) 
                            this.$message({message:res.msg,type:'success'})
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                } else {
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #21d4fd;
    background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);

    .box-card {
        width: 500px;
        padding: 40px 20px;
        margin: 100px auto;
        // border-radius: 40px;
        .title {
            margin: 20px auto;
            font-size: 20px;
            color: #8759fe;
            text-align: center;
        }
        .login-button {
            width: 100%;
            height: 40px;
            background-color: #8759fe;
            border-radius: 20px;
            font-size: 18px;
            color: #fff;
            text-align: center;
            cursor: pointer;
        }
    }
}

/deep/ .el-input__inner {
    /*或者 >>>.el-input__inner  */
    background: #fff; /*调整inner的背景色，透明*/
    border-radius: 20px; /*输入框圆角值*/
}

/deep/ input::-webkit-input-placeholder {
    color: #8888;
}
/deep/ input::-moz-input-placeholder {
    color: #8888;
}
/deep/ input::-ms-input-placeholder {
    color: #8888;
}

.box-card {
    border-radius: 40px;
    transform: rotate(0deg);
}
.box-card:hover {
    border-radius: 30% 30% 30% 30%;
    transform: rotate(0deg);
}
</style>