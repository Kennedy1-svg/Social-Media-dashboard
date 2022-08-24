
 let body = document.querySelector('.body')
 console.log(body)

 let label = document.querySelector('.label')
 console.log(label)

 let slider = document.querySelector('.slider')
 console.log(slider)


function check_theme(){
    if (localStorage.theme === 'dark' ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

}

check_theme()

 label.addEventListener("click", () => {
    
    if (localStorage.theme==='dark'){
        localStorage.theme = 'light'
    } else {
        localStorage.theme = 'dark'
    }

    check_theme()

})

  