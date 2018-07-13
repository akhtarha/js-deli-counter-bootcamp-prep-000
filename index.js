function takeANumber (katzDeliLine, name){
  var numberInLine = katzDeliLine.indexOf(name)
  var numberInLine = numberInLine + 1
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}