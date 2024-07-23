const fn=require("fs");
fn.readFile("example.txt","utf8",(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})

fn.writeFile("example2.txt","welcome to java script",(err)=>{
     if(err){
        console.error(err);
        return;
     
    }
    console.log("successful")
})