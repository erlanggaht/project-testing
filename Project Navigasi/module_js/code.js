const scriptReturn = (param) => {
   if (param === 0) {
      return `<textarea> ${codeText()} </textarea>`
   } else if (param === 1) {
      return `<textarea> ${codeText1()} </textarea>`
   }
}

const scriptReturnCss = (param) => {
   if (param === 0) {
      return `<textarea> ${codeTextCss()} </textarea>`
   } else if (param === 1) {
      return `<textarea> ${codeTextCss2()} </textarea>`

   }

}

const scriptStyle = (scriptReturn, scriptReturnCss) => {
   document.querySelector('.inner').innerHTML = scriptReturn;
   document.querySelector('.inner1').innerHTML = scriptReturnCss;
   document.querySelector('.alertclick').classList.add('animate__zoomIn','alert')

}

const keydown = document.querySelector('.close').addEventListener("click", function () {
   document.querySelector('.alertclick').classList.toggle('alert')
   document.querySelector('.alertclick').classList.toggle('animate__zoomIn')


})

const doc = document.querySelector('.alert')
if(!doc){
   document.querySelector('body').addEventListener('keydown',function(event){
      event.keyCode === 27 ?  document.querySelector('.alertclick').classList.remove('alert') : ''
    }) 
}





