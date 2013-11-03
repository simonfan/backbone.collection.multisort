define(['backbone.collection.multisort'], function(MultiSort) {

return function() {

    QUnit.module('Base', {
        setup: function() {
            window.fruits = [];

            fruits.push({
                name: 'Orange',
                price: 3,
                quantity: 20,
            });

            fruits.push({
                name: 'Banana',
                price: 4,
                quantity: 20,
            });

            fruits.push({
                name: 'Apple',
                price: 4,
                quantity: 30,
            });
        },
        teardown: function() {
            delete window.fruits;
        }
    });

    test('Base', function() {
        var fr = new MultiSort(fruits);
        ok(fr);

        ok(fr.multisort)
    });


    test('sort([\'name\'])', function() {
        var fr = new MultiSort(fruits);

        fr.multisort(['name'], 1);

        console.log(fr);

        deepEqual(fr.pluck('name'), ['Apple','Banana','Orange']);
    });

    test('isSorted(attributes, directions)', function() {
        var fr = new MultiSort(fruits),
            sortingAttributes = ['name'],
            sortingDirections = 1;

        ok(!fr.isSorted(sortingAttributes, sortingDirections), 'befoer sort')

        fr.multisort(sortingAttributes, sortingDirections);

        ok(fr.isSorted(sortingAttributes, sortingDirections));
    });

}
});
