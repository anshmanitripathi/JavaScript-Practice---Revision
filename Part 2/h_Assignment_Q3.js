/**Writeaprogramtocheckif2numbershavethesamelastdigit.Eg:32and47852havethesamelastdigiti.e.2 *
 */

let num1 = 13434;
let num2 = 32456;

if(num1%10 === num2%10){
    console.log("Last digit are equall");
}else{
    console.log("Not equal.");
}