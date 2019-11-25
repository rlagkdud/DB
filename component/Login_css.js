const Login_css=()=>{
    return(
        <style global jsx>{`
        .body_login{
        margin:0;
        }

        .login-card {
          padding: 40px;
          width: 274px;
          background-color: #fff;
          margin: 0 auto 10px;
          border-radius: 2px;
          overflow: hidden;
        }

        .login-card h1 {
          font-weight: 100;
          text-align: center;
          font-size: 2.3em;
        }
        .username{
          margin: 0px auto;
          padding: 50px 0px 0px 0px;
        }

        .username > input {
          display: block;
          font-size: 16px;
          margin: 0px auto;
          margin-bottom: 10px;
          background: #fff;
          width: 270px;
          height: 44px;
          border: 1px solid #d9d9d9;
          border-top: 1px solid #c0c0c0;
          border-width: 0px 0px 3px 0px;
          border-style: solid;
          box-sizing: border-box;
          padding: 0 8px;
          box-shadow: 0 2px 5px #0000007c inset;
        }

        .login-card input[type=submit] {
          width: 100%;
          display: block;
          margin-bottom: 10px;
          position: relative;
        }

        .pwd{
          margin: 0px auto;
          padding: 20px 0px 0px 0px;
        }
        .pwd > input {
          display: block;
          font-size: 16px;
          margin: 0px auto;
          margin-bottom: 10px;
          background: #fff;
          width: 270px;
          height: 44px;
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
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          height: 32px;
          padding: 0 8px;
          background-color: #F7819F;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
        }
        `}</style>
    )
}
export default Login_css