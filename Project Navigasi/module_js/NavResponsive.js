var x = window.matchMedia("(max-width:992px)");

const NavStyle = (nav) => {
  var nav = document.querySelector(".list");
  nav.style.maxHeight = "250px";
  nav.style.height = "100%";
  nav.style.overflow = "hidden";
  nav.style.transition = "1s";
};

const NavStyle1 = (nav) => {
  var nav = document.querySelector(".nav3 .list");
  nav.style.maxHeight = "250px";
  nav.style.height = "100%";
  nav.style.overflow = "hidden";
  nav.style.transition = "1s";
};

const Nav = (x) => {
  if (x.matches) {
    document
      .querySelector(".container")
      .addEventListener("click", function (e) {
        const mClick = e.target;
        const btn = document.querySelector(".m-click");

        if (mClick === btn) {
          mClick.classList.toggle("boolean-menu");
          const menuClick = document.querySelector(".boolean-menu");
          if (menuClick) {
            btn.style.opacity = ".4";
            NavStyle((nav = "nav1"));
          } else {
            btn.style.opacity = "1";
            const nav = document.querySelector(".list");
            nav.style.maxHeight = "0px";
            nav.style.height = "inherit";
            nav.style.overflow = "hidden";
          }
        }
      });
  }
};

const Nav1 = (x) => {
  if (x.matches) {
    document
      .querySelector(".m-click1")
      .addEventListener("click", function (e) {
        const btn1 = document.querySelector(".m-click1");
          btn1.classList.toggle("boolean-menu1");
          const menuClick = document.querySelector(".boolean-menu1");
          if (menuClick) {
          
              menuClick ? btn1.innerHTML = 'Close' : '' 

              setTimeout (()=>{
                btn1.classList.remove('boolean-menu2')
                const bol2 = document.querySelector('boolean-menu2')
                !bol2 ?  btn1.innerHTML = 'Menu' :  ''
              },2000)

             
            
            btn1.style.opacity = ".4";
            NavStyle1((nav = "nav3"));
          } else {
            this.style.opacity = "1";
            const nav = document.querySelector(".nav3 .list");
            nav.style.maxHeight = "0px";
            nav.style.height = "inherit";
            nav.style.overflow = "hidden";
          }
        
      });
  }
};

const NavMouseOut = () => {
  document.querySelector(".nav1").addEventListener("mouseleave", function () {
    const menuClick = document.querySelector(".boolean-menu");
    if (menuClick) {
      menuClick.style.opacity = "1";
      menuClick.classList.remove("boolean-menu");
      const nav = document.querySelector(".list");
      nav.style.maxHeight = "0px";
      nav.style.height = "inherit";
      nav.style.overflow = "hidden";
    }
  });
};

const NavMouseOut1 = () => {
    document.querySelector(".container").addEventListener("mouseleave", function (e) {
      
      const menuClick = document.querySelector(".boolean-menu1");
      if (menuClick) {
        menuClick.style.opacity = "1";
        menuClick.classList.remove("boolean-menu1");

        setTimeout(()=>{
            const nav = document.querySelector(".nav3 .list");
            nav.style.maxHeight = "0px";
            nav.style.height = "inherit";
            nav.style.overflow = "hidden";
        },1000)
       
      }
        
    });
    
  };

// Run Function
Nav(x);
Nav1(x)
NavMouseOut();
NavMouseOut1();


