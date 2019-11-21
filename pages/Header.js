import {useState} from 'react'
import Link from 'next/link'
import Header_css from '../component/Header_css'
const Header=() =>{
    
    return(

        <div class = 'main'>
            <Header_css/>
            <div class = "main_image">
                <div class = 'snsIcons'>
                    <a href='' target='_blank'><img class = 'icon' src='facebook.png' height="15px" /></a>
                    <a href='' target='_blank'><img class = 'icon' src='instagram.png' height="15px" /></a>
                    <a href='' target='_blank'><img class = 'icon' src='twitter.png' height="15px" /></a>
                </div> 
                <div class = "logo">
                    <h1>T I C</h1>
                    <h4>This is Cinema</h4>
                </div>
                <nav class='menubarNav'>
                    <ul class = 'menubar'>
                        <li><a href=''>메인</a></li>
                        <li><a href=''>영화 예매</a></li>
                        <li>
                            <Link href="/Index">
                                <a>예매</a>
                            </Link>
                        </li>
                        <li><a href=''>마이 페이지</a></li>
                        <li><a href='login.html'>로그인</a></li>
                        <li><a href='join.html'>회원가입</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header