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
  },

  toEqual : function(object1, object2) {
    if (JSON.stringify.object1 === JSON.stringify.object2) {
      console.log('%c Pass! ', 'background: #222; color: #bada55');
    } else {
      console.log('%c You shall not pass! ', 'background: #222; color: orange');
    }
  },

  toInclude : function(object1, object2) {
    if (object1.includes(object2)){
      console.log('%c Pass! ', 'background: #222; color: #bada55');
    } else {
      console.log('%c You shall not pass! ', 'background: #222; color: orange');
    }
  }

};
