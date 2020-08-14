
export default function parentheses(eventss){
  if(eventss === "0"){
    return eventss;
  }
  switch(eventss[eventss.length-1]){
    case "+":
    case "-":
    case "*":
    case "/":
    case "(":
    return eventss;
    break;
    default:
    return eventss + ")"
    break;
  }
}
