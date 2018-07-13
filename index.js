function takeANumber (katzDeliLine, name){
  var numberInLine = katzDeliLine.indexOf(name)
  numberInLine = numberInLine
  console.log(numberInLine)
  console.log(typeof(numberInLine))
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}