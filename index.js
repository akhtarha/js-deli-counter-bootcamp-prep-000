function takeANumber (katzDeliLine, name){
  console.log(katzDeliLine)
  katzDeliLine.push(name)
  var numberInLine = katzDeliLine.indexOf(name)
  numberInLine = numberInLine
  console.log(numberInLine)
  console.log(typeof(numberInLine))
 
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}