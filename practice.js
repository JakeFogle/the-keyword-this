//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  
  // 1) What is the purpose of the 'this keyword'?

      //It refers to the object which called a function. Used to avoid repeating the object's name and to increase clarity.

  // 2) 
      //Rule 1: THIS is the global object.
      //Rule 2: THIS is the parent object inside function code if the function is called as a property of the parent.
      //Rule 3: THIS in function code invoked using the new operator refers to the newly created object.
      //Rule 4: THIS is set to the first argument passed to call or apply inside function code when that function is 
      //        called with either call or apply.

  // 3) What is the difference between call and apply?

      //APPLY lets you invoke the function with arguments as an array; CALL requires the parameters be listed explicitly. 
      //Remember -- "A for array and C for comma."

  // 4) What does .bind do?

      //BIND allows us to easily set which specific object will be bound to THIS when a function or method is invoked.


//Problem 1
//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead 
  //use the 'this' keyword*

var user = {
  username: "Jake",
  email: "Jacob70991@yahoo.com",
  getUsername: function() {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();


//Problem 2
// Write the function definitions which will make the following function invocations function properly.

function Car(brand, type, year) {
  return {
    model: brand,
    make: type,
    year: year,
    move: 0,
    moveCar: function() {
      this.move += 10;
      return this.move; 
    }
  };  
}

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car 
//function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the 
//write object (prius vs mustang).

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that 
//will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. 
//*Don't add getYear as a property on both objects*.

getYear.apply(prius);
getYear.apply(mustang);


//Problem 3

var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.bind(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will 
//the getUsername function return?

  //UNDEFINED -- cause it's not tied to the object

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //The window

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.