import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Header from "./Header";
import Login_css from "../component/Login_css";
import Link from "next/link";
import Head from "next/head";
import Axios from "axios";

const Login = () => {
    const [usrID, getID] = useState('');
    const [usrPW, getPW] = useState('');
    const router = useRouter();

    function gotoReg () {
        router.push('/Join');
    }

    function getid(e) {  getID(e.target.value); }
    function getpw(e) {  getPW(e.target.value); }

    function login() {
            
        Axios({
            method: 'POST',
            url: '/Login',
            data:{
                userID : usrID,
                userPW: usrPW
            }
        }).then( (res) => {
            console.log(res.data.bool);
            const check = res.data.bool;
            
            if(check){
                if(res.data.userID === 'admin'){
                    alert('관리자 기능이 활성화 되었습니다')
                }
                else{
                    alert('환영합니다! '+ res.data.userName +'님!');
                }
                localStorage.setItem('usrID', res.data.userID);
                localStorage.setItem('name', res.data.userName);
                localStorage.setItem('vip', res.data.vip);
                localStorage.setItem('member', 'yes');
                console.log(localStorage.getItem('name'));
                router.push({pathname: '/Mypage' });
            }
            else{
                alert('잘못된 로그인 접근입니다.');
            }
        });
    }

    return (
        <div>
            <Head>
                <title>TIC-로그인</title>
            </Head>
            <Login_css />
            <Header />
            <div class="body_login">
                <div class="back">
                    <div class="whiteback">
                        <div class="login-card">
                            <h1>로그인</h1>
                            <form>
                                <p class="username">
                                    <input
                                        type="text"
                                        name="user_id"
                                        placeholder="아이디"
                                        onChange={getid}
                                        required
                                    />
                                </p>
                                <p class="pwd">
                                    <input
                                        type="password"
                                        name="user_pwd"
                                        placeholder="비밀번호"
                                        onChange={getpw}
                                        required
                                    />
                                </p>
                                <button class="login" type="button" onClick = {login}>{" "}Log in{" "}</button>
                                <button class="sign_in" type="button" onClick={gotoReg}>{" "}Sign In{" "}</button>
                                </form>
                            <img src="/login_or.png" width="100%" alt="" />
                            <Link href="/Non_member">
                                <button class="non_member" type="button">
                                    {" "}
                                    비회원 예매하기{" "}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
