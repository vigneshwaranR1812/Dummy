<template>
    <div class="container-fluid img">
        <!-- alert msg will be displaed -->
        <div class="row ">
            <div v-if="error==true" class="row mt-4 ">
                <div class="col-1"></div>
                <div class="col-10">
                    <div  class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Check Your Data</strong> You should check on those fields below ( {{message}} ).
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>

           
            <div class="col-md-4 ps-4 pe-4" style=" height:100vh">
                <div class="row d-flex align-items-center ms-2 me-2 mt-5" style="margin: auto auto">
                    
                    <div class="card" style="margin:  auto">
                      <div class="card-body">
                        <h5 class="card-title mb-3" style="font-size:30px">Sign Up</h5>
                        <!-- form to sign up new user -->
                        <form  v-on:submit.prevent="submitData" autocomplete="off">
                            <div class="mb-3">
                                <label for="exampleInputFN" class="labels" style="text-align:left">Name</label>
                                <input type="text" class="form-control" id="exampleInputFN" aria-describedby="emailHelp" v-model="Name" required>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputLN" class="labels" style="text-align:left">Password</label>
                                <input type="password" class="form-control" id="exampleInputLN" aria-describedby="emailHelp" v-model="password" required>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmaIL" class="labels" style="text-align:left">Phone Number</label>
                                <input type="text" class="form-control" id="exampleInputEmaIL" aria-describedby="emailHelp" v-model="phoneNumber"
                                    required>
                            </div>
                            <!-- <div class="mb-3">
                                <label for="exampleInputUN" class="labels" style="text-align:left">Username</label>
                                <input type="text" class="form-control" id="exampleInputUN" aria-describedby="emailHelp" v-model="username" required>
                            
                            </div>
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-6">
                                        <label for="exampleInputPass" class="labels" style="text-align:left">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPass" aria-describedby="emailHelp" v-model="password"
                                            required>
                                    </div>
                                    <div class="col-6">
                                        <label for="exampleInputCPass" class="labels" style="text-align:left">Verify Password</label>
                                        <input type="password" class="form-control" id="exampleInputCPass" aria-describedby="emailHelp" v-model="cpassword"
                                            required>
                                    </div>
                                </div>
                                </div>
                            
                            <div class="mb-3">
                                <label for="exampleInputPhone" class="labels" style="text-align:left">Phone Number</label>
                                <input type="text" class="form-control" id="exampleInputPhone" aria-describedby="emailHelp" v-model="phoneNumber" required>
                            </div> -->
                            <!-- action to add new user and navigate to the login page -->
                        <div class="d-flex align-items-center mb-3">
                            <button type="submit" class="btn btn-danger me-3">Sign Up</button>
                            <a href="/login" class="text-danger " style="text-decoration:none">Have an Account</a>
                        </div>
                        </form>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div class="col-md-8 d-none d-sm-none d-md-block mx-0 px-0">
                <!-- <img class="img" src="../assets/images/signup.jpg"   alt=""> -->
            </div>
        </div>
    </div>
</template>
<script>

import axios from "axios";

export default {
    mounted() {
        console.log(`the component is now mounted.`)
        // if (Object.keys(store.state.userData).length>0) {
        //     this.$router.push('/dashboard');
        //     console.log(store.state.userData)
        // }
    },
    data() {
        return {
            Name:"",
            password:"",
            phoneNumber:"",
            error:false,
            message:"",
        }
    },
    methods:{
        // function to add new user
        async submitData(){
           
                var phoneValidation = /^[7-9][0-9]{9}$/;
                var name = /^[a-zA-Z]+$/;
                // var username = /^[a-zA-Z][a-zA-Z0-9]*$/;
                var password = /^[a-zA-Z0-9]+$/;
                var flag = true;
                if (name.test(this.Name) === false) {
                    flag = false;
                    this.message+='Name is Not proper';
                }
                if (phoneValidation.test(this.phoneNumber) == false) {
                    console.log("phone");
                    flag = false;
                    this.message += 'Phone Number is not proper';
                }
               
                if (password.test(this.password) == false) {
                    console.log("flag");
                    flag = false;
                    this.message += 'Password is not Proper';
                }
                
                if (flag == true) {
                    const config = {
                        headers: {
                            'Content-Type': 'multipart/form-date',
                            // Authorization: `Bearer ${userInfo.token}`,
                        },
                    }
                    const formData = new FormData();
                    formData.append("uname", this.Name);
                    formData.append("pwd", this.password);
                    formData.append("phno", this.phoneNumber);
                    const { data } = await axios.post("signup", formData, config);
                    // store.dispatch('loginUser', data.userDetails);
                    // store.dispatch('getAllList', data.userDetails.token)
                    localStorage.setItem('userDetails', JSON.stringify(data.userDetails))
                    if (data.userDetails!=={}){
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
.img{
        background:  linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0, 0, 0, 0.4)),url("../assets/images/SignUp.jpg");
        width:100%;
        height: 100vh;
        overflow: hidden;
        max-height: 100vh;
        background-position: center;
        background-size: cover;
    }
</style>