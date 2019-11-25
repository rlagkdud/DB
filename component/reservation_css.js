const Index_css = () => {
    return(
        <style global jsx>{`
        .reserveContainer{
            height: auto;
            overflow:hidden;
            width: 800px;
            display: block;
            background: white;
            margin: 0px auto;
            margin-top:0px;
        
            padding: 0px;
            padding-bottom:5px;
        }
        
        .below{
            height:80px;
            background-color:#f07598;
        }
        .reserveContainer h1 {
            color: black;
            margin: 0px;
            padding: 5px;
        }
        .make_choice{
            /*padding-left:25% ;*/
            width: 100%;
        }
        .choice{
            float: left;
            margin-left:7.5%;
            margin-right:3.5%;
            /*border:dotted*/
            display: inline-block;
        }
        .region{
            border:solid;
            width:110px;
            height: 20px;
            overflow: hidden;
            font-size: small;
            text-align: center;
            color: #808088;
            /*margin-left: 200px;*/
            margin-bottom: 1.5rem;

        }
        .region:hover{
            border:solid #808088;
            background-color:#808088;
            color:white
        }
        }
        .scroll{
            height: 400px;
            overflow: auto;
            /* width:100%; */
            /*margin-left:5%;*/
            /*margin-right:5%;*/
            display: inline-block;
            margin-bottom:7px;
            margin-top:7px;

        }
        .store{
            width:80px;
            text-align: center;
            color: #808088;
        }
        .store:hover{
            border:solid #808088;
            background-color:#808088;
            color:white
        }

        .ex p{
            float: left;
            border: solid;
            font-size: small;
            margin-left: 20px;
            width:7rem;
            
        }
        .movie{
            border:solid;
            text-align: center;
            color: #808088;
            font-size:small;
            margin-bottom:2rem;
            padding-left:4px;
            padding-right:4px;
        }
        .movie:hover{
            border:solid #808088;
            background-color:#808088;
            color:white
        }
        .date{
            width:40%;
            /*border:dotted;*/
            overflow:hidden;
            margin:0;
            float:left;
            padding-top:0;

        }
        .date h3{
            margin-bottom:10px;
            margin-top:0;
            padding-left:20px;
        }
        .date p{
            color: #808088;
            float:left;
            border:solid;
            margin:2px;
            margin-right:10px;
            padding-right:2px;
            padding-left:2px;
            text-align:center;
            border-radius:5px;

        }
        .date p:hover{
            border:solid #808088;
            background-color:#808088;
            color:white
        }
        .point{
            margin-left:20px;
        }
        .next{
            width:100%;
            height:90%;
        }
        button{
            background-color:pink;
            border:solid 0.5px;
            border-radius:5px;
            float:right;
            margin-right:10px;
            padding-left:3%;
            padding-right:3%;
        }
        .confirm{
            background-color:pink;
        }
        .cancel{
            background-color:white;
        }




        `}</style>
    )
}
export default Index_css