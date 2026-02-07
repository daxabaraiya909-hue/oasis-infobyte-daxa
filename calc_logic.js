let output = "";

function addVal(v){
  output += v;
  document.getElementById("screen").value = output;
}

function resetAll(){
  output = "";
  document.getElementById("screen").value = "";
}

function removeOne(){
  let temp = "";
  for(let i=0;i<output.length-1;i++){
    temp += output[i];
  }
  output = temp;
  document.getElementById("screen").value = output;
}

function showResult(){
  try{
    let ans = eval(output);
    output = ans.toString();
    document.getElementById("screen").value = output;
  }
  catch{
    document.getElementById("screen").value = "Error";
  }
}