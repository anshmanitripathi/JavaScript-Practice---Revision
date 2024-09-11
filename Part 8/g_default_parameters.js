function add(a, b=5){
    console.log(a+b);
}

add(3,3); /** 6 */
add(2);  /** 7 */

function Sum(a=5, b){
    console.log(a+b);
}

Sum(3,3);   /** 6 */
Sum(9);   /** NaN */