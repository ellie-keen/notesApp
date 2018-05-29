describe('Sample tests that return True or False');
  it('should evaluate to true');
    assert.toBeTrue(true);

  it('should evaluate to false');
    assert.toBeFalse(false);

describe('Sample tests that compare the equality of two objects');

  it('should be equal');
    assert.toEqual(40, 40);

  it('should be equal');
    assert.toEqual('hello', 'hello');


  it('should be equal');
    assert.toEqual( {'hello': 1 }, {'hello': 1 });

  it('should be equal');
    assert.toEqual([3, 5, 6], [3, 5, 6]);
