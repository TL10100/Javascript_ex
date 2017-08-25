const name = "Andrew";

const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}

const sayBye = () => {
  console.log("Bye " + name);  
}

const sayBye = () => console.log("Bye " + name); //只有一行，可以省略花括号