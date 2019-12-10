import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Header_css from "../component/Header_css";
import axios from "axios";

const Header = () => {

    const router = useRouter();
    const [userData, getData] = useState(null);
    const [logStat, getStat] = useState(false);
    const [member, getMember] = useState('');
    const [admin, getAdmin] = useState(false);

    useEffect(() => {

            getData(localStorage.getItem('usrID'));
            if(localStorage.getItem('usrID') !== null) {
                getStat(true);
                if(localStorage.getItem('usrID') === 'admin'){
                    getAdmin(true);
                }
            }
            else{
                getStat(false);
                localStorage.clear();
            }
            if(localStorage.getItem('member') !== null) {
                getMember(localStorage.getItem('member'));
            }
        
        const handleRouteChange = url => {
            console.log('App is changing to: ', url)
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    
    },[])
    
    function getMethod (e) {
        const val = e.target.name;
        router.push({ pathname: val });
    }
    
    function getMethodM (e) {
        const val = e.target.name;
        if (!logStat) {
            alert('로그인이 필요한 서비스 입니다');
            router.push('/Login');
        } else if (member === 'no') {
            alert('비회원으로는 이용할 수 없는 서비스 입니다');
        } else {
            router.push({ pathname: val });
        }
    }

    function getMethodR (e) {
        const val = e.target.name;
        if (logStat) {
            router.push({ pathname: val });
        }
        else {
            alert('로그인이 필요한 서비스 입니다');
            router.push('/Login');
        }
    }

    function mLogout(e) {
        const val = e.target.name;
        alert('로그아웃 되었습니다!');
        localStorage.clear();
        router.push({ pathname: '/' });
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
                                <a  name = "/reservation" onClick={getMethodR}>영화예매</a>
                            </li>
                            <li>
                                {logStat ? <a name='/index' onClick={mLogout}>로그아웃</a> : <a name='/Login' onClick={getMethod}>로그인</a>}
                            </li>
                            {logStat ? <></> : <li>
                                <a name="/Join" onClick={getMethod}>회원가입</a>
                            </li> }
                            <li>
                                <a name='/Mypage' onClick={getMethodM}> 마이페이지 </a>
                            </li>
                            <li>
                                {admin ? <Link name='gotoAdmin' href="http://localhost:3000"> 관리자페이지 </Link> :<></>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;