const Header_css = () =>{
    return(
        <style global jsx>{`
        
        body{
            margin:0;
            background: #F4C2C2;
        }
        .main{
            height:280px;
            /* margin-bottom:  */
        }
        .main .main_image{
            background-image:url("../pinkmoon.jpg");
            background-size: cover;
            background-position: top;
            height: 280px; 
            text-align: center;   
        }
        .snsIcons{
            /* position: relative; */
            float:right;
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
            /*padding:12px;*/
            margin:60px -60px 50px 0;
        }
        .main .logo h2{
            margin: 0;
            color: white;
            font-size: 20px;
        }
        .main .logo h1 {
            margin-top: 0;
            color:white;
        }
        .main .logo h4 {
            color:white;
        
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
            margin-left: 7px;
            margin-right: 7px;
        }
        .menubar a{
            display:inline-block;
            text-decoration-line: none;
            text-align: center;
            font-size:15px;
            color:white;
        }
        .menubar a:hover{
            color:#e3248d;
        }






        `}</style>
    )
}

export default Header_css