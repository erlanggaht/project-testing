const codeTextCss = () => {
    return `@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300;1,700&family=Ubuntu:ital@1&display=swap');

    .container{
        display: flex;justify-content: center;max-width: 97vmax;width:100% ;position: relative;
    }
    nav {
        background-color: #222;
        color: #eee;
        font-family: "Roboto", sans-serif;
        padding: 7px 10px;
        width: 100%;
        max-width: 96vmax;
        font-size: 1rem;
        
      }
      
      nav ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav ul li {
        color: #eee;
        list-style: none;
        display: inline;
        padding: 10px;
      }
      nav ul li a{
        color: #eee;
        text-decoration: none;        
      }
      nav ul li:hover {
        background-color: rgb(54, 53, 53);
        cursor: pointer;
      }

      nav .title a{
        color: #eee;
        text-decoration: none; 
      }

      nav .title::before {

        content: "./";
        font-size: inherit;
    
    }
       
    @media (max-width: 992px) {
       
        .container .title-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 82vw;
        }
        .container .title-top h1 {
          font-size: 1.3rem;
        }
        .container .title-top h3 {
          font-size: 0.8rem;
        }
        .container .nav1, .container .nav3 {
          padding: 0;
          position: relative;
          border: 0;
        }
        .container .nav1 .title, .container .nav3 .title {
          display: block;
          padding: 10px;
        }
        .container .nav1 .menuclick, .container .nav1 .menuclick1, .container .nav3 .menuclick, .container .nav3 .menuclick1 {
          position: absolute;
          display: block;
          right: 1rem;
          top: 25px;
          transform: scale(1.7);
          cursor: pointer;
          z-index: 999;
        }
        .container .nav1 ul, .container .nav3 ul {
          display: flex;
          flex-direction: column;
          align-items: inherit;
        }
        .container .nav1 ul .list, .container .nav3 ul .list {
          margin: 0;
          overflow: hidden;
          height: 0px;
          padding: 0px;
          transition: 0.5s ease;
        }
        .container .nav1 ul .list li, .container .nav3 ul .list li {
          display: block;
          transition: 0.5s ease;
        }
      }
      .container .title {
        font-weight: 300;
        font-size: 1rem;
      }
      .container .title-area {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
      }
      
      .title:before {
        content: "./";
        font-size: inherit;
      }
      
      .nav1 {
        background-color: #222;
        color: #eee;
        font-family: "Roboto", sans-serif;
        padding: .4rem;
        width: 80%;
        border-radius: none;
      }
      .nav1 .menuclick, .nav1 .menuclick1 {
        display: none;
      }
      
      .nav1 ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .nav1 ul li {
        color: #eee;
        list-style: none;
        display: inline;
        padding: 10px;
      }
      .nav1 ul li:hover {
        background-color: rgb(54, 53, 53);
        cursor: pointer;
      }
      
      
      
      .nav3 {
        background-color: transparent;
        color: #222;
        font-family: "Rubik Distressed", cursive;
        padding: 1rem;
        width: 80%;
        border-radius: none;
      }
      .nav3 .menuclick, .nav3 .menuclick1 {
        display: none;
      }
      
      .nav3 {
        border-bottom: 1px solid rgba(136, 136, 136, 0.589);
      }
      .nav3 ul {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .nav3 ul li {
        color: #222;
        list-style: none;
        display: inline;
        padding: 10px;
      }
      .nav3 ul li:hover {
        opacity: 0.7;
        cursor: pointer;
      }
      `
}

const codeTextCss2 = () => {
  return `@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300;1,700&family=Ubuntu:ital@1&display=swap');

  .container{
      display: flex;justify-content: center;max-width: 97vmax;width:100% ;position: relative;
  }
  nav {
      background-color: #222;
      color: #eee;
      font-family: "Roboto", sans-serif;
      padding: 7px 10px;
      width: 100%;
      max-width: 96vmax;
      font-size: 1rem;
      
    }
    
    nav ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav ul li {
      color: #eee;
      list-style: none;
      display: inline;
      padding: 10px;
    }
    nav ul li a{
      color: #eee;
      text-decoration: none;        
    }
    nav ul li:hover {
      background-color: rgb(54, 53, 53);
      cursor: pointer;
      color: #eee;
    }

    nav .title a{
      color: #eee;
      text-decoration: none; 
    }

    nav .title::before {

      content: "./";
      font-size: inherit;
  
  }
     
  @media (max-width: 992px) {
     
      .container .title-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 82vw;
      }
      .container .title-top h1 {
        font-size: 1.3rem;
      }
      .container .title-top h3 {
        font-size: 0.8rem;
      }
      .container .nav1, .container .nav3 {
        padding: 0;
        position: relative;
        border: 0;
      }
      .container .nav1 .title, .container .nav3 .title {
        display: block;
        padding: 10px;
      }
      .container .nav1 .menuclick, .container .nav1 .menuclick1, .container .nav3 .menuclick, .container .nav3 .menuclick1 {
        position: absolute;
        display: block;
        right: 1rem;
        top: 25px;
        transform: scale(1.7);
        cursor: pointer;
        z-index: 999;
      }
      .container .nav1 ul, .container .nav3 ul {
        display: flex;
        flex-direction: column;
        align-items: inherit;
      }
      .container .nav1 ul .list, .container .nav3 ul .list {
        margin: 0;
        overflow: hidden;
        height: 0px;
        padding: 0px;
        transition: 0.5s ease;
      }
      .container .nav1 ul .list li, .container .nav3 ul .list li {
        display: block;
        transition: 0.5s ease;
      }
    }
    .container .title {
      font-weight: 300;
      font-size: 1rem;
    }
    .container .title-area {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
    }
    
    .title:before {
      content: "./";
      font-size: inherit;
    }
    
    .nav1 {
      background-color: #222;
      color: #eee;
      font-family: "Roboto", sans-serif;
      padding: .4rem;
      width: 80%;
      border-radius: none;
    }
    .nav1 .menuclick, .nav1 .menuclick1 {
      display: none;
    }
    
    .nav1 ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav1 ul li {
      color: #eee;
      list-style: none;
      display: inline;
      padding: 10px;
    }
    .nav1 ul li:hover {
      background-color: rgb(54, 53, 53);
      cursor: pointer;
    }
    
    
    
    .nav3 {
      background-color: transparent;
      color: #222;
      font-family: "Rubik Distressed", cursive;
      padding: 1rem;
      width: 80%;
      border-radius: none;
    }
    .nav3 .menuclick, .nav3 .menuclick1 {
      display: none;
    }
    
    .nav3 {
      border-bottom: 1px solid rgba(136, 136, 136, 0.589);
    }
    .nav3 ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav3 ul li {
      color: #222;
      list-style: none;
      display: inline;
      padding: 10px;
    }
    .nav3 ul li:hover {
      opacity: 0.7;
      cursor: pointer;
    }
       `
}


