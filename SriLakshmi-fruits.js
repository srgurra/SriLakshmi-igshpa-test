const json = require('./Input.json');

const mappedResults = json.reduce(function(results, value) {
    const fruits_picked = JSON.stringify(value.fruits_picked.sort());
    if (results.hasOwnProperty(fruits_picked)) {
        results[fruits_picked] += 1;
    } else {
        results[fruits_picked] = 1;
    }

    return results;
}, {});

var results = [];
for (let key in mappedResults) {
    results.push([key, mappedResults[key]]);
}

results.sort(function(a, b) {
    return b[1] - a[1];
});

results
    .slice(0, 20)
    .map(function(value) {
        return JSON.parse(value[0]) + ' picked ' + value[1] + ' times';
    })
    .forEach(function(value) {
        console.log(value);
    });