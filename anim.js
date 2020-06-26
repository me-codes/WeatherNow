const moonvar="M16.5 27.5C16.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 16.5 12.3122 16.5 27.5Z";
const  sunvar="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const  darkmode=document.querySelector("#darkmode");
let toggle=false;
darkmode.addEventListener('click',()=>{
    const timeline=anime.timeline({
        duration:750,
        easing:"easeOutExpo"
    });
    timeline.add({
        targets:".sun",
        d:[
            {value:toggle? sunvar : moonvar}
        ]
    })
        .add({
            targets:'.sun',
            rotate:360
        },"-=350")
        .add({
            targets:"body",
            background: toggle? 'linear-gradient(rgb(255, 154, 158), rgb(250, 208, 196))': "linear-gradient(rgb(24, 24, 49), rgb(2, 2, 1))",
            color: toggle? '#030508' : "#f1eeed"
            }, "-=700")
        .add({
            targets:'.sun',
            fill:[
                {value:toggle? '#FBC609' : "#eae2ff"}
            ]
        },"-=700");
    if(!toggle){
        toggle=true;
    }else{
        toggle=false;
    }
});
