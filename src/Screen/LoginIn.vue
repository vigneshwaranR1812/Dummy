<template>
    <div class="container-fluid img">
        <!-- alert msg -->
        <div class="row">
            <div v-if="error==true" class="row mt-4 ">
                <div class="col-1"></div>
                <div class="col-10">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Check Your Data</strong> You should check on those fields below ( {{message}} ) .
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
            <div class="col-md-8 d-none d-sm-none d-md-block mx-0 px-0">
              
            </div>
            <div class="col-md-4 ps-4 pe-4" style=" height:100vh">
                <div class="row d-flex align-items-center ms-2 me-2 mt-5" style="margin: auto auto">

                    <div class="card" style="margin: 30% auto">
                        <div class="card-body">
                            <h5 class="card-title mb-3" style="font-size:30px">Login</h5>
                            <!-- Form to get user name and password -->
                            <form v-on:submit.prevent="submitData" autocomplete="Off">
                                
                                <div class="mb-3">
                                    <label for="exampleInputUN" class="labels" style="text-align:left">Name</label>
                                    <input type="text" class="form-control" id="exampleInputUN"
                                        aria-describedby="emailHelp" v-model="username" required>

                                </div>
                               
                                <div class="mb-3">
                                    <label for="exampleInputPass" class="labels"
                                        style="text-align:left">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPass"
                                        aria-describedby="emailHelp" v-model="password" required>
                                </div>
                                <!-- button to login -->
                                <div class="d-flex align-items-center mb-3">
                                    <button type="submit" class="btn btn-danger me-3">Login</button>
                                    <a href="/signup" class="text-danger " style="text-decoration:none">Don't Have Account</a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    mounted() {
        console.log(`the component is now mounted.`)
        // if (Object.keys(store.state.userData).length > 0) {
        //     this.$router.push('/dashboard');
        //     console.log(store.state.userData)
        // }
    },
    data() {
        return {
            
            username: "",
           
            password: "",
            error: false,
            message: "",
        }
    },
    methods: {
        async submitData() {
          
            var username = /^[a-zA-Z][a-zA-Z0-9]*$/;
            var password = /^[a-zA-Z0-9]+$/;
            var flag = true;
            
            if (username.test(this.username) == false) {
                console.log("uname");
                flag = false;
                this.message+="usesName";
            }
            if (password.test(this.password) == false) {
                console.log("flag");
                flag = false;
                this.message += "password";
            }
            if (flag == true) {
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-date',
                        // Authorization: `Bearer ${userInfo.token}`,
                    },
                }
                const formData = new FormData();
                
                formData.append("userName", this.username);
                formData.append("password", this.password);
                var { data } = await axios.post("login", formData, config);
                // store.dispatch('loginUser', data.userDetails);
                // store.dispatch('getAllList',data.userDetails.token)
                localStorage.setItem('userDetails', JSON.stringify(data.userDetails))
                if (Object.keys(data.userDetails).length>0) {
                    this.$router.push('/dashboard')
                }
                
                
            }
            else {
                this.error = true;
                console.log("Error alert")
            }

        }
    }
}
</script>
<style scoped>
.img {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("../assets/images/Login.jpg");
    width: 100%;
    height: 100vh;
    overflow: hidden;
    max-height: 100vh;
    background-position: center;
    background-size: cover;
}
</style>