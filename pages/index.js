import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Index_css from "../component/Index_css";
import Link from "next/link";
import Head from "next/head";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import axios from 'axios';

const index = ({ name }) => {

    const [slide, setSlide] = useState(true);
    const [userName, setName] = useState(''); 

    function logout() {

        setName(localStorage.getItem('data'));
        console.log(userName);

    }

    return (
        <div>
            <Head>
                <title>TIC</title>
            </Head>
            <Header />
            <Index_css />
            <div class="body_index">
                <button class="sign_in" type="button" onClick={logout}>
                    {" "}
                    Sign In{" "}
                </button>
                <ul class="slides">
                    <input
                        type="radio"
                        name="radio-btn"
                        id="img-1"
                        checked={slide}
                        onClick={() => setSlide(true)}
                    />
                    <li class="slide-container">
                        <div class="slide">
                            <img src="/slide1.jpg" />
                        </div>
                        <div class="nav">
                            <label
                                for="img-6"
                                class="prev"
                                onClick={() => setSlide(false)}
                            >
                                &#x2039;
                            </label>
                            <label
                                for="img-2"
                                class="next"
                                onClick={() => setSlide(false)}
                            >
                                &#x203a;
                            </label>
                        </div>
                    </li>

                    <input
                        type="radio"
                        name="radio-btn"
                        id="img-2"
                        onClick={() => setSlide(false)}
                    />
                    <li class="slide-container">
                        <div class="slide">
                            <img src="/slide2.jpg" />
                        </div>
                        <div class="nav">
                            <label
                                for="img-1"
                                class="prev"
                                onClick={() => setSlide(true)}
                            >
                                &#x2039;
                            </label>
                            <label for="img-3" class="next">
                                &#x203a;
                            </label>
                        </div>
                    </li>

                    <input
                        type="radio"
                        name="radio-btn"
                        id="img-3"
                        onClick={() => setSlide(false)}
                    />
                    <li class="slide-container">
                        <div class="slide">
                            <img src="/slide3.jpg" />
                        </div>
                        <div class="nav">
                            <label for="img-2" class="prev">
                                &#x2039;
                            </label>
                            <label for="img-4" class="next">
                                &#x203a;
                            </label>
                        </div>
                    </li>

                    <input
                        type="radio"
                        name="radio-btn"
                        id="img-4"
                        onClick={() => setSlide(false)}
                    />
                    <li class="slide-container">
                        <div class="slide">
                            <img src="/slide4.jpg" />
                        </div>
                        <div class="nav">
                            <label for="img-3" class="prev">
                                &#x2039;
                            </label>
                            <label for="img-5" class="next">
                                &#x203a;
                            </label>
                        </div>
                    </li>

                    <input
                        type="radio"
                        name="radio-btn"
                        id="img-5"
                        onClick={() => setSlide(false)}
                    />
                    <li class="slide-container">
                        <div class="slide">
                            <img src="/slide5.jpg" />
                        </div>
                        <div class="nav">
                            <label for="img-4" class="prev">
                                &#x2039;
                            </label>
                            <label for="img-6" class="next">
                                &#x203a;
                            </label>
                        </div>
                    </li>

                    <input
                        type="radio"
                        name="radio-btn"
                        id="img-6"
                        onClick={() => setSlide(false)}
                    />
                    <li class="slide-container">
                        <div class="slide">
                            <img src="/slide6.jpg" />
                        </div>
                        <div class="nav">
                            <label for="img-5" class="prev">
                                &#x2039;
                            </label>
                            <label
                                for="img-1"
                                class="next"
                                onClick={() => setSlide(true)}
                            >
                                &#x203a;
                            </label>
                        </div>
                    </li>
                    <li class="nav-dots">
                        <label
                            for="img-1"
                            class="nav-dot"
                            id="img-dot-1"
                        ></label>
                        <label
                            for="img-2"
                            class="nav-dot"
                            id="img-dot-2"
                        ></label>
                        <label
                            for="img-3"
                            class="nav-dot"
                            id="img-dot-3"
                        ></label>
                        <label
                            for="img-4"
                            class="nav-dot"
                            id="img-dot-4"
                        ></label>
                        <label
                            for="img-5"
                            class="nav-dot"
                            id="img-dot-5"
                        ></label>
                        <label
                            for="img-6"
                            class="nav-dot"
                            id="img-dot-6"
                        ></label>
                    </li>
                </ul>

                <div class="movie_list">
                    <div class="movie1">
                        <img src="/blackmoney.jpeg" alt="" />
                    </div>
                    <div class="movie2">
                        <img src="/blackmoney.jpeg" alt="" />
                    </div>
                    <div class="movie3">
                        <img src="/blackmoney.jpeg" alt="" />
                    </div>
                    <div class="movie4">
                        <img src="/blackmoney.jpeg" alt="" />
                    </div>
                    <div class="movie5">
                        <img src="/blackmoney.jpeg" alt="" />
                    </div>
                </div>

                <div class="genre">
                    <div class="genre_title">
                        <h1>GENRE</h1>
                    </div>
                    <div class="genre_wrap">
                        <div class="genre_img">
                        <figure class="genre_snip">
                          <img src="/genre1.jpeg" height="350px" width="350px" alt="sample57" />
                          <figcaption>
                            <h3>요곳에 마우스를</h3>
                            <h5>올리면 말이야</h5>
                          </figcaption>
                          <a href="#"></a>
                        </figure>
                        <figure class="genre_snip"><img src="/genre2.jpeg" alt="sample59" />
                          <figcaption>
                            <h3>장르가 나타난다</h3>
                            <h5>이말이야</h5>
                          </figcaption>
                          <a href="#"></a>
                        </figure> <br/>
                        <figure class="genre_snip"><img src="/genre3.jpeg" alt="sample60" />
                          <figcaption>
                            <h3>어떤 장르 넣을까</h3>
                            <h5>히히히히히</h5>
                          </figcaption>
                          <a href="#"></a>
                        </figure>
                        <figure class="genre_snip"><img src="/genre4.jpeg" alt="sample60" />
                          <figcaption>
                            <h3>근데 이것도 장르추천</h3>
                            <h5>불러와야 하는건데 엉엉 할일이 생각나버렸다,,,</h5>
                          </figcaption>
                          <a href="#"></a>
                        </figure><br/>
                        </div>
                        <Link href="\Mypage"><button type="button"> MORE </button></Link>
                    </div>
                </div>
                <div class="banner">
                    <img src="/frozen.jpg" alt="" />
                </div>
                <div class="membership"></div>
                <div class="footer"></div>
            </div>
        </div>
    );
};
// index.getInitialProps = async () => {
//     const res = await axios.get("/index", 
//     {
//         params: { name: "fuckyou!!!" }        
//     });
    
//     const data = res.query;

//     return { name: data };
// };
export default index;

