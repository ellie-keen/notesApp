var assert = {
  toBeTrue : function(object) {
    if (object === true) {
      console.log('%c Pass! ', 'background: #222; color: #bada55');
    } else {
      console.log('%c You shall not pass! ', 'background: #222; color: orange');
    }
  },

  toBeFalse : function(object) {
    if (object === false) {
      console.log('%c Pass! ', 'background: #222; color: #bada55');
    } else {
      console.log('%c You shall not pass! ', 'background: #222; color: orange');
    }
  }
};
