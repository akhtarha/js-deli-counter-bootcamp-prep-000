function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  var numberInLine = katzDeliLine.indexOf(name)
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}

function nowServing(arr){
  if (arr === ""){
    return "There is no one in line."
  }
  nwServing = katzDeliLine[0];
  nwServing.shift()
  
}