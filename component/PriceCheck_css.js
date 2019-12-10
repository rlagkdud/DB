const PriceCheck_css = ()=>{
    return(
        <style global jsx>{`
        body{            
            margin:0;
            background: #F4C2C2;  
        }
        .pay_checkContainer{
        background:white;
        height:550px;
        width:800px;
        display: block;
        margin:0 auto;
        padding:0;
        }
        .pay_checkContainer h1{
            margin-top:0;
            padding:10px;
        }
        .lastCheck{
            height:200px;
            border-bottom: 1px solid black;
            border-top: 1px solid black;
        }
        .lastCheck .checkPoster{
            display: inline-block;
            width:100px;
            height: 150px;
            margin:30px;
            float: left;
        }
        .checkMovie {
            display: inline-block;
        }
        .checkMovie h3{
            text-align:left;
            display: inline-block;
            margin-bottom:0;
        }
        .checkMovie p{
            text-align:left;
            display: inline-block;
            font-size:15px; 
            padding-left:0;
            margin-bottom:0;
            text-decoration-style: solid;
        }
    
        .checkMovie h5{
            text-align:left;
            display: inline-block;
            padding-left:10px;
            padding-right:10px;
            margin:0;
        }
        .checkPrice{
            padding-left:35px;
            border-left:1px solid black;
            vertical-align: top;
            height:160px;
            width: 320px;
            display: inline-block;
            margin:20px 0 20px 150px;
        }
        .checkPrice h3{
            text-align: left;
        }
        .checkPrice h5{
            font-size: 20px;
            margin-top:20px;
            margin-bottom:0;
            vertical-align: bottom;
            text-align: right;
        }
        .payCheck{
            margin-top :10px;
            padding:2px;
            text-align: center;
            height:40px;
            background: gray;
        }
        .howPayContainer{
            margin-top:20px;
            height:100px;
            text-align: center;
        }
        .howPayContainer input{
            vertical-align: center;
            height: 15px;
            width: 20px;
            margin-right:1px;
            margin-left:40px;
        }
        .check_btn{
            float:right;
            margin-right:20px;
            display:inline-block;
            padding-top:5px;
            text-align: right;
        }
        .check_btn .check_Btn1{
            background-color:white;
            border:1px solid gray;
            text-align: center; 
            height: 30px;
            width: 60px;
        }
        .check_btn .check_Btn2{
            background-color: #fd5987;
            border-style:none;
            text-align: center; 
            height: 30px;
            width: 60px;
        }
    
        .downContainer{
            height: 50px;
            background:rgb(238, 162, 162);
        }
        
        `}</style>
    )
}
export default PriceCheck_css