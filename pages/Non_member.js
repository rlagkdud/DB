import Header from './Header'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Non_member_css from '../component/Non_member_css'
import Head from 'next/head'
import Axios from "axios";
const Non_member=()=>{
    const [usrName, getName] = useState('');
    const [usrPN, getPN] = useState('');
    const [usrBD, getBD] = useState('');
    const router = useRouter();

    function getname(e) {  getName(e.target.value); }
    function getpn(e) {  getPN(e.target.value); }
    function getbd(e) {  getBD(e.target.value); }

    function n_Login() {
        Axios({
            method: 'POST',
            url: '/n_login',
            data:{
                userName: usrName,
                userPN: usrPN,
                userBD: usrBD 
            }
        }).then( (res) => {
            var check = res.data.bool;
            if (check) {
                localStorage.setItem('usrID', res.data.userName);
                localStorage.setItem('pn', res.data.userPN)
                localStorage.setItem('member', 'no');
                alert('비회원으로 로그인 되었습니다.');
                router.push({pathname: '/' });
            }
            else{
                alert('잘못된 로그인 접근입니다.');
            }
        });
    }

    return(
        <div>
            <Head>
                <title>
                    TIC-비회원예매
                </title>
            </Head>
            <Header/>
            <Non_member_css/>
            <div class="non-back">
                <div class="non-whiteback">
                    <div class="non_signin-card">
                        <h1>비회원 로그인</h1>
                        <form>
                            <p class="name">
                                <input 
                                    type="text" 
                                    name="user_name" 
                                    placeholder="이름" 
                                    onChange={getname}
                                    required
                                />
                            </p>
                            <p class="non-ph">
                                <input 
                                    type="text" 
                                    name="user_ph" 
                                    placeholder="연락처" 
                                    onChange={getpn}
                                    required/>
                            </p>
                            <p class="non-birth">
                                <input 
                                    type="text" 
                                    name="user_birth" 
                                    placeholder="생년월일(YYYYMMDD)" 
                                    onChange={getbd}
                                    required/>
                            </p>
                            <img src="bar.png" width="100%" alt=""/>
                            <button class="non-sign_in" type="button" onClick={n_Login}>{" "}Sign In{" "}</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Non_member