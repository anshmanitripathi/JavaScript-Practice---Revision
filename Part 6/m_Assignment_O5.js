// Qs5.WriteaJavaScriptfunctiontogeneratearandomnumberwithinarange(start,end)

function RandomInRange(start , end){
    diff = end - start;
    let rand = Math.floor(Math.random() * diff ) + start;
    return rand;
}

console.log(RandomInRange(100, 200));



