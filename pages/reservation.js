
import {useState} from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Reservation_css from '../component/reservation_css'
import Link from 'next/link'
import example, { DateAnchor } from '../component/expample'

const NavOption = ({number,onClick,content,children})=>(
    <DateAnchor onClick={() => onClick(number)} isCurrent={number === content}>
        {children}
    </DateAnchor>
)

const reservation = () => {

    const [content, setContent] = useState(-1)
    
    

    const [region, setRegion] =useState(0)
    
    const seoul = (
        
        <div class="scroll">
                <div class="ex">
                    <p  class="store">가산디지털</p>
                    <p class="store">가양</p>
                </div>
                <div class="ex">
                    <p class="store">강동</p> 
                    <p class="store">건대입구</p>
                </div>
                <div class="ex">
                    <p class="store">김포공항</p>
                    <p class="store">노원</p>
                </div>
                <div class="ex">
                    <p onClick={()=> setMovie(true)} class="store">녹산</p>
                    <p onClick={()=> setMovie(true)} class="store">브로드웨이(신사)</p>
                </div>
                <div class="ex">
                    <p class="store">서울대입구</p>
                    <p class="store">수락산</p>
                </div>
                <div class="ex">
                    <p class="store">수유</p>
                    <p class="store">신도림</p>
                </div>
                <div class="ex">
                    <p class="store">신림</p>
                    <p class="store">에비뉴엘(명동)</p>
                </div>
                <div class="ex">
                    <p class="store">영등포</p>
                    <p class="store">용산</p>
                </div>
                <div class="ex">
                    <p class="store">월드타워</p>
                    <p class="store">은평(롯데몰)</p>
                </div>
                <div class="ex">
                    <p class="store">장안</p>
                    <p class="store">청량리</p>
                </div>
                <div class="ex">
                    <p class="store">합정</p>
                    <p class="store">홍대입구</p>
                </div>
                <div class="ex">
                    <p class="store">황학</p>
                </div>
            </div>
    )

    const gyeonggi = (
        <div class="scroll">
            <div class="ex">
                <p class="store">검단</p>
                <p class="store">광교아울렛</p>
            </div>
            <div class="ex">
                <p class="store">광주터미널</p> 
                <p class="store">구리아울렛</p>
            </div>
            <div class="ex">
                <p class="store">병점</p>
                <p class="store">부천(신중동역)</p>
            </div>
            <div class="ex">
                <p class="store">부평역사</p>
                <p class="store">산본피트인</p>
            </div>
            <div class="ex">
                <p class="store">성남중앙(신흥역)</p>
                <p class="store">센트럴락</p>
            </div>
            <div class="ex">
                <p class="store">수지</p>
                <p class="store">시화</p>
            </div>
            <div class="ex">
                <p class="store">안성</p>
                <p class="store">안양(안양역)</p>
            </div>
            <div class="ex">
                <p class="store">안양일번가</p>
                <p class="store">양주고읍</p>
            </div>
            <div class="ex">
                <p class="store">용인기흥</p>
                <p class="store">용인역북</p>
            </div>
            <div class="ex">
                <p class="store">인덕원</p>
                <p class="store">인천아시아드</p>
            </div>
            <div class="ex">
                <p class="store">진접</p>
                <p class="store">파주아울렛</p>
            </div>
            <div class="ex">
                <p class="store">파주운정</p>
                <p class="store">평촌(범계역)</p>
            </div>
        </div>
    )
    

    const daejeon = (
        <div class="scroll">
                <div class="ex">
                    <p class="store">대전(백화점)</p>
                    <p class="store">대전둔산(월평동)</p>
                </div>
                <div class="ex">
                    <p class="store">대전센트럴</p> 
                    <p class="store">서산</p>
                </div>
                <div class="ex">
                    <p class="store">서청주(아울렛)</p>
                    <p class="store">아산터미널</p>
                </div>
                <div class="ex">
                    <p class="store">청주(성안길)</p>
                    <p class="store">청주용암</p>
                </div>
                <div class="ex">
                    <p class="store">충주</p>
                </div>     
        </div>        

    )

    const gwangju = (
        <div class="scroll">
                <div class="ex">
                    <p class="store">광주(백화점)</p>
                    <p class="store">광주광산</p>
                </div>
                <div class="ex">
                    <p class="store">군산나운</p> 
                    <p class="store">군산몰</p>
                </div>
                <div class="ex">
                    <p class="store">수완(아울렛)</p>
                    <p class="store">익산모현</p>
                </div>
                <div class="ex">
                    <p class="store">전주(백화점)</p>
                    <p class="store">전주평화</p>
                </div>
                <div class="ex">
                    <p class="store">충장로</p>
                </div>     
        </div>        
    )

    const daegu = (
        <div class="scroll">
                <div class="ex">
                    <p class="store">경산</p>
                    <p class="store">경주</p>
                </div>
                <div class="ex">
                    <p class="store">구미 프라임 1번가</p> 
                    <p class="store">구미공단</p>
                </div>
                <div class="ex">
                    <p class="store">대구광장</p>
                    <p class="store">대구율하</p>
                </div>
                <div class="ex">
                    <p class="store">대구현풍</p>
                    <p class="store">동성로</p>
                </div>
                <div class="ex">
                    <p class="store">상인</p>
                    <p class="store">성서</p>
                </div>
                <div class="ex">
                    <p class="store">영주</p>
                    <p class="store">포항</p>
                </div>    
                <div class="ex">
                    <p class="store">프리미엄구미센트럴</p>
                    <p class="store">프리미엄만경</p>
                </div>
                <div class="ex">
                    <p class="store">프리미엄안동</p>
                    <p class="store">프리미엄칠곡</p>
                </div>
        </div>
    )

    const busan = (
        <div class="scroll">
            <div class="ex">
                <p class="store">광복</p>
                <p class="store">김해부원</p>
            </div>
            <div class="ex">
                <p class="store">김해아울렛(장유)</p> 
                <p class="store">대영</p>
            </div>
            <div class="ex">
                <p class="store">동래</p>
                <p class="store">동부산아울렛</p>
            </div>
            <div class="ex">
                <p class="store">마산터미널</p>
                <p class="store">부산본점</p>
            </div>
            <div class="ex">
                <p class="store">사상</p>
                <p class="store">서면</p>
            </div>
            <div class="ex">
                <p class="store">센텀시티</p>
                <p class="store">엠비씨네</p>
            </div>    
            <div class="ex">
                <p class="store">오투(부산대)</p>
                <p class="store">울산(백화점)</p>
            </div>
            <div class="ex">
                <p class="store">울산성남</p>
                <p class="store">진주혁신</p>
            </div>
            <div class="ex">
                <p class="store">잔해</p>
                <p class="store">창원</p>
            </div>
            <div class="ex">
                <p class="store">통영</p>
                <p class="store">프리미엄경남대</p>
            </div>
            <div class="ex">
                <p class="store">프리미엄진주</p>
                <p class="store">프리미엄해운대</p>
            </div>
        </div>
    )

    const gangwon = (
        <div class="scroll">
            <div class="ex">
                <p class="store">남원주</p>
                <p class="store">동해</p>
            </div>
            <div class="ex">
                <p class="store">원주무실</p> 
            </div>                                    
        </div>
    )

    const jeju = (
        <div class="scroll">
            <div class="ex">
                <p class="store">서귀포</p>
                <p class="store">제주삼화지구</p>
            </div>
            <div class="ex">
                <p class="store">제주아라</p> 
            </div>                                    
        </div>
    )

    const movies=(
        <div class="scroll">
                <p class="movie">블랙머니</p>
                <p class="movie">블랙머니</p>
                <p class="movie">겨울왕국(자막)</p>
                <p class="movie">겨울왕국(더빙)</p>
                <p class="movie">조커(자막)</p>
                <p class="movie">조커(더빙)</p>
                <p class="movie">82년생 김지영</p>
                <p class="movie">어벤져스</p>
                <p class="movie">바보몽총이</p>
                <p class="movie">왤케힘드니</p>
                <p class="movie">빨리하고</p>
                <p class="movie">끝내야지</p>
                <p class="movie">메롱메롱</p>
        </div>
    )

    const region_list=[seoul, gyeonggi, daejeon, gwangju, daegu, busan, gangwon, jeju]
    
    

    return(
        <div> 
            <Reservation_css/>
            <Header />       
            <div class="body_reservation">
            <div class="reserveContainer">
                <h1 class="bigTitle">예매</h1>
                <div class="date">
                    <h3>날짜</h3>
                    <div class="point">
                        <NavOption onClick={setContent} number={0} content={content}>11/28</NavOption>
                        <NavOption onClick={setContent} number={1} content={content}>11/29</NavOption>
                        <NavOption onClick={setContent} number={2} content={content}>11/30</NavOption>
                        <NavOption onClick={setContent} number={3} content={content}>12/1</NavOption>
                        <NavOption onClick={setContent} number={4} content={content}>12/2</NavOption>
                        <NavOption onClick={setContent} number={5} content={content}>12/3</NavOption>
                        <NavOption onClick={setContent} number={6} content={content}>12/4</NavOption>
                        <NavOption onClick={setContent} number={7} content={content}>12/5</NavOption>
                        <NavOption onClick={setContent} number={8} content={content}>12/6</NavOption>
                        <NavOption onClick={setContent} number={9} content={content}>12/7</NavOption>
                        <NavOption onClick={setContent} number={10} content={content}>12/8</NavOption>
                        <NavOption onClick={setContent} number={11} content={content}>12/9</NavOption>
                        <NavOption onClick={setContent} number={12} content={content}>12/10</NavOption>
                        <NavOption onClick={setContent} number={13} content={content}>12/11</NavOption>
                        <NavOption onClick={setContent} number={14} content={content}>12/12</NavOption>
                        <NavOption onClick={setContent} number={15} content={content}>12/13</NavOption>
                        <NavOption onClick={setContent} number={16} content={content}>12/14</NavOption>
                        <NavOption onClick={setContent} number={17} content={content}>12/15</NavOption>
                        <NavOption onClick={setContent} number={18} content={content}>12/16</NavOption>
                        <NavOption onClick={setContent} number={19} content={content}>12/17</NavOption>
                        <NavOption onClick={setContent} number={20} content={content}>12/18</NavOption>
                        <NavOption onClick={setContent} number={21} content={content}>12/19</NavOption>

                    </div>
                </div>
                <hr class="hr" />
                
                <br/>
                <div class="make_choice"> 
                    <div class="choice">
                        <p onClick={()=> setRegion(0)} class="region">서울</p>
                        <p onClick={()=> setRegion(1)} class="region">경기/인천</p>
                        <p onClick={()=> setRegion(2)} class="region">충청/대전</p>
                        <p onClick={()=> setRegion(3)} class="region">전라/광주</p>
                        <p onClick={()=> setRegion(4)} class="region">경북/대구</p>
                        <p onClick={()=> setRegion(5)} class="region">경남/부산/울산</p>
                        <p onClick={()=> setRegion(6)} class="region">강원</p>
                        <p onClick={()=> setRegion(7)} class="region">제주</p>
                    </div>
                    <div class="choice">
                        {region_list[region]}
                    </div>
                    <div class="choice">
                        {movies}
                    </div> 

                </div>
                <div class="next">
                    <Link href="/Seat_reserve"><button class="confirm" >확인</button></Link>
                    <button class="cancel">취소</button> 

                    
                </div>                  
            </div>
            <div class="below"></div>
        </div> 
        </div>
        
    )
}

export default reservation