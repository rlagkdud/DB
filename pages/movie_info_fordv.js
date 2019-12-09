import Header from './Header'
import Movie_info_fordv_css from '../component/movie_info_fordv_css'
import Head from 'next/head'

const movie_info_fordv=()=>{
    return(
        <div>
            <Head>
                <title>
                    TIC-영화상세_포드 V 페라리
                </title>
            </Head>
            <Header />
            <Movie_info_fordv_css />
            <div class="body_movie_info">
                <div class="movie_info">
                    <div class="info">
                        <h1>영화 상세</h1>
                        <img class="movie_img" src="/fordv.jpeg" alt=""/>
                        <div class="title">
                            <p class="movie_name">포드 V 페라리</p>
                            <p class="ticketing_rate">예매율 : 14.6% (실관람객 : 457,701명)</p>
                            <img src="/bar.png" alt=""/>
                            <p class="info_director">감독 : 제임스 맨골드</p>
                            <p class="info_actor">배우 : 맷 데이먼(캐롤 셸비), 크리스찬 베일(켄 마일스)</p>
                            <p class="info_genre">장르 : 액션, 드라마 / 기본 : 152분, 미국 </p>
                            <p class="release_date">개봉 : 2019.12.04  </p>
                            <img src="/bar.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div class="summary_container">
                    <div class="summary">
                        <h1>줄거리</h1>
                        <div class="summary_content">
                            <p> 자존심을 건 대결의 시작!</p>
                            <p> 1960년대, 매출 감소에 빠진 ‘포드’는 판매 활로를 찾기 위해</p>
                            <p> 스포츠카 레이스를 장악한 절대적 1위 ‘페라리’와의 인수 합병을 추진한다.  </p>
                            <p> 막대한 자금력에도 불구, 계약에 실패하고 엔초 페라리로부터 모욕까지 당한 헨리 포드 2세는  </p>

                            <p> 르망 24시간 레이스에서 페라리를 박살 낼 차를 만들 것을 지시한다.  </p>
                            <p> 불가능을 즐기는 두 남자를 주목하라!  </p>
                        </div>
                    </div>
                </div>

                <div class="photo_container">
                    <div class="photo">
                        <h1>스틸 컷</h1>
                        <ul class="slides">
                            <input type="radio" name="radio-btn" id="img-1" checked />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/fordv1.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-6" class="prev">&#x2039;</label>
                                    <label for="img-2" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-2" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/fordv2.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-1" class="prev">&#x2039;</label>
                                    <label for="img-3" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-3" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/fordv3.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-2" class="prev">&#x2039;</label>
                                    <label for="img-4" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-4" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/fordv4.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-3" class="prev">&#x2039;</label>
                                    <label for="img-5" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-5" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/fordv5.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-4" class="prev">&#x2039;</label>
                                    <label for="img-6" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-6" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/fordv6.jpg" />
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

                <div class="comments_container">
                    <div class="comments">
                    <h1>한줄평</h1>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default movie_info_fordv;