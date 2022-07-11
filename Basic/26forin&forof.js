// const names = ["youtube","facebook","insta","netflix","amazon"];
// for (const n of names){
//     console.log(n);
// }

const symbols = {
    yt:"youtube",
    ig:"insta",
    fb:"facebook",
    lc0:"LearnCodeOnline.in"
}

for (const n in symbols) {
    console.log(`Key is ${n} and value is: ${symbols[n]}`);
}