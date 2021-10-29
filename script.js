let Subsubmaj = document.querySelector("#Subsubmaj");
let Submaj = document.querySelector("#Submaj");
let score = 0;


function jump() {
    if (Submaj.classList == "jump_animation") { return }
    Submaj.classList.add("jump_animation");
    setTimeout(function() {
        Submaj.classList.remove("jump_animation");
    }, 600);

}

const gettopvalue_of_jump_animation = () => {
    let Top = parseInt(window.getComputedStyle(Submaj).getPropertyValue("top"));
    return Top;

}
const getleftvalue_of_obstacle = () => {
    let Left = parseInt(window.getComputedStyle(Subsubmaj).getPropertyValue("left"));
    return Left;
}
let ifalive = setInterval(function() {


        if (getleftvalue_of_obstacle() < 20 && getleftvalue_of_obstacle() > -20 && gettopvalue_of_jump_animation() >= 130) {
            Subsubmaj.style.animation = "none";
            Subsubmaj.style.display = "none";
            score = Math.floor(score / 100);
            alert("Well Played Your score is: " + score);
            score = 0;

            Subsubmaj.style.animation = "block 1s infinite linear";
            window.location.reload();

        } else {
            score++;
            document.querySelector("#score").innerHTML = Math.floor(score / 100);

        }
    },
    10);