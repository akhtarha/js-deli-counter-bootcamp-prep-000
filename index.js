function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  var numberInLine = katzDeliLine.indexOf(name)
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}

function nowServing(arr){
  if (arr === ""){
    return "There is nobody waiting to be served!"
  }else{
    nwServing = arr[0];
    currentlyServing = `Currently serving ${nwServing}.`
    arr.shift()
    return currentlyServing
    
  }
  
}