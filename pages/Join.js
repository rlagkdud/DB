import Join_css from '../component/Join_css'
import Header from './Header'
import Head from 'next/head'
const Join=()=>{
    return(
        <div>
        <Head>
            <title>TIC-회원가입</title>
        </Head>            
            <Header/>
            <Join_css/>
            <div>
                <div class="signin-back">
                    <div class="signin-whiteback">
                        <div class="signin-card">
                            <h1>회원가입</h1>
                            <form action="" method="post">
                                <p class="signin-name"><input type="text" name="user_name" placeholder="이름" required/></p>
                                <p class="signin-username"><input type="text" name="user_id" placeholder="아이디" required/></p>
                                <p class="signin-pwd"><input type="password" name="user_pwd" placeholder="비밀번호" required/></p>
                                <p class="ph"><input type="text" name="user_ph" placeholder="연락처" required/></p>
                                <p class="birth"><input type="text" name="user_birth" placeholder="생년월일(YYMMDD)" required/></p>
                                <img src="bar.png" width="100%" alt=""/>
                                <input class="sign_in" type="submit" value="Sign In"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Join