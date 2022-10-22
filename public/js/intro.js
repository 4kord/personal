let header = document.querySelector("#intro");
let anim = [
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: "4_", ms: 100 },
    { t: "4K_", ms: 100 },
    { t: "4KO_", ms: 100 },
    { t: "4KOR_", ms: 100 },
    { t: "4KORD_", ms: 100 },
    { t: "4KORD ", ms: 200 },
    { t: "4KORD_", ms: 200 },
    { t: "{4KORD}", ms: 400 },
];

let i = 0;

let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms);
    else {
        header.classList.add("top");
        setTimeout(() => {
            document.querySelector(".main").style.opacity = 1;
        }, 500);
        i = 0;
    }
}
update();