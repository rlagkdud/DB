import {useState} from 'react'
import Header from './Header'
import Login_css from '../component/Login_css'
import Link from 'next/link'
const Login=()=>{
    return(
        <div>
            <Login_css/>
            <Header/> 
            <div class="body_login">           
                <div class="login-card">
                    <h1>로그인</h1>
                    <form action="" method="post">
                    <p class="username"><input type="text" name="user_id" placeholder="아이디" required/></p>
                    <p class="pwd"><input type="password" name="user_pwd" placeholder="비밀번호" required/></p>
                    <input class="login" type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login