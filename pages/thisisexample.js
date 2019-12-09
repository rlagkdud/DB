import Header from './Header'
import Seat_reserve_css from '../component/seat_reserve_css'
import Link from 'next/link'
import React, { Component} from 'react';
import SeatForm from './SeatForm'

class SeatReserve extends Component{
    constructor(props){
        super(props);

        this.state={
            time: '' ,
            seat:[{
                seatName:""
            }]
        };
    }
    handleTime = (e) =>{
        e.preventDefault();
        this.setState({
         time: e.target.value   
        })
    }
    handleSeat =(e) =>{
        let i=0
            while(i < this.state.seat.length){
               if(this.state.seat[i].seatName===e.target.value){
                    this.setState({
                        seat:this.state.seat.slice(0,i).concat(this.state.seat.slice(i+1,this.state.seat.length))
                    })
                    break;
                }
                this.setState({
                    seat:this.state.seat.concat({seatName:e.target.value})
                })
                i = i + 1;
            }
        }
    render(){
        return(
            <div class="body_seat">
                <div>
                <Seat_reserve_css/>
                <Header/>
                <div class='reserve_checkContainer'>
                    <h1>영화 예매</h1>
                    <hr class='line'/>
                    <div class='reserve_check'>
                        <div class='reserve'>
                            <h2>상영시간</h2>
                            <div class = 'movie_playtime'>
                                    <button type="button" onClick={this.handleTime} value = "10:30">10:30</button>
                                    <button type="button" onClick={this.handleTime} value = "11:30">11:30</button>
                                    <button type="button" onClick={this.handleTime} value = "12:30">12:30</button>
                                    <button type="button" onClick={this.handleTime} value = "1:30">1:30</button>
                                    <button type="button" onClick={this.handleTIme} value = "2:30">2:30</button>
                            </div>
                            <div class="movie_memnum">
                                <h3>인원/좌석</h3>
                                <p>성인</p>
                                <select name="adult_num">
                                        <option value="0명" selected="selected">0명</option>
                                        <option value="1명">1명</option>
                                        <option value="2명">2명</option>
                                        <option value="3명">3명</option>
                                        <option value="4명">4명</option>
                                </select>
                                <p>청소년</p>
                                <select name="kid_num">
                                        <option value="0명" selected="selected">0명</option>
                                        <option value="1명">1명</option>
                                        <option value="2명">2명</option>
                                        <option value="3명">3명</option>
                                        <option value="4명">4명</option>
                                </select>
                                <p>시니어</p>
                                <select name="senior_num">
                                        <option value="0명" selected="selected">0명</option>
                                        <option value="1명">1명</option>
                                        <option value="2명">2명</option>
                                        <option value="3명">3명</option>
                                        <option value="4명">4명</option>
                                </select>
                            </div>
                            <div class='seat_map'>
                                <div class='screen'>
                                    <p><i>screen</i></p>
                                </div>
                                <div class='seatA'>
                                    <p><u>A</u></p>
                                    <input type="checkbox" name='seat' value='A1'  onChange={this.handleSeat.bind(this)} />
                                    <input type="checkbox" name='seat' value='A2' onChange={this.handleSeat}/> 
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='A3' onChange={this.handleSeat}/>
                                    <input type="checkbox" name='seat' value='A4'  onChange={this.handleSeat}/>
                                    <input type="checkbox" name='seat' value='A5' onChange={this.handleSeat} />
                                    <input type="checkbox" name='seat' value='A6'  onChange={this.handleSeat}/>
                                    <input type="checkbox" name='seat' value='A7' onChange={this.handleSeat}/>
                                    <input type="checkbox" name='seat' value='A8'  onChange={this.handleSeat}/>
                                    <input type="checkbox" name='seat' value='A9'  onChange={this.handleSeat}/>
                                    <input type="checkbox" name='seat' value='A10'  onChange={this.handleSeat}/>
                                    <input type="checkbox" name='seat' value='A11'  onChange={this.handleSeat}/>
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='A12' onChange={this.handleSeat}/>
                                    <input type="checkbox" name='seat' value='A13'  onChange={this.handleSeat}/>
                                    <input type="checkbox" name='seat' value='A14'  onChange={this.handleSeat}/>
                                    <input type="checkbox" name='seat' value='A15'  onChange={this.handleSeat}/>
                                </div>
                                <div class='seatB_G'>
                                    <p><u>B</u></p>
                                    <input type="checkbox" name='seat' value='1'/> 
                                    <input type="checkbox" name='seat' value='2' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='3' />
                                    <input type="checkbox" name='seat' value='4' />
                                    <input type="checkbox" name='seat' value='5' />
                                    <input type="checkbox" name='seat' value='6' />
                                    <input type="checkbox" name='seat' value='7' />
                                    <input type="checkbox" name='seat' value='8' />
                                    <input type="checkbox" name='seat' value='9' />
                                    <input type="checkbox" name='seat' value='10' />
                                    <input type="checkbox" name='seat' value='11' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='12' />
                                    <input type="checkbox" name='seat' value='13' />
                                    <input type="checkbox" name='seat' value='14' />
                                    <input type="checkbox" name='seat' value='15' />
                                </div>
                                <div class='seatB_G'>
                                    <p><u>C</u></p>
                                    <input type="checkbox" name='seat' value='1' />
                                    <input type="checkbox" name='seat' value='2' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='3' />
                                    <input type="checkbox" name='seat' value='4' />
                                    <input type="checkbox" name='seat' value='5' />
                                    <input type="checkbox" name='seat' value='6' />
                                    <input type="checkbox" name='seat' value='7' />
                                    <input type="checkbox" name='seat' value='8' />
                                    <input type="checkbox" name='seat' value='9' />
                                    <input type="checkbox" name='seat' value='10' />
                                    <input type="checkbox" name='seat' value='11' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='12'/>
                                    <input type="checkbox" name='seat' value='13' />
                                    <input type="checkbox" name='seat' value='14' />
                                    <input type="checkbox" name='seat' value='15' />
                                </div>
                                <div class='seatB_G'>
                                    <p><u>D</u></p>
                                    <input type="checkbox" name='seat' value='1' />
                                    <input type="checkbox" name='seat' value='2' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='3' />
                                    <input type="checkbox" name='seat' value='4' />
                                    <input type="checkbox" name='seat' value='5' />
                                    <input type="checkbox" name='seat' value='6' />
                                    <input type="checkbox" name='seat' value='7' />
                                    <input type="checkbox" name='seat' value='8' />
                                    <input type="checkbox" name='seat' value='9' />
                                    <input type="checkbox" name='seat' value='10' />
                                    <input type="checkbox" name='seat' value='11' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='12' />
                                    <input type="checkbox" name='seat' value='13' />
                                    <input type="checkbox" name='seat' value='14' />
                                    <input type="checkbox" name='seat' value='15' />
                                </div>
                                <div class='seatB_G'>
                                    <p><u>E</u></p>
                                    <input type="checkbox" name='seat' value='1' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='2' />
                                    <input type="checkbox" name='seat' value='3' />
                                    <input type="checkbox" name='seat' value='4' />
                                    <input type="checkbox" name='seat' value='5' />
                                    <input type="checkbox" name='seat' value='6' />
                                    <input type="checkbox" name='seat' value='7' />
                                    <input type="checkbox" name='seat' value='8' />
                                    <input type="checkbox" name='seat' value='9' />
                                    <input type="checkbox" name='seat' value='10' />
                                    <input type="checkbox" name='seat' value='11' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='12' />
                                    <input type="checkbox" name='seat' value='13' />
                                    <input type="checkbox" name='seat' value='14' />
                                    <input type="checkbox" name='seat' value='15' />
                                </div>
                                <div class='seatB_G'>
                                    <p><u>F</u></p>
                                    <input type="checkbox" name='seat' value='1' />
                                    <input type="checkbox" name='seat' value='2' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='3' />
                                    <input type="checkbox" name='seat' value='4' />
                                    <input type="checkbox" name='seat' value='5' />
                                    <input type="checkbox" name='seat' value='6' />
                                    <input type="checkbox" name='seat' value='7' />
                                    <input type="checkbox" name='seat' value='8' />
                                    <input type="checkbox" name='seat' value='9' />
                                    <input type="checkbox" name='seat' value='10'/>
                                    <input type="checkbox" name='seat' value='11'/>
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='12' />
                                    <input type="checkbox" name='seat' value='13' />
                                    <input type="checkbox" name='seat' value='14' />
                                    <input type="checkbox" name='seat' value='15' />
                                </div>
                                <div class='seatB_G'>
                                    <p><u>G</u></p>
                                    <input type="checkbox" name='seat' value='1' />
                                    <input type="checkbox" name='seat' value='2' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='3' />
                                    <input type="checkbox" name='seat' value='4' />
                                    <input type="checkbox" name='seat' value='5' />
                                    <input type="checkbox" name='seat' value='6' />
                                    <input type="checkbox" name='seat' value='7' />
                                    <input type="checkbox" name='seat' value='8' />
                                    <input type="checkbox" name='seat' value='9' />
                                    <input type="checkbox" name='seat' value='10' />
                                    <input type="checkbox" name='seat' value='11' />
                                    <input class="thirdTwelve" type="checkbox" name='seat' value='12' />
                                    <input type="checkbox" name='seat' value='13' />
                                    <input type="checkbox" name='seat' value='14' />
                                    <input type="checkbox" name='seat' value='15' />
                                </div>
                            </div>
                            <div class='img_checkBox'>
                                    <img src='../image/seat1.png'/>
                                    <p>선택 가능</p>
                                    <img src='../image/seat1.png'/>
                                    <p>선택 가능</p>
    
                            </div>
                        </div>
                        <div class='check'>
                            <h3>예매 정보</h3>
                            <img class = 'check_poster' src='../image/redvelvet.jpg'/>
                            <div class='check_name'>
                                <h5>레드벨벳</h5>
                                <h5>3D</h5>
                            </div>
                            <div class='see_info'>
                                <p>상영일<h5>2019-11-19(화)</h5></p><br/>
                                <p>상영시간 <h5> {this.state.time} </h5></p><br/>
                                <p>상영관<h5>용산 4관</h5></p><br/>
                                <p>좌석{this.state.seat.map(s => <h5>{s.seatName}</h5>)}</p>
                            </div>
                            <div class='see_price'>
                                <h2>총 결제금액</h2><br/>
                                <p>영화예매<h5>20000</h5></p><br/>
                                <p>등급 할인<h5>2000</h5></p><br/>
                                <h4 class="totalprice">18000</h4>
                            </div>
                            <div class='buy_btn'>
                                <button class = 'btn1' type="button" onclick="location.href='' ">취소</button>
                                <Link href="/PriceCheck"><button class = 'btn2' type="button" onclick="location.href='' ">결제</button></Link>
                            </div>
                        </div>
                    </div>     
                </div>
                <div class='empty'></div>
                </div>
                // </div>
                // </div>
                // </div>
                // </div>
        )
    }
}
        

export default SeatReserve