const numbers = [3,4,5,6,7];
const output =[];
for (let i =0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element*element;
    output.push(result);
}




numbers.map(function square (element){
    return element*element;

});

// console.log(output);