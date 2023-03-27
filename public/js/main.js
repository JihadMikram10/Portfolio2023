// let mode_switch = document.getElementById("switch-mode");
// let p1 = document.getElementById("p1");
// mode_switch.onclick = function test () {
//     document.body.classList.toggle("light-theme");
//     if (document.body.classList.contains("light-theme")) {
//         mode_switch.src = "images/979888-200.png"
//         p1.innerHTML="DARK MODE"
//    }
//     else {
//         mode_switch.src = "images/light-icon black.png";
//         p1.innerHTML="LIGHT MODE"
// }
   
    
// }

var typed = new Typed(
  ".jumbtron-text",
  (options = {
    strings: ["Hi I am Web Developer!", "Hi I am Web Developer!"],
    typeSpeed: 200,
    loop: true,
  })
);
  
ScrollReveal({ reset: true, distance: "60px", duration: 2500, delay: 400 });
ScrollReveal().reveal(".jumbotron", { delay: 450, origin: "top" });
ScrollReveal().reveal("#card_about", { delay: 450, origin: "right" });
ScrollReveal().reveal("#card_contact", { delay: 450, origin: "left" });
ScrollReveal().reveal("#card_skills", { delay: 450, origin: "bottom" });

ScrollReveal().reveal("#section_project", { delay: 450, origin: "bottom" });

