import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Header_css from "../component/Header_css";
import axios from "axios";

const Header = () => {

    const [log_stat, get_stat] = useState(false);
    const [usrData, getData] = useState("");
    const router = useRouter();

    useEffect(() => {
        const getData_= () =>{
            console.log(router.pathname);
            getData(JSON.parse(localStorage.getItem('data')));
            console.log(usrData);
            if(usrData !== ""){
                get_stat(true);
            }
            else{
                get_stat(false);
            }
        };
        getData_();
        const handleRouteChange = url => {
            console.log('App is changing to: ', url)
        }
        
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }

    }, [])
    
    function getMethod (e) {
        const val = e.target.name;
        router.push({ pathname: val });
    }
    
    return (
        <div class="body">
            <div class="main">
                <Header_css />
                <div class="main_image">
                    <div class="snsIcons">
                        <a href="" target="_blank">
                            <img
                                class="icon"
                                src= "/facebook.png"
                                height="15px"
                            />
                        </a>
                        <a href="" target="_blank">
                            <img
                                class="icon"
                                src="/instagram.png"
                                height="15px"
                            />
                        </a>
                        <a href="" target="_blank">
                            <img
                                class="icon"
                                src="/twitter.png"
                                height="15px"
                            />
                        </a>
                    </div>
                    <div class="logo">
                        <img class="mainLogo" src="/mainLogo.png" />
                        <div class="thisiscinema">
                            <img
                                src="/this_is_cinema.png"
                                height="50px"
                            />
                        </div>
                    </div>
                    <nav class="menubarNav">
                        <ul class="menubar">
                            <li>
                                <a name = "/index" onClick={getMethod}> 메인</a>
                            </li>
                            <li>
                                <a  name = "/reservation" onClick={getMethod}>영화예매</a>
                            </li>
                            <li>
                                <a name="/Login" onClick={getMethod}>로그인</a>
                            </li>
                            <li>
                                <a name="/Join" onClick={getMethod}>회원가입</a>
                            </li>
                            <li>
                                <a name='/Mypage' onClick={getMethod}> 마이페이지 </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;