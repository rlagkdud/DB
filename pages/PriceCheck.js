import PriceCheck_css from '../component/PriceCheck_css'
import { useState, useEffect } from "react";
import Header from './Header'
import Head from 'next/head'
import Axios from "axios";
import { useRouter } from 'next/router'

const PriceCheck=()=>{
    const [member, getMember] = useState(false);
    const [vip, getVip] = useState('');
    useEffect(() => {
        if(localStorage.getItem('member') !== null) {
            getMember(localStorage.getItem('member'));
        }
        if(localStorage.getItem('vip') !== null) {
            getVip(localStorage.getItem('vip'));
        }
    },[])

    const router = useRouter();
    var branch = localStorage.getItem('branch')
    var theater = localStorage.getItem('theater_id')
    var dates = localStorage.getItem('date')
    var movie = localStorage.getItem('movie')
    var times = localStorage.getItem('time')
    var seats = localStorage.getItem('seat')
    var price = localStorage.getItem('price')
    var eng_title = localStorage.getItem('eng_title')

    var per = 0.0;
    var discount = 0;
    var last_price = 0;
    function set_member() {
        if(localStorage.getItem('member') !== null) {
            getMember(localStorage.getItem('member'));
        }
    }
    function get_rank() {
        if (vip === 'Bronze') {
            per = 0.0;
        }
        else if (vip === 'Silver') {
            per = 0.1;
        }
        else if (vip === 'Gold') {
            per = 0.2;
        }
        else {
            per = 0.0;
        }
        discount = price * per;
        last_price = price - discount;
    }
    get_rank();
    
    function order_complete() {
        localStorage.removeItem('branch')
        localStorage.removeItem('theater_id')
        localStorage.removeItem('date')
        localStorage.removeItem('movie')
        localStorage.removeItem('time')
        localStorage.removeItem('seat')
        localStorage.removeItem('price')
        localStorage.removeItem('eng_title')
        if (member === 'yes') {
            Axios({
                method: 'POST',
                url: '/order',
                data:{
                    movie_id: localStorage.getItem('movie_id'),
                    discount: discount,
                    total_price: last_price,
                    branch: branch,
                    count: localStorage.getItem('count'),
                    userID : localStorage.getItem('usrID')
                }
            }).then( (res) => {
                const check = res.data.bool;
                if(check){
                    alert('예매가 완료되었습니다');
                    router.push({pathname: '/' });
                }
                else{
                    alert('뭔가... 뭔가가 잘못됨');
                }
            });
        }
        else if (member === 'no') {
            console.log('비회원예매 진입 part1')
            Axios({
                method: 'POST',
                url: '/n_order',
                data:{
                    movie_id: localStorage.getItem('movie_id'),
                    branch: branch,
                    total_price: last_price,
                    count: localStorage.getItem('count'),
                    userPN: localStorage.getItem('pn')
                }
            }).then( (res) => {
                const check = res.data.bool;
                if (check) {
                    alert('비회원 예매가 완료되었습니다');
                    router.push({pathname: '/' });
                }
                else{
                    alert('뭔가... 뭔가가 잘못됨');
                }
            })
        } else {
            alert("something gonna wrong...");
            console.log(member);
            set_member();
        }
    }


    return(
        <div>
            <Head>
                <title>
                    TIC-결제확인
                </title>
            </Head>
            <PriceCheck_css/>
            <Header/>

            <div class='pay_checkContainer'>
            <h1>주문 확인</h1>
            <div class='lastCheck'>
                <img class ='checkPoster' src={eng_title+".jpg"}/>
                <div class ='checkMovie'>
                    <h3>{movie}</h3><br/>
                    <p>상영일<h5>{dates}</h5></p><br/>
                    <p>상영시간<h5>{times}</h5></p><br/>
                    <p>상영관<h5>{branch} {theater}관</h5></p><br/>
                    <p>좌석<h5>{seats}</h5></p><br/>
                </div>
                <div class ='checkPrice'>
                    <h3>할인 금액</h3>
                    <h5>{discount}원</h5>
                    <h3>총 결제 금액</h3>
                    <h5>{last_price}원</h5>
                </div>
            </div>
            <div class='payCheck'>
                <p>결제 수단</p>
            </div>
            <div class='howPayContainer'>
                    <input type="checkbox" name='payment' value='신용카드' /> 신용카드
                    <input type="checkbox" name='payment' value='휴대폰결제' /> 휴대폰결제
                    <input type="checkbox" name='payment' value='무통장입금' /> 무통장 입금
            </div>
            <div class='check_btn'>
                    <button class = 'checkBtn1' type="button" onClick="location.href='' ">취소</button>
                    <button class = 'checkBtn2' type="button" onClick={order_complete}>결제</button>
            </div>
            </div>
            <div class='downContainer'></div>
        </div>

    )
}
export default PriceCheck