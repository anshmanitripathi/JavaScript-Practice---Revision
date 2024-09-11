let Student = {
    name : "Ansh",
    age : 19,
    prop : this,
    getName : function(){
        
        console.log(this);          /**Student Object */
        console.log(this.name);     /** Ansh */
    },

    getAge : ()=>{
        console.log(this);          /** Window Object */
        console.log(this).age;      /** not DEFINED */
    }
}

Student.getName();
Student.getAge();