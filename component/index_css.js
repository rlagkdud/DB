const Index_css=()=>{
    return(
        
    
        <style global jsx>{`
        .body_index{
          margin: 0;
          padding:0;
        }

        @import url(https://fonts.googleapis.com/css?family=Varela+Round);

        .slide_box {
          padding: 1px;
          width: 100%;
          height: 530px;
          background-color: #F2F2F2;
        }

        .slides {
          // padding: 0;
          width: 1100px;
          height: 420px;
          display: block;
          margin: 0 auto;
          position: relative;
          margin-top: 50px;
        }

        .slides * {
          user-select: none;
          -ms-user-select: none;
          -moz-user-select: none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }

        .slides input { display: none; }

        .slide-container { display: block;}

        .slide {
          top: 0;
          opacity: 0;
          width: 609px;
          height: 420px;
          display: block;
          position: absolute;

          transform: scale(0);

          transition: all .7s ease-in-out;
        }

        .slide img {
          width: 720px;
          height: 100%;
          margin-left: 190px;
        }

        .nav label {
          width: 200px;
          height: 100%;
          display: none;
          position: absolute;

          opacity: 0;
          z-index: 9;
          cursor: pointer;

          transition: opacity .2s;

          color: #B6B8B6;
          font-size: 156pt;
          text-align: center;
          line-height: 380px;
          font-family: "Varela Round", sans-serif;
          // background-color: rgba(189, 189, 189, .3);
          text-shadow: 0px 0px 15px rgb(119, 119, 119);
        }
        .slide:hover + .nav label { opacity: 0.5; }
        .nav label:hover { opacity: 1; }
        .nav .next { right: 0; }

        input:checked + .slide-container  .slide {
          opacity: 1;
          transform: scale(1);
          transition: opacity 1s ease-in-out;
        }

        input:checked + .slide-container .nav label { display: block; }

        .nav-dots {
         width: 100%;
         bottom: 9px;
         height: 11px;
         display: block;
         position: absolute;
         text-align: center;
        }

        .nav-dots .nav-dot {
         top: -5px;
         width: 11px;
         height: 11px;
         margin: 0 4px;
         position: relative;
         border-radius: 100%;
         display: inline-block;
         background-color: rgba(0, 0, 0, 0.6);
        }

        .nav-dots .nav-dot:hover {
         cursor: pointer;
         background-color: rgba(0, 0, 0, 0.8);
        }

        input#img-1:checked ~ .nav-dots label#img-dot-1,
        input#img-2:checked ~ .nav-dots label#img-dot-2,
        input#img-3:checked ~ .nav-dots label#img-dot-3,
        input#img-4:checked ~ .nav-dots label#img-dot-4,
        input#img-5:checked ~ .nav-dots label#img-dot-5,
        input#img-6:checked ~ .nav-dots label#img-dot-6 {
         background: rgba(0, 0, 0, 0.8);
        }

        .movie_list {
          display: inline-block;
          background-color: #585858; //#585858
          width: 100%;
          height: 450px;
          margin-top: 50px;
          padding-bottom: 30px;
        }

        .movie1 {
          background-color: #2E2E2E;
          width: 220px;
          height: 370px;
          float: left;
          margin-left: 100px;
          margin-right: 30px;
          margin-top: 50px;
          box-shadow: 3px 3px 3px 3px #151515;
        }

        .movie1 img {
          width: 220px;
          height: 320px;
          margin-left: 0px;
          margin-top: 5px;
        }

        .movie2 {
          background-color: #2E2E2E;
          width: 220px;
          height: 370px;
          float: left;
          margin-top: 50px;
          margin-right: 30px;
          box-shadow: 3px 3px 3px 3px #151515;
        }
        .movie2 img {
          width: 220px;
          height: 320px;
          margin-left: 0px;
          margin-top: 5px;
        }
        .movie3 {
          background-color: #2E2E2E;
          width: 220px;
          height: 370px;
          float: left;
          margin-top: 50px;
          margin-right: 30px;
          box-shadow: 3px 3px 3px 3px #151515;
        }
        .movie3 img {
          width: 220px;
          height: 320px;
          margin-left: 0px;
          margin-top: 5px;
        }
        .movie4 {
          background-color: #2E2E2E;
          width: 220px;
          height: 370px;
          float: left;
          margin-top: 50px;
          margin-right: 30px;
          box-shadow: 3px 3px 3px 3px #151515;
        }
        .movie4 img {
          width: 220px;
          height: 320px;
          margin-left: 0px;
          margin-top: 5px;
        }
        .movie5 {
          background-color: #2E2E2E;
          width: 220px;
          height: 370px;
          float: left;
          margin-top: 50px;
          margin-right: 30px;
          box-shadow: 3px 3px 3px 3px #151515;
        }
        .movie5 img {
          width: 220px;
          height: 320px;
          margin-left: 0px;
          margin-top: 5px;
        }

        .genre_title {
          margin-top: 30px;
          display: table;
          background-color: #f0f0f0;
          background-size: cover;
          width: 100%;
          height: 70px;
          /* padding: 10px 10px; */
        }
        .genre_title h1 {
          font-style: italic;
          font-weight: 400;
          display: table-cell;
          text-align: center;
          vertical-align: middle;
          color: #7f7f7f;
          font-size: 2.5em;
        }
        .genre_wrap {
          background-color: #efd5d5;
          text-align: center;
        }
        .genre_img{
          padding-top: 30px;
        }

        .genre button {
          background-color: #343B40;
          font-size: 1em;
          color: #E6BEBE;
          width: 120px;
          height: 40px;
          margin-top: 20px;
          margin-bottom: 20px;
          box-shadow: 3px 3px gray;
          position: relative;
          padding: 0 2em;
          cursor: pointer;
          transition: 800ms ease all;
          outline: none;
        }
        .genre button:hover{
          background: #C0637E;
          color: #343B40;
        }
        .genre button:before, button:after{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          height: 2px;
          width: 0;
          background: #343B40;
          transition: 400ms ease all;
        }
        .genre button:after{
          right: inherit;
          top: inherit;
          left: 0;
          bottom: 0;
        }
        .genre button:hover:before, button:hover:after {
         width: 100%;
         transition: 800ms ease all;
        }

        .banner {
          margin: 50px auto;
          text-align: center;
        }
        .banner img {
          height: 150px;
        }
        .membership {
          background-image: url(/membership.png);
          background-size: cover;
          background-position: center;
          height: 200px;
        }

        .footer {
          background-image: url(/footer.png);
          background-size: cover;
          background-position: center;
          height: 50px;
        }
        .genre_snip {
          display: inline-block;
          /* font-family: 'Source Sans Pro', sans-serif; */
          position: relative;
          overflow: hidden;
          margin: 10px;
          min-width: 350px;
          max-width: 350px;
          width: 100%;
          color: #343B40;
          text-align: left;
          font-size: 20px;
          background-color: #F2F2F2;
        }

        .genre_snip * {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-transition: all 0.45s ease;
          transition: all 0.45s ease;
        }

        .genre_snip img {
          vertical-align: top;
          max-width: 100%;
          backface-visibility: hidden;
        }

        .genre_snip figcaption {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1;
          align-items: center;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .genre_snip h3,
        .genre_snip h5 {
          margin: 0;
          opacity: 0;
          letter-spacing: 1px;
        }

        .genre_snip h3 {
          -webkit-transform: translateY(-100%);
          transform: translateY(-100%);
          text-transform: uppercase;
          font-weight: 400;
        }

        .genre_snip h5 {
          font-weight: normal;
          font-style: italic;
          color: #888;
          -webkit-transform: translateY(100%);
          transform: translateY(100%);
        }

        .genre_snip a {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;
        }

        .genre_snip:hover > img,
        .genre_snip.hover > img {
          opacity: 0.1;
        }

        .genre_snip:hover h3,
        .genre_snip.hover h3,
        .genre_snip:hover h5,
        .genre_snip.hover h5 {
          -webkit-transform: translateY(0);
          transform: translateY(0);
          opacity: 1



        `}</style>
    )



}   
export default Index_css
