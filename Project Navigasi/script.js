const navli =  document.querySelectorAll('nav li:nth-child(6)')
navli.forEach((arr,i)=>{
    arr.addEventListener("click",function(){
        const val = i
        if(i === val){
            scriptStyle(scriptReturn(val),scriptReturnCss(val))
        }
})

})


//Jika Darkmode Diklik

document.querySelector('.darkmode').addEventListener('click',function(e){
    const getAttributeDark = document.body.getAttribute('style');
    const getAttributeButtonDark = e.target.getAttribute('style')
    const titleAreaText = document.querySelector('.title-area').getAttribute('style')
    const nav = document.querySelector('.nav1')
    
    if(!getAttributeDark){
        document.body.style.backgroundColor = '#222';
        document.body.style.transition = "0.7s";

    }  else {
        document.body.style.backgroundColor = 'inherit';
        document.body.style.transition = "0.7s";
        setTimeout (()=>{
            document.body.removeAttribute('style')

        },0) 
    }

    !getAttributeButtonDark ?  GetButton(!getAttributeDark) : this.removeAttribute('style');
    !titleAreaText ?  titleArea() : document.querySelector('.title-area').removeAttribute('style');
    !getAttributeDark ?  navigasi() : 
    [
        nav.removeAttribute('style'),
        document.querySelectorAll('.nav1 .list li').forEach(m => m.removeAttribute('style')),
        document.querySelectorAll('.nav3 .list li').forEach(m => {
            m.removeAttribute('style')
        })
    ];
    

    function GetButton (getAttributeButtonDark){
        const thiss = document.querySelector('.darkmode')
        const thissbol = document.querySelector('.darkmode').getAttribute('style')
        const thissBoolean = getAttributeButtonDark
        thiss.style.backgroundColor = "#eee"
        thiss.style.color = "#999"
        thiss.style.transition = "0.7s";
        thiss === thissbol? '': thiss.textContent = "Dark Mode"
            setTimeout(()=>{
                thissBoolean === true ?  thiss.innerHTML = "Light Mode"  : ''

            },0)
            

       
        
        thiss.addEventListener('click',function(){
            thiss.innerHTML = "Dark Mode" 

        })

    }
    
    function titleArea () {
        const titleAreaText = document.querySelector('.title-area')
        titleAreaText.style.color = "#eee"
        titleAreaText.style.transition = "0.7s"
    }

    function navigasi(){
        const nav = document.querySelector('.nav1')
        document.querySelectorAll('.nav3 .list li').forEach(m => {
            m.style.color = '#eee'
        })
        
        document.querySelectorAll('.nav1 .list li').forEach(m => {
            m.style.color ='#222'
          m.classList.remove ('hoverdark1')
          m.classList.add('hoverdark1')
        })

        nav.style.backgroundColor = '#eee'
        nav.style.color = '#222'
    }
       
})



