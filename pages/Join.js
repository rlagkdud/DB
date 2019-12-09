import Join_css from '../component/Join_css'
import { useState } from "react";
import Header from './Header'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Axios from "axios";

const Join=()=>{
    const [usrName, getName] = useState('');
    const [usrID, getID] = useState('');
    const [usrPW, getPW] = useState('');
    const [usrPN, getPN] = useState('');
    const [usrBD, getBD] = useState('');
    const router = useRouter();

    function getname(e) {  getName(e.target.value); }
    function getid(e) {  getID(e.target.value); }
    function getpw(e) {  getPW(e.target.value); }
    function getpn(e) {  getPN(e.target.value); }
    function getbd(e) {  getBD(e.target.value); }


    function Join() {
        Axios({
            method: 'POST',
            url: '/join_process',
            data:{
                userName: usrName,
                userID : usrID,
                userPW: usrPW,
                userPN: usrPN,
                userBD: usrBD 
            }
        }).then( (res) => {
            if(true){
                alert('회원가입이 완료되었습니다.');
                router.push({pathname: '/Login' });
            }
            else{
                alert('잘못된 로그인 접근입니다.');
            }
        });
    }

    return(
        <div>
        <Head>
            <title>TIC-회원가입</title>
        </Head>            
            <Header/>
            <Join_css/>
            <div>
                <div class="signin-back">
                    <div class="signin-whiteback">
                        <div class="signin-card">
                            <h1>회원가입</h1>
                            <form>
                                <p class="signin-name">
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="이름"
                                        onChange={getname}
                                        required
                                    />
                                </p>
                                <p class="signin-username">
                                    <input
                                        type="text"
                                        name="user_id"
                                        placeholder="아이디"
                                        onChange={getid}
                                        required
                                    />
                                </p>
                                <p class="signin-pwd">
                                    <input
                                        type="password"
                                        name="user_pwd"
                                        placeholder="비밀번호"
                                        onChange={getpw}
                                        required
                                    />
                                </p>
                                <p class="ph">
                                    <input
                                        type="text"
                                        name="user_pn"
                                        placeholder="전화번호"
                                        onChange={getpn}
                                        required
                                    />
                                </p>
                                <p class="birth">
                                    <input
                                        type="text"
                                        name="user_bd"
                                        placeholder="생년월일 (YYYYMMDD)"
                                        onChange={getbd}
                                        required
                                    />
                                </p>
                                <img src="bar.png" width="100%" alt=""/>
                                <button class="sign_in" type="button" onClick={Join}>{" "}Sign In{" "}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Join