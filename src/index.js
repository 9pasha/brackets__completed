function ReverseTop(symbol, bracketsConfig){
    for(var i = 0; i < bracketsConfig.length; i++){
        if(symbol == bracketsConfig[i][0])
            return bracketsConfig[i][1];
    }
}
 
function ExplodeStack(stack, symbol, bracketsConfig){
    var top = stack[stack.length-1];
    var top_reverse = ReverseTop(top, bracketsConfig);
    if(symbol == top_reverse)
        stack.pop();
    else
        stack.push(symbol);
}
 
function ImplodeStack(str, bracketsConfig){
    var stack = [];
      for(var i = 0; i < str.length; i++){
        ExplodeStack(stack, str[i], bracketsConfig);
      }
      if(stack.length == 0)
        return true;
      else
        return false;
}
 
module.exports = function check(str, bracketsConfig) {
    return ImplodeStack(str, bracketsConfig);
}