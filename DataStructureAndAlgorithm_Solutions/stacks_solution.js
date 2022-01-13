/*
valid parenthesis
*/
const parans ={
    "(":")",
    "{":"}",
    "[":"]"
}
const isValidParenthesis=(s)=>{
    if(s.length===0){
        return true;
    }
    const stack = [];
    for(let i =0;i<s.length;i++){
        if(parans[s[i]]){
            stack.push(s[i]);
        }else{
            const leftBracket = stack.pop();
            const correctBracket = parans[leftBracket];
            if(s[i]!==correctBracket){
                return false;
            }
        }
    }
    return stack.length ===0;
}
isValidParenthesis("(){[]}")

/*
remove minimum parentheses
*/
let s = '(ab)d)';

let minRemoveToMakeValid =(s)=>{
  s = s.split('');
  let stack = [];
  for(let i =0; i< s.length; i++){
      if(s[i]=='('){
        stack.push(i)
      }else if(s[i]==')'){
          stack.pop();
      }
  }
  while(stack.length){
      stack.pop();
  }
  return stack.length;
}
