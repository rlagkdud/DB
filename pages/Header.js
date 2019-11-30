import {useState} from 'react'
import Link from 'next/link'
import Header_css from '../component/Header_css'
const Header=() =>{
    
    return(
        <div class="body">
            <div class="main">
                <Header_css/>
                <div class="main_image">
                    <div class="snsIcons">
                        <a href='' target='_blank'><img class = 'icon' src='facebook.png' height="15px" /></a>
                        <a href='' target='_blank'><img class = 'icon' src='instagram.png' height="15px" /></a>
                        <a href='' target='_blank'><img class = 'icon' src='twitter.png' height="15px" /></a>
                    </div>
                    <div class="logo">
                            <img class="mainLogo" src="mainLogo.png"/>
                        <div class="thisiscinema">
                            <img src="this_is_cinema.png" height="50px"/>
                        </div>
                    </div>
                    <nav class='menubarNav'>
                        <ul class = 'menubar'>
                            <li><Link href='/index'>메인</Link></li>
                            <li><Link href='/reservation'>영화예매</Link></li>
                            <li><Link href='/Login'>로그인</Link></li>
                            <li><Link href='/Join'>회원가입</Link></li>
                            <li><a href='/Mypage'>마이페이지</a></li>
                        </ul>
                    </nav>
                </div>
            </div>   
        </div>   
    )
}
export default Header
