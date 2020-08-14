
export function parenthes(eventss, count){
  if(eventss === "0"){
    count = count + 1;
    return "(";
  }
  switch(eventss[eventss.length-1]){
    case "+":
    case "-":
    case "*":
    case "/":
    case "(":
    count = count + 1;
    return eventss + "(";
    break;
    default:
    count = count + 1;
    return eventss + "*(";
    break;
  }
}


export function parentheses(eventss, count){
  if(eventss === "0"){
    return eventss;
  }
  switch(eventss[eventss.length-1]){
    case "+":
    case "-":
    case "*":
    case "/":
    case "(":
    count = count;
    return eventss;
    break;
    default:
    count = count - 1;
    return eventss + ")";
    break;
  }
}

export function count1(count, eventss){
  if(eventss === "0"){
    return count = count + 1;
  }
  switch(eventss[eventss.length-1]){
    case "+":
    case "-":
    case "*":
    case "/":
    case "(":
    return count = count + 1;
    break;
    default:
    return count = count + 1;
    break;
  }
}

export function count2(count, eventss){
  if(eventss === "0"){
    return count;
  }
  switch(eventss[eventss.length-1]){
    case "+":
    case "-":
    case "*":
    case "/":
    case "(":
    return count;
    break;
    default:
    return count = count - 1;
    break;
  }
}
