// WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinputandreturnsthelongestcountrynameasoutput.
// Example:country=["Australia","Germany","UnitedStatesofAmerica"]output:"UnitedStatesofAmerica"

function LongestString(arr){
    let maxIdx = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length > arr[maxIdx].length){
            maxIdx = i;
        }
    }

    return arr[maxIdx];
}

let country=["Australia","Germany","UnitedStatesofAmerica"];

console.log(LongestString(country));