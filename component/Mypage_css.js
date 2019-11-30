const Mypage_css = ()=>{
    return(
    <style global jsx>{`
    .upperMypage{
    height:230px;
    margin:0 250px;
    }
    /*--------------------------------------*/
    .upperMypage p{
        padding-left:20px;
        display: inline-block;
    }
    .upperMypage h5{
        display: inline-block;
    }
    .nameMypage{
        position: relative;
        width: 100%;
        display: inline-block;
        text-align: left;
        border-bottom: 1px solid black;
    }
    .nameMypage p b{
        display: inline-block;
    }
    .myRank{
        display: inline-block;
        float:right;
        height: 50px;
        width: 50px;
        margin:10px 5px;
    }
    .preperGenre{
        border-bottom: 1px solid black;
    }
    .preperGenre button{
        border-style: none;
        background: white;
        float: right;
        margin:30px 5px 0 0 ;
    }
    .downMypageCol {
        background:#EFD5D5;
    }
    .downMypage{
        height: 300px;
        text-align: left;
        margin:0 250px;
    }
    .downMypage p{
        display: inline-block;
        padding:5px 0;
    }
    .sawMovie{
        text-align: center;
    }
    .sawMovie .sawPoster{
        width:150px;
        height: 200px;
        margin:0 10px;
    }
    .whiteCol{
        background: white;
        height:40px;
    }
    
    
    `}</style>

    )
}
export default Mypage_css