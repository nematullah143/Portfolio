
//--------< dark_mode Section>------\\

let dark_mode_btn = document.querySelector('.dark_mode_btn');
let body = document.querySelector('body');
let moon = document.querySelector('.ani_stop');
let dark_mode_status = false;
dark_mode_btn.addEventListener('click', function () {
    body.classList.toggle('bg_main');
    //    ani_stop.style = "Animation: 0s";
    if (dark_mode_status == false) {
        this.innerHTML = '<i class="fa fa-sun-o mx-3 ani_stop"></i>';
        dark_mode_status = true;
    } else {
        this.innerHTML = '<i class="fa fa-moon-o mx-3 ani_stop"></i>';
        dark_mode_status = false;
    }
});

//-----------< nav Section >----------\\

let nav_color = document.querySelector(".nav-color")
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 150) {
        nav_color.classList.add("bg-secondary");
    }
    else {
        nav_color.classList.remove("bg-secondary");
        // document.body.style = "background:blue !important";
    }
})

//--------< Click to top button Section >-------\\

let start = document.querySelector(".start");
start.addEventListener("click", function () {
    window.scrollTo(0, 0);
})


  //--------< text Animation Section >-------\\

//   let typed = document.querySelector(".typed");
//   let textanimation = () => {
//     setTimeout(() => {
//       typed.innerHTML = "Developer"
//     },0);
//     setTimeout(() => {
//       typed.innerHTML = "Freelancer"
//     },4000);
//     setTimeout(() => {
//       typed.innerHTML = "Designer"
//     },8000);
//   }
// textanimation();
// setInterval(textanimation,12000);


