/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits == '') return [];
  var res = [];
  var resMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ['g', 'h', 'i'],
    "5": ['j', 'k', 'l'],
    "6": ['m', 'n', 'o'],
    "7": ['p', 'q', 'r', 's'],
    "8": ['t', 'u', 'v'],
    "9": ['w', 'x', 'y', 'z']
  };
  function dfs(index, str){
    if(index == digits.length){
      res.push(str);
      return;
    }
    for(let i = 0; i < resMap[digits[index]].length; i++){
      dfs(index+1, str+resMap[digits[index]][i]);
    }
  }
  dfs(0, '');
  return res;
};
console.log(letterCombinations('2345'));
