import Header from './Header'
import Movie_info_knives_css from '../component/movie_info_frozen_css'
import Head from 'next/head'

const movie_info_knives=()=>{
    return(
        <div>
            <Head>
                <title>
                    TIC-영화상세_나이브스 아웃
                </title>
            </Head>
            <Header />
            <Movie_info_knives_css />
            <div class="body_movie_info">
                <div class="movie_info">
                    <div class="info">
                        <h1>영화 상세</h1>
                        <img class="movie_img" src="/knivesOut.jpg" alt=""/>
                        <div class="title">
                            <p class="movie_name">나이브스 아웃</p>
                            <p class="ticketing_rate">예매율 : 10.8% (실관람객 : 237,231명)</p>
                            <img src="/bar.png" alt=""/>
                            <p class="info_director">감독 : 라이언 존슨</p>
                            <p class="info_actor">배우 : 다니엘 크레이그(브누아 블랑), 크리스 에반스(랜섬</p>
                            <p class="info_genre">장르 : 미스터리, 스릴러 / 기본 : 130분, 미국 </p>
                            <p class="release_date">개봉 : 2019.12.04 </p>
                            <img src="/bar.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div class="summary_container">
                    <div class="summary">
                        <h1>줄거리</h1>
                        <div class="summary_content">
                            <p> 베스트셀러 미스터리 작가가 85세 생일에 숨진 채 발견된다. </p>
                            <p>  그의 죽음의 원인을 파헤치기 위해 경찰과 함께 탐정 브누아 블랑이 파견 되는데…</p>
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
                                    <img src="/knvies1.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-6" class="prev">&#x2039;</label>
                                    <label for="img-2" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-2" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/knvies2.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-1" class="prev">&#x2039;</label>
                                    <label for="img-3" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-3" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/knvies3.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-2" class="prev">&#x2039;</label>
                                    <label for="img-4" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-4" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/knvies4.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-3" class="prev">&#x2039;</label>
                                    <label for="img-5" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-5" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/knvies5.jpg" />
                                </div>
                                <div class="nav">
                                    <label for="img-4" class="prev">&#x2039;</label>
                                    <label for="img-6" class="next">&#x203a;</label>
                                </div>
                            </li>

                            <input type="radio" name="radio-btn" id="img-6" />
                            <li class="slide-container">
                                <div class="slide">
                                    <img src="/knvies6.jpg" />
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
export default movie_info_knives;