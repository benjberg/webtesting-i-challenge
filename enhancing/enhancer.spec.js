const {succeed,
    fail,
    repair,
    get,} = require('./enhancer.js');

    describe('./enhancer.js', function() {
        it('should run without errors', () =>{
            expect(true).toBe(true);
        })
        
        describe('.repair()', function () {
         it('return item durability to 100', function (){
             const item = {name: 'sword', durability: 54, enhancement: 10};
             const expected = {name: 'sword', durability: 100, enhancement: 10};
             const repairedItem = repair(item);
             expect(repairedItem).toEqual(expected)

         })
        })

        describe('.succeed()', function() {
            it('enhancment goes up by one', () =>{
                const item = {name: 'sword', durability: 100, enhancement: 12};
                const expected = {name: 'sword', durability: 100, enhancement: 13};
                const enhancedItem = succeed(item);
                expect(enhancedItem).toEqual(expected);
            })
        })

        describe('.fail()', function(){
            it('brings durability down by 5 if lvl is < 15', () => {
                const item = {name: 'sword', durability: 100, enhancement: 14};
                const expected = {name: 'sword', durability: 95, enhancement: 14};
                const failedItem = fail(item);
            expect(failedItem).toEqual(expected);
            })
            it('brings durability down by 10 if lvl is >= 15', () =>{
                const item = {name: 'sword', durability: 100, enhancement: 16};
                const expected = {name: 'sword', durability: 90, enhancement: 16};
                const failedItem = fail(item); 
                expect(failedItem).toEqual(expected);   
            })
            it('decreses enhancement lvl down by 1 if lvl > 16', ()=>{
                const item = {name: 'sword', durability: 100, enhancement: 17};
                const expected = {name: 'sword', durability: 90, enhancement: 16};
                const failedItem = fail(item); 
                expect(failedItem).toEqual(expected); 
            })
        })

        describe('.get()')
    })
