module.exports = function (){
  return {
    add: function(num1, num2) { 
        return num1 + num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    square: function(num) {
        return Math.pow(num, 2);
    },
    random: function(num1, num2) {
        var span = Math.abs(num2 - num1);
        var min = num1;
        if (num2 < num1) { min = num2 };
        var rand = Math.floor(Math.random() * span) + min;
        return rand;
    }
  }
};
