import Header from "./Header";
import { useState, useEffect } from 'react';
import Mypage_css from "../component/Mypage_css";
import Link from "next/link";
import Head from "next/head";

const Mypage = () => {

    const [userName, setName] = useState('');
    const [vip, getRank] = useState('Bronze');

    useEffect(() =>{

        setName(localStorage.getItem('name'));
        getRank(localStorage.getItem('vip'))
    }, [])


    return (
        <div>
            <Head>
                <title>TIC-마이페이지</title>
            </Head>
            <Mypage_css />
            <Header />
            <div class="upperMypage">
                <h2>마이 페이지</h2>
                <div class="nameMypage">
                    <img class="myRank" src="/redvelvet2.jpg" />
                    <p>
                        <b>{userName}</b> 님 환영합니다!
                    </p>
                </div>
                <div class="preperGenre">
                    <p>
                        회원등급! <h5>{vip}</h5>{" "}
                    </p>
                    <button type="button" onclick="location.href= ''">
                        회원정보수정
                    </button>
                </div>
            </div>
            <div class="downMypageCol">
                <div class="downMypage">
                    <p>
                        <b>예매/구매 내역</b>
                    </p>
                    <div class="sawMovie">
                        <img class="sawPoster" src="/redvelvet3.jpg" />
                        <img class="sawPoster" src="/redvelvet3.jpg" />
                        <img class="sawPoster" src="/redvelvet3.jpg" />
                        <img class="sawPoster" src="/redvelvet3.jpg" />
                        <img class="sawPoster" src="/redvelvet3.jpg" />
                    </div>
                </div>
            </div>
            <div class="whiteCol"></div>
        </div>
    );
};
export default Mypage;