// WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.
// Example:str=“abcdabcdefgggh”ans=“abcdefgh”

function UniqueString(str){
    let result = "";
    for(let i=0; i<=str.length; i++){
        let ele = str[i];
        if(result.indexOf(ele) == -1){
            result+= ele;
        }
    }

    return result;
}

let str = "abbbscdbsbds";
console.log(UniqueString(str));