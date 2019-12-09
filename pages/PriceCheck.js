import PriceCheck_css from '../component/PriceCheck_css'
import Header from './Header'
import Head from 'next/head'

const PriceCheck=()=>{
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
                    <h3>총 결제 금액</h3>
                    <h5>18000원</h5>
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
                    <button class = 'checkBtn1' type="button" onclick="location.href='' ">취소</button>
                    <button class = 'checkBtn2' type="button" onclick="location.href='' ">결제</button>
            </div>
            </div>
            <div class='downContainer'></div>
        </div>

    )
}
export default PriceCheck