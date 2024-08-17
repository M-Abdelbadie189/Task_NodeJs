
const fs = require("fs");
console.log(process.argv);
let [, , command] = process.argv;
if (command == "create") {
  let [, , , title] = process.argv;
  let todo = JSON.parse(fs.readFileSync("./todo.json", "utf8"));
  todo.push({ title: title });
  console.log( " Create successfully" )

  fs.writeFileSync("./todo.json", JSON.stringify(todo));
} 
else if (command == "list") {
  console.log(JSON.parse(fs.readFileSync("./todo.json", "utf8")));
} 
else if (command == "update") {
  // let[,,,title,newTitle]=process.argv;
  let todo = JSON.parse(fs.readFileSync("./todo.json", "utf8"));
  let [, , , title, NewTitle] = process.argv;
  let itemUpdated = false;
  for (var i = 0; i < todo.length; i++) {
    if (todo[i].title == title) {
      todo[i].title = NewTitle
      itemUpdated = true;
    }
  }
  if (itemUpdated) {
    fs.writeFileSync("./todo.json", JSON.stringify(todo));
    console.log("Title updated from",{title},"to",{NewTitle})
  } else {
    console.log ("Item with title" , {title} , "not found")
  }
  fs.writeFileSync("./todo.json", JSON.stringify(todo));
}
else if (command == "deleteAll") {
  let todo = []; 
  console.log("All items deleted successfully");
  fs.writeFileSync("./todo.json", JSON.stringify(todo));
}
 else if (command == "deleteIndex") {
  let todo = JSON.parse(fs.readFileSync("./todo.json", "utf8"));
  let [, , , title] = process.argv;
  let itemDeleted = false;
  for (var i = 0; i < todo.length; i++) {
    if (todo[i].title == title) {
      todo.splice(i,1)
      itemDeleted = true;
    }
  }
  if (itemDeleted) {
    fs.writeFileSync("./todo.json", JSON.stringify(todo));
    console.log( "Item with title",{title},"deleted successfully" )
  } 
  else
 {
 console.log( "Item with title",{title},"not found" )
 }
  fs.writeFileSync("./todo.json", JSON.stringify(todo));
}