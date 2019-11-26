import Header from './Header'
import Non_member_css from '../component/Non_member_css'

const Non_member=()=>{
    return(
        <div>
            <Header/>
            <Non_member_css/>
            <div class="non-back">
                <div class="non-whiteback">
                    <div class="non_signin-card">
                        <h1>비회원 로그인</h1>
                        <form action="" method="post">
                            <p class="name"><input type="text" name="user_name" placeholder="이름" required/></p>
                            <p class="non-ph"><input type="text" name="user_ph" placeholder="연락처" required/></p>
                            <p class="non-pwd"><input type="password" name="user_pwd" placeholder="비밀번호(4자리)" required/></p>
                            <p class="non-birth"><input type="text" name="user_birth" placeholder="생년월일(YYMMDD)" required/></p>
                            <img src="bar.png" width="100%" alt=""/>
                            <input class="non-sign_in" type="submit" value="Sign In"/>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Non_member