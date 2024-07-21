function short(name,maxlength){
     if (name.length>=maxlength){
         return name.substring(0,maxlength)+"..."
     }
     return name
}
name="bondugula keerthan"
maxlength=15
console.log(short(name,maxlength))