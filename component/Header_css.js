const Header_css = () =>{
    return(
        <style global jsx>{`
        body{
            margin: 0;
        }
        .main {
          background-image: url(pinkmoon.jpg);
          background-color: white;
          background-size: cover;
          background-position: top;
          height: 350px;
          text-align: center;
        }
        .snsIcons{
          float: right;
          margin-top:10px;
          margin-right: 20px;
        }
        .icon{
          display: inline-block;
          margin:0 2px 0 2px;
        }
        .main .logo{
          display: inline-block;
          line-height: normal;
          text-align: center;
          margin:60px -60px 50px 0;
        }
        .main .logo h1 {
          margin-top: 0;
          font-size: 4em;
          color: #EFD5D5;
        }
        .menubarNav{
        
        }
        .menubar{
          margin:0 0 0 5px;
          padding:0;
          list-style-type:none;
        }
        .menubar li{
          display:inline;
          margin-left: 20px;
          margin-right: 20px;
        }
        .menubar a{
          display:inline-block;
          text-decoration-line: none;
          text-align: center;
          font-size:20px;
          color:white;
        }
        .menubar a:hover{ color:#e3248d; }
        .mainLogo{
          height:110px;
          width:120px;
        }






        `}</style>
    )
}

export default Header_css