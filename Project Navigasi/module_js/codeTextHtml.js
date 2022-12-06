const codeText = () => {
    return `<div class="container">
    <nav class="nav1">
        <ul>
            <div><span class="title"><a href="#">Erlangga</a></span>
            </div>
            <div class="menuclick m-click">&equiv;</div>
            <div class="list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portofolio</a></li>
            </div>
        </ul>
    </nav> 
</div>  

<!-- Script Javascript -->


<script> 
var x = window.matchMedia("(max-width:992px)");

const NavStyle = (nav) => {
  var nav = document.querySelector(".list");
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
              this.style.opacity = "1";
              const nav = document.querySelector(".list");
              nav.style.maxHeight = "0px";
              nav.style.height = "inherit";
              nav.style.overflow = "hidden";
            }
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


  Nav(x)
NavMouseOut();
</script>
`
}

const codeText1 = () => {
    return `<div class="container">
    <nav class="nav3">
        <ul>
            <div class="menuclick m-click1">Menu</div>
            <div class="list">
            <li>Home</li>
            <li>Menu</li>
            <li>Contact Us</li>
            <li>About</li>
            <li>Portofolio</li>
            <li>Script Navigasi</li>
                </div>
        </div>
        </ul>
    </nav>

</div>

    <!-- Script Javascript -->


    <script>
    var x = window.matchMedia("(max-width:992px)");

    const NavStyle1 = (nav) => {
        var nav = document.querySelector(".nav3 .list");
        nav.style.maxHeight = "250px";
        nav.style.height = "100%";
        nav.style.overflow = "hidden";
        nav.style.transition = "1s";
      };

const Nav1 = (x) => {
if (x.matches) {
  document
    .querySelector(".m-click1")
    .addEventListener("click", function (e) {
      const mClick = e.target;
      const btn = document.querySelector(".m-click");
      const btn1 = document.querySelector(".m-click1");
        btn1.classList.toggle("boolean-menu1");
        const menuClick = document.querySelector(".boolean-menu1");
        if (menuClick) {
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
}}



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

Nav1(x)
NavMouseOut1();
</script>
        `
}
