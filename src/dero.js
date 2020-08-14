
export default function dero(events){
  if(events === "0"){
    return events;
  }
  let as = events.slice(events.length-2);
  switch(as){
    case "+0":
    case "-0":
    case "*0":
    case "/0":
    case "(0":
    return events;
    break;
    default:
    return events + "0";
  }
}
