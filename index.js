function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  var numberInLine = katzDeliLine.indexOf(name)
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}