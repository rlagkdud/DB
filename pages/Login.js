import {useState} from 'react'
import Header from './Header'
import Login_css from '../component/Login_css'
import Link from 'next/link'
import Head from 'next/head'
const Login=()=>{
    return(
        <div>
            <Head>
                <title>TIC-로그인</title>
            </Head>
            <Login_css/>
            <Header/>
            <div class="body_login">
                <div class="back"> 
                    <div class="whiteback">
                        <div class="login-card">
                            <h1>로그인</h1>
                            <form action="" method="post">
                                <p class="username"><input type="text" name="user_id" placeholder="아이디" required/></p>
                                <p class="pwd"><input type="password" name="user_pwd" placeholder="비밀번호" required/></p>
                                <input class="login" type="submit" value="Login"/>
                                <button class="sign_in" type="button" onclick="window.location.href'' "> Sign In </button>
                            </form>
                            <img src="login_or.png" width="100%" alt=""/>
                            <Link href="/Non_member"><button class="non_member" type="button" > 비회원 예매하기 </button></Link>
                        </div>
                    </div>   
                </div>         
            </div>
        </div>
    )
}
export default Login