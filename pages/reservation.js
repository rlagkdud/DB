
import {useState} from 'react'
import Header from './Header'
import Reservation_css from '../component/reservation_css'
import Seat_reserve_css from '../component/seat_reserve_css'
import Link from 'next/link'
import Head from 'next/head'
import{ DateAnchor,RegionAnchor,BranchAnchor,MovieAnchor,TimeAnchor } from '../component/example'

const DateOption = ({number,onClick,content,children})=>(
    <DateAnchor onClick={() => onClick(number)} isDate={number === content}>
        {children}
    </DateAnchor>
)
const RegionOption = ({number,onClick,choose_region,children})=>(
    <RegionAnchor onClick={() => onClick(number)} isRegion={number === choose_region}>
        {children}
    </RegionAnchor>
)
const BranchOption = ({number,onClick,choose_branch,children})=>(
    <BranchAnchor onClick={() => onClick(number)} isBranch={number === choose_branch}>
        {children}
    </BranchAnchor>
)
const MovieOption = ({number,onClick,choose_movie,children})=>(
    <MovieAnchor onClick={() => onClick(number)} isMovie={number === choose_movie}>
        {children}
    </MovieAnchor>
)

const TimeOption = ({number,onClick,choose_time,children})=>(
    <TimeAnchor onClick={() => onClick(number)} isTime={number === choose_time}>
        {children}
    </TimeAnchor>
)


const reservation = () => {

    const [content, setContent] = useState(-1)
    const [region, setRegion] =useState(0)
    const [choose_region,setChooseRegion]=useState('서울')
    const [choose_branch,setChooseBranch]=useState(0)
    const [choose_movie,setChooseMovie]=useState(0)
    const [choose_time,setChooseTime]=useState(0)
    const [check, setCheck]=useState(false)
    function checkHandler(){
        if(check==false){
            setContent(-1)
            setChooseRegion(0)
            setChooseBranch(0)
            setChooseMovie(0)
            setChooseTime(0)
        }
    }


    
    
    const seoul = (
        
        <div class="scroll">
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'가산디지털'} choose_branch={choose_branch}>가산디지털</BranchOption>
                    {/* <p class={toggle ? "pink":"store"} onClick={() => setToggle(!toggle)} >가산디지털</p> */}
                    <BranchOption onClick={setChooseBranch} number={'가양'} choose_branch={choose_branch}>가양</BranchOption>
                </div>
                <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'강동'} choose_branch={choose_branch}>강동</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'건대입구'} choose_branch={choose_branch}>건대입구</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'김포공항'} choose_branch={choose_branch}>김포공항</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'노원'} choose_branch={choose_branch}>노원</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'녹산'} choose_branch={choose_branch}>녹산</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'브로드웨이(신사)'} choose_branch={choose_branch}>브로드웨이(신사)</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'서울대입구'} choose_branch={choose_branch}>서울대입구</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'수락산'} choose_branch={choose_branch}>수락산</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'수유'} choose_branch={choose_branch}>수유</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'신도림'} choose_branch={choose_branch}>신도림</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'신림'} choose_branch={choose_branch}>신림</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'에비뉴엘(명동)'} choose_branch={choose_branch}>에비뉴엘(명동)</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'영등포'} choose_branch={choose_branch}>영등포</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'용산'} choose_branch={choose_branch}>용산</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'월드타워'} choose_branch={choose_branch}>월드타워</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'은평(롯데몰)'} choose_branch={choose_branch}>은평(롯데몰)</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'장안'} choose_branch={choose_branch}>장안</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'청량리'} choose_branch={choose_branch}>청량리</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'합정'} choose_branch={choose_branch}>합정</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'홍대입구'} choose_branch={choose_branch}>홍대입구</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'황학'} choose_branch={choose_branch}>황학</BranchOption>
                </div>
            </div>
    )

    const gyeonggi = (
        <div class="scroll">
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'검단'} choose_branch={choose_branch}>검단</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'광교아울렛'} choose_branch={choose_branch}>광교아울렛</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'광주터미널'} choose_branch={choose_branch}>광주터미널</BranchOption> 
                <BranchOption onClick={setChooseBranch} number={'구리아울렛'} choose_branch={choose_branch}>구리아울렛</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'병점'} choose_branch={choose_branch}>병점</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'부천(신중동역)'} choose_branch={choose_branch}>부천(신중동역)</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'부평역사'} choose_branch={choose_branch}>부평역사</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'산본피트인'} choose_branch={choose_branch}>산본피트인</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'성남중앙(신흥역)'} choose_branch={choose_branch}>성남중앙(신흥역)</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'센트럴락'} choose_branch={choose_branch}>센트럴락</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'수지'} choose_branch={choose_branch}>수지</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'시화'} choose_branch={choose_branch}>시화</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'안성'} choose_branch={choose_branch}>안성</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'안양(안양역)'} choose_branch={choose_branch}>안양(안양역)</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'안양일번가'} choose_branch={choose_branch}>안양일번가</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'양주고읍'} choose_branch={choose_branch}>양주고읍</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'용인기흥'} choose_branch={choose_branch}>용인기흥</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'용인역북'} choose_branch={choose_branch}>용인역북</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'인덕원'} choose_branch={choose_branch}>인덕원</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'인천아시아드'} choose_branch={choose_branch}>인천아시아드</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'진접'} choose_branch={choose_branch}>진접</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'파주아울렛'} choose_branch={choose_branch}>파주아울렛</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'파주운정'} choose_branch={choose_branch}>파주운정</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'평촌(범계역)'} choose_branch={choose_branch}>평촌(범계역)</BranchOption>
            </div>
        </div>
    )
    

    const daejeon = (
        <div class="scroll">
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'대전(백화점)'} choose_branch={choose_branch}>대전(백화점)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'대전둔산(월평동)'} choose_branch={choose_branch}>대전둔산(월평동)</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'대전센트럴'} choose_branch={choose_branch}>대전센트럴</BranchOption> 
                    <BranchOption onClick={setChooseBranch} number={'서산'} choose_branch={choose_branch}>서산</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'서청주(아울렛)'} choose_branch={choose_branch}>서청주(아울렛)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'아산터미널'} choose_branch={choose_branch}>아산터미널</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'청주(성안길)'} choose_branch={choose_branch}>청주(성안길)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'청주용암'} choose_branch={choose_branch}>청주용암</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'충주'} choose_branch={choose_branch}>충주</BranchOption>
                </div>     
        </div>        

    )

    const gwangju = (
        <div class="scroll">
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'광주(백화점)'} choose_branch={choose_branch}>광주(백화점)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'광주광산'} choose_branch={choose_branch}>광주광산</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'군산나운'} choose_branch={choose_branch}>군산나운</BranchOption> 
                    <BranchOption onClick={setChooseBranch} number={'군산몰'} choose_branch={choose_branch}>군산몰</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'수완(아울렛)'} choose_branch={choose_branch}>수완(아울렛)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'익산모현'} choose_branch={choose_branch}>익산모현</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'전주(백화점)'} choose_branch={choose_branch}>전주(백화점)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'전주평화'} choose_branch={choose_branch}>전주평화</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'충장로'} choose_branch={choose_branch}>충장로</BranchOption>
                </div>     
        </div>        
    )

    const daegu = (
        <div class="scroll">
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'경산'} choose_branch={choose_branch}>경산</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'경주'} choose_branch={choose_branch}>경주</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'구미 프라임 1번가'} choose_branch={choose_branch}>구미 프라임 1번가</BranchOption> 
                    <BranchOption onClick={setChooseBranch} number={'구미공단'} choose_branch={choose_branch}>구미공단</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'대구광장'} choose_branch={choose_branch}>대구광장</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'대구율하'} choose_branch={choose_branch}>대구율하</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'대구현풍'} choose_branch={choose_branch}>대구현풍</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'동성로'} choose_branch={choose_branch}>동성로</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'상인'} choose_branch={choose_branch}>상인</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'성서'} choose_branch={choose_branch}>성서</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'영주'} choose_branch={choose_branch}>영주</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'포항'} choose_branch={choose_branch}>포항</BranchOption>
                </div>    
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'프리미엄구미센트럴'} choose_branch={choose_branch}>프리미엄구미센트럴</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'프리미엄만경'} choose_branch={choose_branch}>프리미엄만경</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={'프리미엄안동'} choose_branch={choose_branch}>프리미엄안동</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={'프리미엄칠곡'} choose_branch={choose_branch}>프리미엄칠곡</BranchOption>
                </div>
        </div>
    )

    const busan = (
        <div class="scroll">
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'광복'} choose_branch={choose_branch}>광복</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'김해부원'} choose_branch={choose_branch}>김해부원</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'김해아울렛(장유)'} choose_branch={choose_branch}>김해아울렛(장유)</BranchOption> 
                <BranchOption onClick={setChooseBranch} number={'대영'} choose_branch={choose_branch}>대영</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'동래'} choose_branch={choose_branch}>동래</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'동부산아울렛'} choose_branch={choose_branch}>동부산아울렛</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'마산터미널'} choose_branch={choose_branch}>마산터미널</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'부산본점'} choose_branch={choose_branch}>부산본점</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'사상'} choose_branch={choose_branch}>사상</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'서면'} choose_branch={choose_branch}>서면</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'센텀시티'} choose_branch={choose_branch}>센텀시티</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'엠비씨네'} choose_branch={choose_branch}>엠비씨네</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'오투(부산대)'} choose_branch={choose_branch}>오투(부산대)</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'울산(백화점)'} choose_branch={choose_branch}>울산(백화점)</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'울산성남'} choose_branch={choose_branch}>울산성남</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'진주혁신'} choose_branch={choose_branch}>진주혁신</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'잔해'} choose_branch={choose_branch}>잔해</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'창원'} choose_branch={choose_branch}>창원</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'통영'} choose_branch={choose_branch}>통영</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'프리미엄경남대'} choose_branch={choose_branch}>프리미엄경남대</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'프리미엄진주'} choose_branch={choose_branch}>프리미엄진주</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'프리미엄해운대'} choose_branch={choose_branch}>프리미엄해운대</BranchOption>
            </div>
        </div>
    )

    const gangwon = (
        <div class="scroll">
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'남원주'} choose_branch={choose_branch}>남원주</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'동해'} choose_branch={choose_branch}>동해</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'원주무실'} choose_branch={choose_branch}>원주무실</BranchOption> 
            </div>                                    
        </div>
    )

    const jeju = (
        <div class="scroll">
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'서귀포'} choose_branch={choose_branch}>서귀포</BranchOption>
                <BranchOption onClick={setChooseBranch} number={'제주삼화지구'} choose_branch={choose_branch}>제주삼화지구</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={'제주아라'} choose_branch={choose_branch}>제주아라</BranchOption> 
            </div>                                    
        </div>
    )

    const movies=(
        <div class="scroll">
                <MovieOption onClick={setChooseMovie} number={'블랙머니1'} choose_movie={choose_movie}>블랙머니</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'블랙머니2'} choose_movie={choose_movie}>블랙머니</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'겨울왕국(자막)'} choose_movie={choose_movie}>겨울왕국(자막)</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'겨울왕국(더빙)'} choose_movie={choose_movie}>겨울왕국(더빙)</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'조커(자막)'} choose_movie={choose_movie}>조커(자막)</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'조커(더빙)'} choose_movie={choose_movie}>조커(더빙)</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'82년생 김지영'} choose_movie={choose_movie}>82년생 김지영</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'어벤져스'} choose_movie={choose_movie}>어벤져스</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'바보몽총이'} choose_movie={choose_movie}>바보몽총이</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'왤케힘드니'} choose_movie={choose_movie}>왤케힘드니</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'빨리하고'} choose_movie={choose_movie}>빨리하고</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'끝내야지'} choose_movie={choose_movie}>끝내야지</MovieOption>
                <MovieOption onClick={setChooseMovie} number={'메롱메롱'} choose_movie={choose_movie}>메롱메롱</MovieOption>
        </div>
    )

    const region_list=[seoul, gyeonggi, daejeon, gwangju, daegu, busan, gangwon, jeju]
   
    const reservation=(
        <div>
            <Reservation_css/>
            <div class="reserveContainer">
                <h1 class="bigTitle">예매</h1>
                <div class="date">
                    <h3>날짜</h3>
                    <div class="point">
                        <DateOption onClick={setContent} number={'11/28'} content={content}>11/28</DateOption>
                        <DateOption onClick={setContent} number={'11/29'} content={content}>11/29</DateOption>
                        <DateOption onClick={setContent} number={'11/30'} content={content}>11/30</DateOption>
                        <DateOption onClick={setContent} number={'12/1'} content={content}>12/1</DateOption>
                        <DateOption onClick={setContent} number={'12/2'} content={content}>12/2</DateOption>
                        <DateOption onClick={setContent} number={'12/3'} content={content}>12/3</DateOption>
                        <DateOption onClick={setContent} number={'12/4'} content={content}>12/4</DateOption>
                        <DateOption onClick={setContent} number={'12/5'} content={content}>12/5</DateOption>
                        <DateOption onClick={setContent} number={'12/6'} content={content}>12/6</DateOption>
                        <DateOption onClick={setContent} number={'12/7'} content={content}>12/7</DateOption>
                        <DateOption onClick={setContent} number={'12/8'} content={content}>12/8</DateOption>
                        <DateOption onClick={setContent} number={'12/9'} content={content}>12/9</DateOption>
                        <DateOption onClick={setContent} number={'12/10'} content={content}>12/10</DateOption>
                        <DateOption onClick={setContent} number={'12/11'} content={content}>12/11</DateOption>
                        <DateOption onClick={setContent} number={'12/12'} content={content}>12/12</DateOption>
                        <DateOption onClick={setContent} number={'12/13'} content={content}>12/13</DateOption>
                        <DateOption onClick={setContent} number={'12/14'} content={content}>12/14</DateOption>
                        <DateOption onClick={setContent} number={'12/15'} content={content}>12/15</DateOption>
                        <DateOption onClick={setContent} number={'12/16'} content={content}>12/16</DateOption>
                        <DateOption onClick={setContent} number={'12/17'} content={content}>12/17</DateOption>
                        <DateOption onClick={setContent} number={'12/18'} content={content}>12/18</DateOption>
                        <DateOption onClick={setContent} number={'12/19'} content={content}>12/19</DateOption>

                    </div>
                </div>
                <hr class="hr" />
                
                <br/>
                <div class="make_choice"> 
                    <div class="choice">
                        <RegionOption onClick={setChooseRegion} number={'서울'} choose_region={choose_region}> <div onClick={()=> setRegion(0)}>서울</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={'경기/인천'} choose_region={choose_region}> <div onClick={()=> setRegion(1)}>경기/인천</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={'충청/대전'} choose_region={choose_region}> <div onClick={()=> setRegion(2)}>충청/대전</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={'전라/광주'} choose_region={choose_region}> <div onClick={()=> setRegion(3)}>전라/광주</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={'경북/대구'} choose_region={choose_region}> <div onClick={()=> setRegion(4)}>경북/대구</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={'경남/부산/울산'} choose_region={choose_region}> <div onClick={()=> setRegion(5)}>경남/부산/울산</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={'강원'} choose_region={choose_region}> <div onClick={()=> setRegion(6)}>강원</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={'제주'} choose_region={choose_region}> <div onClick={()=> setRegion(7)}>제주</div></RegionOption>
                    </div>
                    <div class="choice">
                        {region_list[region]}
                    </div>
                    <div class="choice">
                        {movies}
                    </div> 

                </div>
                <div class="next">
                        <button class="confirm" onClick={()=>setCheck(true)}>확인</button>
                    <button class="cancel" onClick={()=>checkHandler()}>취소</button> 

                    
                </div>                  
            </div>
            <div class="below"></div>
        </div>
    )

    const seat_reserve=(
        <div>
            <Seat_reserve_css/>
            <div class='reserve_checkContainer'>
                <h1>영화 예매</h1>
                <hr class='line'/>
                <div class='reserve_check'>
                    <div class='reserve'>
                        <h2>상영시간</h2>
                        <div class = 'movie_playtime'>
                                <TimeOption onClick={setChooseTime} number ={'10:30'} choose_time ={choose_time}>10:30</TimeOption>
                                <TimeOption onClick={setChooseTime} number ={'11:30'} choose_time ={choose_time}>11:30</TimeOption>
                                <TimeOption onClick={setChooseTime} number ={'12:30'} choose_time ={choose_time}>12:30</TimeOption>
                                <TimeOption onClick={setChooseTime} number ={'1:30'} choose_time ={choose_time}>1:30</TimeOption>
                                <TimeOption onClick={setChooseTime} number ={'2:30'} choose_time ={choose_time}>2:30</TimeOption>
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
                                <input type="checkbox" name='seat' value='1' />
                                <input type="checkbox" name='seat' value='2'/> 
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
                                <img src='seat1.png'/>
                                <p>선택 가능</p>
                                <img src='seat1.png'/>
                                <p>선택 가능</p>
                        </div>
                    </div>
                    <div class='check'>
                        <h3>예매 정보</h3>
                        <img class = 'check_poster' src='redvelvet.jpg'/>
                        <div class='check_name'>
                            <h5>{choose_movie}</h5>
                            <h5>3D</h5>
                        </div>
                        <div class='see_info'>
                            <p>상영일<h5>{content}</h5></p><br/>
                            <p>상영시간<h5>{choose_time}</h5></p><br/>
                            <p>상영관<h5>{choose_branch}</h5></p><br/>
                            <p>좌석<h5>C7, C8</h5></p><br/>
                        </div>
                        <div class='see_price'>
                            <h2>총 결제금액</h2><br/>
                            <p>영화예매<h5>20000</h5></p><br/>
                            <p>등급 할인<h5>2000</h5></p><br/>
                            <h4 class="totalprice">18000</h4>
                        </div>
                        <div class='buy_btn'>
                            <button class = 'btn1' type="button" onClick={()=>setCheck(false)}>취소</button>
                            <Link href="/PriceCheck"><button class = 'btn2' type="button" onclick="location.href='' ">결제</button></Link>
                        </div>
                    </div>
                </div>  
            </div>
            <div class='empty'></div>
        </div>
    )


    return(
        <div> 
            <Head>
                <title>
                    TIC-영화예매
                </title>
            </Head>
            <Header />
            {check ? seat_reserve: reservation}
        </div>
        
    )
}

export default reservation