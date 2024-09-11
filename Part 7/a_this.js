let Student = {
    name : "Ansh",
    age : 19,
    class : 12,
    eng : 67,
    hin : 68,
    maths : 69,
    getAvg(){
        // let avg = (eng + hin + maths)/3;     eng , hin ,maths are not defined
        let avg = (this.eng + this.hin + this.maths)/3;
        console.log(`Average is ${avg}`);
    }
}

console.log(Student.name);
Student.getAvg();