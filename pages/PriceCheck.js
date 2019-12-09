import PriceCheck_css from '../component/PriceCheck_css'
import Header from './Header'
import Head from 'next/head'
import Axios from "axios";
import { useRouter } from 'next/router'

const PriceCheck=()=>{
    const router = useRouter();
    const branch = localStorage.getItem('branch')
    localStorage.removeItem('branch')
    const theater = localStorage.getItem('theater_id')
    localStorage.removeItem('theater_id')
    const dates = localStorage.getItem('date')
    localStorage.removeItem('date')
    const movie = localStorage.getItem('movie')
    localStorage.removeItem('movie')
    const times = localStorage.getItem('time')
    localStorage.removeItem('time')
    const seats = localStorage.getItem('seat')
    localStorage.removeItem('seat')
    var price = localStorage.getItem('price')
    localStorage.removeItem('price')
    var vip = localStorage.getItem('vip')
    
    var per = 0.0;
    var discount = 0;
    var last_price = 0;
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
        console.log(per);
        discount = price * per;
        last_price = price - discount;
    }
    get_rank();
    
    function order_complete() {
        console.log("i'm in!")
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
                <img class ='checkPoster' src='redvelvet3.jpg'/>
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