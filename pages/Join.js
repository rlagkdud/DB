import Login_css from '../component/Login_css'
import Header from './Header'
const Join=()=>{
    return(
        <div>
            <Header/>
            <Login_css/>
            <div class="sign_in">
                <h1>회원가입</h1>
                    <form class="" action="index.html" method="post">
                      이름: <input type="text" name="username" value=""/><br/>
                      아이디: <input type="text" name="user_id" value=""/><br/>
                      비밀번호: <input type="password" name="user_pwd" value=""/><br/>
                      연락처: <input type="text" name="user_ph" value=""/><br/>
                      생년월일: <input type="text" name="user_birth" value=""/><br/>
                    </form>
            </div>
        </div>
    )
}
export default Join