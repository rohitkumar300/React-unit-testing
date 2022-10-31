const functions = require('./functions')
//toBe
test("Adds 2 + 2 to equal 4",()=>{
    expect(functions.add(2,2)).toBe(4)
})

test("Adds 2 + 2 to not equal 5",()=>{
    expect(functions.add(2,2)).not.toBe(5)
})
//Falsy values
test("Should be null",()=>{
    expect(functions.isNull()).toBeNull()
})
//toEqual
test("Should return Rohit Kumar",()=>{
    expect(functions.createUser()).toEqual({FirstName: "Rohit",LastName: "Kumar"})
})

//toBeLessThan toBeLessThanOrEqual
test("Should have less than 200",()=>{
    expect(functions.marksCheck(100,90)).toBeLessThan(200);
})

//regex (toMatch)
test("There is no I in team",()=>{
    expect('team').not.toMatch(/I/)
})

//Arrays (toContain)
test('Human should be in species',()=>{
    species = ['Cat','Dog','Human'];
    expect(species).toContain('Human')
})

//Working with async data
test("User name should be leanne Graham",()=>{
    // expect.assertions(1)
    return functions.fetchUser()
    .then(data=>{
        expect(data.name).toEqual('Leanne Graham')
    })
})

//async await
