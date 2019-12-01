
import {useState} from 'react'
import Header from './Header'
import Reservation_css from '../component/reservation_css'
import Link from 'next/link'
import{ DateAnchor,RegionAnchor,BranchAnchor,MovieAnchor } from '../component/example'

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


const reservation = () => {

    const [content, setContent] = useState(-1)
    const [region, setRegion] =useState(0)
    const [choose_region,setChooseRegion]=useState(0)
    const [choose_branch,setChooseBranch]=useState(0)
    const [choose_movie,setChooseMovie]=useState(0)
    


    
    
    const seoul = (
        
        <div class="scroll">
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={0} choose_branch={choose_branch}>가산디지털</BranchOption>
                    {/* <p class={toggle ? "pink":"store"} onClick={() => setToggle(!toggle)} >가산디지털</p> */}
                    <BranchOption onClick={setChooseBranch} number={1} choose_branch={choose_branch}>가양</BranchOption>
                </div>
                <div class="ex">
                <BranchOption onClick={setChooseBranch} number={2} choose_branch={choose_branch}>강동</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={3} choose_branch={choose_branch}>건대입구</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={4} choose_branch={choose_branch}>김포공항</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={5} choose_branch={choose_branch}>노원</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={6} choose_branch={choose_branch}>녹산</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={7} choose_branch={choose_branch}>브로드웨이(신사)</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={8} choose_branch={choose_branch}>서울대입구</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={9} choose_branch={choose_branch}>수락산</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={10} choose_branch={choose_branch}>수유</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={11} choose_branch={choose_branch}>신도림</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={12} choose_branch={choose_branch}>신림</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={13} choose_branch={choose_branch}>에비뉴엘(명동)</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={14} choose_branch={choose_branch}>영등포</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={15} choose_branch={choose_branch}>용산</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={16} choose_branch={choose_branch}>월드타워</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={17} choose_branch={choose_branch}>은평(롯데몰)</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={18} choose_branch={choose_branch}>장안</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={19} choose_branch={choose_branch}>청량리</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={20} choose_branch={choose_branch}>합정</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={21} choose_branch={choose_branch}>홍대입구</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={22} choose_branch={choose_branch}>황학</BranchOption>
                </div>
            </div>
    )

    const gyeonggi = (
        <div class="scroll">
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={23} choose_branch={choose_branch}>검단</BranchOption>
                <BranchOption onClick={setChooseBranch} number={24} choose_branch={choose_branch}>광교아울렛</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={25} choose_branch={choose_branch}>광주터미널</BranchOption> 
                <BranchOption onClick={setChooseBranch} number={26} choose_branch={choose_branch}>구리아울렛</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={27} choose_branch={choose_branch}>병점</BranchOption>
                <BranchOption onClick={setChooseBranch} number={28} choose_branch={choose_branch}>부천(신중동역)</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={29} choose_branch={choose_branch}>부평역사</BranchOption>
                <BranchOption onClick={setChooseBranch} number={30} choose_branch={choose_branch}>산본피트인</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={31} choose_branch={choose_branch}>성남중앙(신흥역)</BranchOption>
                <BranchOption onClick={setChooseBranch} number={32} choose_branch={choose_branch}>센트럴락</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={33} choose_branch={choose_branch}>수지</BranchOption>
                <BranchOption onClick={setChooseBranch} number={34} choose_branch={choose_branch}>시화</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={35} choose_branch={choose_branch}>안성</BranchOption>
                <BranchOption onClick={setChooseBranch} number={36} choose_branch={choose_branch}>안양(안양역)</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={37} choose_branch={choose_branch}>안양일번가</BranchOption>
                <BranchOption onClick={setChooseBranch} number={38} choose_branch={choose_branch}>양주고읍</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={39} choose_branch={choose_branch}>용인기흥</BranchOption>
                <BranchOption onClick={setChooseBranch} number={40} choose_branch={choose_branch}>용인역북</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={41} choose_branch={choose_branch}>인덕원</BranchOption>
                <BranchOption onClick={setChooseBranch} number={42} choose_branch={choose_branch}>인천아시아드</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={43} choose_branch={choose_branch}>진접</BranchOption>
                <BranchOption onClick={setChooseBranch} number={44} choose_branch={choose_branch}>파주아울렛</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={45} choose_branch={choose_branch}>파주운정</BranchOption>
                <BranchOption onClick={setChooseBranch} number={46} choose_branch={choose_branch}>평촌(범계역)</BranchOption>
            </div>
        </div>
    )
    

    const daejeon = (
        <div class="scroll">
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={47} choose_branch={choose_branch}>대전(백화점)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={48} choose_branch={choose_branch}>대전둔산(월평동)</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={49} choose_branch={choose_branch}>대전센트럴</BranchOption> 
                    <BranchOption onClick={setChooseBranch} number={50} choose_branch={choose_branch}>서산</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={51} choose_branch={choose_branch}>서청주(아울렛)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={52} choose_branch={choose_branch}>아산터미널</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={53} choose_branch={choose_branch}>청주(성안길)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={54} choose_branch={choose_branch}>청주용암</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={55} choose_branch={choose_branch}>충주</BranchOption>
                </div>     
        </div>        

    )

    const gwangju = (
        <div class="scroll">
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={56} choose_branch={choose_branch}>광주(백화점)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={57} choose_branch={choose_branch}>광주광산</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={58} choose_branch={choose_branch}>군산나운</BranchOption> 
                    <BranchOption onClick={setChooseBranch} number={59} choose_branch={choose_branch}>군산몰</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={60} choose_branch={choose_branch}>수완(아울렛)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={61} choose_branch={choose_branch}>익산모현</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={62} choose_branch={choose_branch}>전주(백화점)</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={63} choose_branch={choose_branch}>전주평화</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={64} choose_branch={choose_branch}>충장로</BranchOption>
                </div>     
        </div>        
    )

    const daegu = (
        <div class="scroll">
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={65} choose_branch={choose_branch}>경산</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={66} choose_branch={choose_branch}>경주</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={67} choose_branch={choose_branch}>구미 프라임 1번가</BranchOption> 
                    <BranchOption onClick={setChooseBranch} number={68} choose_branch={choose_branch}>구미공단</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={69} choose_branch={choose_branch}>대구광장</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={70} choose_branch={choose_branch}>대구율하</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={71} choose_branch={choose_branch}>대구현풍</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={72} choose_branch={choose_branch}>동성로</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={73} choose_branch={choose_branch}>상인</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={74} choose_branch={choose_branch}>성서</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={75} choose_branch={choose_branch}>영주</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={76} choose_branch={choose_branch}>포항</BranchOption>
                </div>    
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={77} choose_branch={choose_branch}>프리미엄구미센트럴</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={78} choose_branch={choose_branch}>프리미엄만경</BranchOption>
                </div>
                <div class="ex">
                    <BranchOption onClick={setChooseBranch} number={80} choose_branch={choose_branch}>프리미엄안동</BranchOption>
                    <BranchOption onClick={setChooseBranch} number={81} choose_branch={choose_branch}>프리미엄칠곡</BranchOption>
                </div>
        </div>
    )

    const busan = (
        <div class="scroll">
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={82} choose_branch={choose_branch}>광복</BranchOption>
                <BranchOption onClick={setChooseBranch} number={83} choose_branch={choose_branch}>김해부원</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={84} choose_branch={choose_branch}>김해아울렛(장유)</BranchOption> 
                <BranchOption onClick={setChooseBranch} number={85} choose_branch={choose_branch}>대영</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={86} choose_branch={choose_branch}>동래</BranchOption>
                <BranchOption onClick={setChooseBranch} number={87} choose_branch={choose_branch}>동부산아울렛</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={88} choose_branch={choose_branch}>마산터미널</BranchOption>
                <BranchOption onClick={setChooseBranch} number={89} choose_branch={choose_branch}>부산본점</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={90} choose_branch={choose_branch}>사상</BranchOption>
                <BranchOption onClick={setChooseBranch} number={91} choose_branch={choose_branch}>서면</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={92} choose_branch={choose_branch}>센텀시티</BranchOption>
                <BranchOption onClick={setChooseBranch} number={93} choose_branch={choose_branch}>엠비씨네</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={94} choose_branch={choose_branch}>오투(부산대)</BranchOption>
                <BranchOption onClick={setChooseBranch} number={95} choose_branch={choose_branch}>울산(백화점)</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={96} choose_branch={choose_branch}>울산성남</BranchOption>
                <BranchOption onClick={setChooseBranch} number={97} choose_branch={choose_branch}>진주혁신</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={98} choose_branch={choose_branch}>잔해</BranchOption>
                <BranchOption onClick={setChooseBranch} number={99} choose_branch={choose_branch}>창원</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={100} choose_branch={choose_branch}>통영</BranchOption>
                <BranchOption onClick={setChooseBranch} number={101} choose_branch={choose_branch}>프리미엄경남대</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={102} choose_branch={choose_branch}>프리미엄진주</BranchOption>
                <BranchOption onClick={setChooseBranch} number={103} choose_branch={choose_branch}>프리미엄해운대</BranchOption>
            </div>
        </div>
    )

    const gangwon = (
        <div class="scroll">
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={104} choose_branch={choose_branch}>남원주</BranchOption>
                <BranchOption onClick={setChooseBranch} number={105} choose_branch={choose_branch}>동해</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={106} choose_branch={choose_branch}>원주무실</BranchOption> 
            </div>                                    
        </div>
    )

    const jeju = (
        <div class="scroll">
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={107} choose_branch={choose_branch}>서귀포</BranchOption>
                <BranchOption onClick={setChooseBranch} number={108} choose_branch={choose_branch}>제주삼화지구</BranchOption>
            </div>
            <div class="ex">
                <BranchOption onClick={setChooseBranch} number={109} choose_branch={choose_branch}>제주아라</BranchOption> 
            </div>                                    
        </div>
    )

    const movies=(
        <div class="scroll">
                <MovieOption onClick={setChooseMovie} number={0} choose_movie={choose_movie}>블랙머니</MovieOption>
                <MovieOption onClick={setChooseMovie} number={1} choose_movie={choose_movie}>블랙머니</MovieOption>
                <MovieOption onClick={setChooseMovie} number={2} choose_movie={choose_movie}>겨울왕국(자막)</MovieOption>
                <MovieOption onClick={setChooseMovie} number={3} choose_movie={choose_movie}>겨울왕국(더빙)</MovieOption>
                <MovieOption onClick={setChooseMovie} number={4} choose_movie={choose_movie}>조커(자막)</MovieOption>
                <MovieOption onClick={setChooseMovie} number={5} choose_movie={choose_movie}>조커(더빙)</MovieOption>
                <MovieOption onClick={setChooseMovie} number={6} choose_movie={choose_movie}>82년생 김지영</MovieOption>
                <MovieOption onClick={setChooseMovie} number={7} choose_movie={choose_movie}>어벤져스</MovieOption>
                <MovieOption onClick={setChooseMovie} number={8} choose_movie={choose_movie}>바보몽총이</MovieOption>
                <MovieOption onClick={setChooseMovie} number={9} choose_movie={choose_movie}>왤케힘드니</MovieOption>
                <MovieOption onClick={setChooseMovie} number={10} choose_movie={choose_movie}>빨리하고</MovieOption>
                <MovieOption onClick={setChooseMovie} number={11} choose_movie={choose_movie}>끝내야지</MovieOption>
                <MovieOption onClick={setChooseMovie} number={12} choose_movie={choose_movie}>메롱메롱</MovieOption>
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
                        <DateOption onClick={setContent} number={0} content={content}>11/28</DateOption>
                        <DateOption onClick={setContent} number={1} content={content}>11/29</DateOption>
                        <DateOption onClick={setContent} number={2} content={content}>11/30</DateOption>
                        <DateOption onClick={setContent} number={3} content={content}>12/1</DateOption>
                        <DateOption onClick={setContent} number={4} content={content}>12/2</DateOption>
                        <DateOption onClick={setContent} number={5} content={content}>12/3</DateOption>
                        <DateOption onClick={setContent} number={6} content={content}>12/4</DateOption>
                        <DateOption onClick={setContent} number={7} content={content}>12/5</DateOption>
                        <DateOption onClick={setContent} number={8} content={content}>12/6</DateOption>
                        <DateOption onClick={setContent} number={9} content={content}>12/7</DateOption>
                        <DateOption onClick={setContent} number={10} content={content}>12/8</DateOption>
                        <DateOption onClick={setContent} number={11} content={content}>12/9</DateOption>
                        <DateOption onClick={setContent} number={12} content={content}>12/10</DateOption>
                        <DateOption onClick={setContent} number={13} content={content}>12/11</DateOption>
                        <DateOption onClick={setContent} number={14} content={content}>12/12</DateOption>
                        <DateOption onClick={setContent} number={15} content={content}>12/13</DateOption>
                        <DateOption onClick={setContent} number={16} content={content}>12/14</DateOption>
                        <DateOption onClick={setContent} number={17} content={content}>12/15</DateOption>
                        <DateOption onClick={setContent} number={18} content={content}>12/16</DateOption>
                        <DateOption onClick={setContent} number={19} content={content}>12/17</DateOption>
                        <DateOption onClick={setContent} number={20} content={content}>12/18</DateOption>
                        <DateOption onClick={setContent} number={21} content={content}>12/19</DateOption>

                    </div>
                </div>
                <hr class="hr" />
                
                <br/>
                <div class="make_choice"> 
                    <div class="choice">
                        <RegionOption onClick={setChooseRegion} number={0} choose_region={choose_region}> <div onClick={()=> setRegion(0)}>서울</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={1} choose_region={choose_region}> <div onClick={()=> setRegion(1)}>경기/인천</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={2} choose_region={choose_region}> <div onClick={()=> setRegion(2)}>충청/대전</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={3} choose_region={choose_region}> <div onClick={()=> setRegion(3)}>전라/광주</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={4} choose_region={choose_region}> <div onClick={()=> setRegion(4)}>경북/대구</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={5} choose_region={choose_region}> <div onClick={()=> setRegion(5)}>경남/부산/울산</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={6} choose_region={choose_region}> <div onClick={()=> setRegion(6)}>강원</div></RegionOption>
                        <RegionOption onClick={setChooseRegion} number={7} choose_region={choose_region}> <div onClick={()=> setRegion(7)}>제주</div></RegionOption>
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