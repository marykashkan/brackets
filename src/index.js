module.exports = function check(str, bracketsConfig) {
  const arrayOfBrackets = ['(', '{', '[', '1', '3', '5'];
  const arrayOfEqualBrackets = ['|', '7', '8'];
  const pairsOfBrackets = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',    
  };
  let stack = [];
  

  for(let i = 0; i < str.length; i++) {
    if (arrayOfBrackets.includes(str[i])) {
      stack.push(str[i]);      
    } else if (arrayOfEqualBrackets.includes(str[i])) {
      if (!stack.includes(str[i])) {
        stack.push(str[i]);
      } else {
        if (stack[stack.length - 1] === str[i]) {
          stack.pop();
        } else {
          return false;
        };
      };      
    } else {
      if (stack.length === 0) {
        return false;
      };
      let topElement = stack[stack.length - 1];
      if (pairsOfBrackets[str[i]] === topElement) {
        stack.pop();
      } else {
        return false;
      };

    };
    

  };
  return stack.length === 0;

};
