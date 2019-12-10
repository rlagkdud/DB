const Seat_reserve_css = () => {
    return(
        <style global jsx>{`
        body{
        margin:0;
        background: #F4C2C2;
        
        }
        .reserve_checkContainer{
        background:white;
        height:620px;
        width:800px;
        display: block;
        margin:0 auto;
        padding:0;
        }
        .reserve{
            width:500px;
            height:470px;
            margin:0 20px 0 40px;
            padding:0;
        }
        .reserve h2{
            padding-left:20px;
            font-size:20px;
        }

        .reserve_checkContainer h1{
            color:black;
            margin:0;
            padding:15px;
        }
        .line{
            width:720px;
            border-bottom:0.5px;
            text-align: left;
            border-bottom: none;
            margin-top:0;
            color:black;
        }
        .reserve_checkContainer p{
            padding-left: 20px;
            margin-top:0;
        }
        .movie_playtime{
            position: relative;
           margin-left:20px; 
        }
        .movie_playtime Button{
            height: 25px;
            width:80px;
            background-color: #f83b71;
            text-align: center;
            border-style: none;
        }
        .movie_memnum{
            padding:20px 0 20px 20px;
            width:470px;
            height:20px;
            display:inline-block;
        }
        .movie_memnum h3{
            display:inline;
        }
        .movie_memnum p{
            display:inline;
        }
        .movie_memnum select{
            display:inline;
        }
        .reserve_check{
            display: flex;
        }
        .check{
            /* border-style:solid; */
            /* border-left: 1px;
            border-left: black; */
            border-left: 0.5px solid rgb(109, 103, 103);
            height:480px;
            width:200px;
            margin:5px;
        }
        .check h3{
            padding:4px;
        }
        .seat_map{
            width: 500px;
            background: rgb(139, 147, 153);
            height:330px;
        }
        .screen{
            margin-top:20px;
            height:20px;
            width: 100%;
            background:rgb(82, 81, 81);
            display: inline-block;
            text-align: center;
        }
        .screen p i{
            margin:0;
            font-size: 10px;
        } 
        .screen p {
            padding:0;
        } 
        .check h3{
            margin-top:0;
        }
        .seatA{
            margin: 50px 0 0 0px;
            width:100%;
            text-align:center;
            display: inline-block;
        }
        .seatA p{
            padding:0;
            width:20px;
            height:20px;
            display: inline-block;
            margin: 0 30px 0 0;
            vertical-align: middle;
        }
        .seatB_G{
            margin:3px 0px;
            width:100%;
            text-align:center;
            display: inline-block;
        }
        .seatB_G p{
            padding:0;
            width:20px;
            height:20px;
            display: inline-block;
            margin: 0 30px 0 0;
            vertical-align: middle;
        }
        input[type='checkbox']{
            margin:0;
            width: 20px !important;
            height: 20px !important;
            -webkit-appearance: none;
            -moz-appearance: none;
            -o-appearance: none;
            outline: none;
            box-shadow: none;
            vertical-align: middle;
            background: url("seat.png") no-repeat;
            margin: 3px 3px 3px 4px;
        }
        .seat_map input[value='3'], input[value='12']{
            margin: 3px 15px 3px 4px;
        }

        input[type='checkbox']:checked {
            -webkit-appearance: none;
            -moz-appearance: none;
            -o-appearance: none;
            box-shadow: none;
            background: url("seat_checked.png") no-repeat;

        }
        .check_poster{
            float:left;
            height:100px;
            width:70px;
            margin:0 20px;
        }
        /* .check_name{
        } */
        .see_info{
            width: 170px;
            padding-top:40px;
            padding-left: 20px;
            text-align: left;
            display: inline-block;
        }
        .see_info p{
            display: inline-block;
            font-size:15px; 
            padding-left:0;
            text-decoration-style: solid;
        }
        .see_info h5{
            display: inline-block;
            padding-left:10px;
            padding-right:10px;
            margin:0;
        }
        .see_price{
            width: 170px;
            padding-top:10px;
            padding-left: 20px;
            text-align: left;
            display: inline-block;
        }
        .see_price h2{
            display: inline-block;
            font-size:15px; 
            padding-left:0;
        }
        .see_price h5{
            display: inline-block;
            padding-left:10px;
            padding-right:10px;
            margin:0;
        }
        .see_price p{
            display: inline-block;
            padding-left:10px;
            padding-right:10px;
            margin:0;
        }
        .buy_btn{
            display:inline-block;
            width:200px;
            padding-top:5px;
            text-align: right;
        }
        .buy_btn .btn1{
            background-color:white;
            border:1px solid gray;
            text-align: center; 
            height: 30px;
            width: 60px;
        }
        .buy_btn .btn2{
            background-color: #fd5987;
            border-style:none;
            margin-top: 100px;
            text-align: center; 
            height: 30px;
            width: 60px;
        }
        .empty{
            background: #f07598;
            height: 70px;
            width:100%;
            color:#F4C2C2;

        }
        .copyright a{
            text-decoration:none;
            color: #F4C2C2;
        }
        .img_checkBox{
            padding-top:10px;
            text-align: right;
            /* vertical-align: auto; */
        }
        .img_checkBox img{
            padding:0 5px;
            vertical-align: middle;
        }
        .img_checkBox p{
            display: inline;
            padding:0;
            vertical-align: middle;
        }
        .totalprice{
            margin: 10px 0 10px 120px;
        }
        .refresh_img{
            margin-left:40px;
            width:20px;
            height:20px;
        }
        `}</style>
    )
}
export default Seat_reserve_css
