const {max, maxImproved} = require("../../article");

test("should return max of two given numbers", () => {
  const result = max(-1, -4);
  expect(result).toBe(-1);
});


describe('testing strings', ()=>{
    it('tests for the presence of a specific word', ()=>{
        const result = 'The Quick brown fox';
        expect(result).toMatch(/fox/);
    })

    it('tests for strings with toContainMatcher', ()=>{
        const result = 'Error: Invalid password';
        expect(result).toContain('Error');
    })

});

describe('Arrays', ()=>{
    const arr = ['Java', 'Python', 'JavaScript', 'Php'];
    it('tests the length of an array', ()=>{
        expect(arr.length).toBeGreaterThan(0);
    });

    it('tests for the existence of an Python in the array', ()=>{
        expect(arr).toContain('Python');
    });
});

describe('maxImproved', ()=>{
    const result = maxImproved(9, 8);

    it('returns the max of two given number', ()=>{
        expect(result).toBe(9);
    });

    it('should throw an error because greater or lesser than 2 args were supplied', ()=>{
        expect(()=>{maxImproved()}).toThrow();
        expect(()=>{maxImproved(1, 2, 3)}).toThrow();
        expect(()=>{maxImproved(1)}).toThrow();
    })
});

describe('Object testing', ()=>{
    const obj = {
        name: 'John Doe',
        age: '19',
        gender: 'Male',
        friends: ['Smith', 'Jane', 'Elliot']
    }

    expect(obj).toEqual({
        name: 'John Doe',
        age: '19',
        gender: 'Male',
        friends: ['Smith', 'Jane', 'Elliot']
    });
    expect(obj).toHaveProperty('name', 'John Doe');
    expect(obj).toHaveProperty('gender');

});