const Login_css=()=>{
    return(
        <style global jsx>{`
        .body_login{
        margin:0;
        background-color: #F4C2C2;
        }

        .login-card {
          padding: 40px;
          width: 274px;
          background-color: #fff;
          margin: 0 auto 10px;
          border-radius: 2px;
          overflow: hidden;
          text-align:center;
        }
        
        .login-card h1 {
          font-weight: 100;
          text-align: center;
          font-size: 2.3em;
        }
        .username{
          margin: 0px auto;
          /* padding: 50px 0px 0px 0px; */
        }
        
        .username > input {
          display: block;
          font-size: 16px;
          margin: 0px auto;
          margin-bottom: 10px;
          background: #fff;
          width: 270px;
          height: 38px;
          border: 1px solid #d9d9d9;
          border-top: 1px solid #c0c0c0;
          border-width: 0px 0px 3px 0px;
          border-style: solid;
          box-sizing: border-box;
          padding: 0 8px;
          box-shadow: 0 2px 5px #0000007c inset;
        }
        
        .login-card input[type=submit] {
          width: 50%;
          display: block;
          margin-bottom: 10px;
          position: relative;
          float: left;
        }
        
        .pwd{
          margin: 0px auto;
          /* padding: 20px 0px 0px 0px; */
        }
        .pwd > input {
          display: block;
          font-size: 16px;
          margin: 0px auto;
          margin-bottom: 10px;
          background: #fff;
          width: 270px;
          height: 38px;
          border: 1px solid #d9d9d9;
          border-top: 1px solid #c0c0c0;
          border-width: 0px 0px 3px 0px;
          border-style: solid;
          box-sizing: border-box;
          padding: 0 8px;
          box-shadow: 0 2px 5px #0000007c inset;
        }
        
        .pwd > input:focus{
            outline: -webkit-focus-ring-color auto 2px;
            outline-color: -webkit-focus-ring-color;
            outline-style: auto;
            outline-width: 2px;
        }
        
        .login {
          float: left;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          height: 28px;
          width: 136px;
          padding: 0 8px;
          background-color: #343B40;
          color: #E6BEBE;
        }
        .sign_in {
          float: left;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          height: 28px;
          width: 136px;
          padding: 0 8px;
          background-color: #343B40;
          color: #E6BEBE;
        }
        
        .membership_button {
          text-align: center;
          margin-top: 15px;
          font-size: 14px;
          font-weight: 700;
          height: 28px;
          padding: 0 8px;
          background-color: #F2F2F2;
          color: #343B40;
          width: 100%;
          display: block;
          margin-bottom: 10px;
          position: relative;
          float: left;
        }
        .non_member {
          background-color: #F2F2F2;
          width: 100%;
          height: 28px;
          font-size: 14px;
          font-weight: 700;
          color: #343B40;
          margin-top: 10px;
        }
        
        
        .back{
          background-color:   #F4C2C2;
          height: 500px;
          text-align:center;
        }
        .whiteback {
          margin: 0 auto 10px;
          background-color: white;
          width: 700px;
          height:100%;
        }

        `}</style>
    )
}
export default Login_css