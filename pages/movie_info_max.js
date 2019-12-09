import Header from './Header'
import Movie_info_max_css from '../component/movie_info_frozen_css'
import Head from 'next/head'

const movie_info_max=()=>{
    return(
        <div>
            <Head>
                <title>
                    TIC-영화상세_라스트 크리스마스
                </title>
            </Head>
            <Header />
            <Movie_info_max_css />
            <div class="body_movie_info">
                <div class="movie_info">
                    <div class="info">
                        <h1>영화 상세</h1>
                        <img class="movie_img" src="/lastchrismas.jpg" alt=""/>
                        <div class="title">
                            <p class="movie_name">라스트 크리스마스</p>
                            <p class="ticketing_rate">예매율 : 10.8% (실관람객 : 0명)</p>
                            <img src="/bar.png" alt=""/>
                            <p class="info_director">감독 : 크리스 벅</p>
                            <p class="info_actor">배우 : 크리스틴 벨, 이디나 멘젤</p>
                            <p class="info_genre">장르 : 애니메이션 / 기본 : 000분, 미정, 미국 </p>
                            <p class="release_date">개봉 : 2019.11.21 </p>
                            <img src="/bar.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div class="summary_container">
                    <div class="summary">
                        <h1>줄거리</h1>
                        <div class="summary_content">
                            <p> 내 마법의 힘은 어디서 왔을까?</p>
                            <p> 나를 부르는 저 목소리는 누구지?</p>
                            <p> 어느 날 부턴가 의문의 목소리가 엘사를 부르고, 평화로운 아렌델 왕국을 위협한다. </p>
                            <p> 트롤은 모든 것은 과거에서 시작되었음을 알려주며 엘사의 힘의 비밀과 진실을 찾아 떠나야한다고 조언한다. </p>

                            <p> 위험에 빠진 아렌델 왕국을 구해야만 하는 엘사와 안나는 숨겨진 과거의 진실을 찾아 </p>
                            <p> 크리스토프, 올라프 그리고 스벤과 함께 위험천만한 놀라운 모험을 떠나게 된다. </p>
                            <p> 자신의 힘을 두려워했던 엘사는 이제 이 모험을 헤쳐나가기에 자신의 힘이 충분하다고 믿어야만 하는데… </p>

                            두려움을 깨고 새로운 운명을 만나다!</div>
                    </div>
                </div>

                <div class="photo_container">
                    <div class="photo">
                        <h1>스틸 컷</h1>
                        <ul class="slides">
                            <input type="radio" name="radio-btn" id="img-1" checked />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/frozen1.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-6" class="prev">&#x2039;</label>
                                    <label for="img-2" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-2" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/frozen2.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-1" class="prev">&#x2039;</label>
                                    <label for="img-3" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-3" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/frozen3.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-2" class="prev">&#x2039;</label>
                                    <label for="img-4" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-4" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/frozen4.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-3" class="prev">&#x2039;</label>
                                    <label for="img-5" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-5" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/frozen5.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-4" class="prev">&#x2039;</label>
                                    <label for="img-6" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-6" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/frozen6.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-5" class="prev">&#x2039;</label>
                                    <label for="img-1" class="next">&#x203a;</label>
                                </div>
                            </li>
                            <li class="nav-dots">
                                <label for="img-1" class="nav-dot" id="img-dot-1"></label>
                                <label for="img-2" class="nav-dot" id="img-dot-2"></label>
                                <label for="img-3" class="nav-dot" id="img-dot-3"></label>
                                <label for="img-4" class="nav-dot" id="img-dot-4"></label>
                                <label for="img-5" class="nav-dot" id="img-dot-5"></label>
                                <label for="img-6" class="nav-dot" id="img-dot-6"></label>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default movie_info_max;