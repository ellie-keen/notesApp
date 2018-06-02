(function(exports) {

  var passTest = '%c Pass! '
  var green = 'background: #222; color: #bada55';
  var failTest = '%c You shall not pass! '
  var orange = 'background: #222; color: orange';

  var assert = {
    toBeTrue : function(object) {
      if (object === true) {
        console.log(passTest, green);
      } else {
        console.log(failTest, orange);
      }
    },

    toBeFalse : function(object) {
      if (object === false) {
        console.log(passTest, green);
      } else {
        console.log(failTest, orange);
      }
    },

    toEqual : function(object1, object2) {
      if (JSON.stringify(object1) === JSON.stringify(object2)) {
        console.log(passTest, green);
      } else {
        console.log(failTest, orange);
      }
    },

    toInclude : function(object1, object2) {
      if (object1.includes(object2)){
        console.log(passTest, green);
      } else {
        console.log(failTest, orange);
      }
    },

    toExist : function(object) {
     if (typeof condition !== 'undefined') {
       console.log(passTest, green);
     } else {
       console.log(failTest, orange);
     };
   }
  };

  exports.assert = assert;
})(this);
