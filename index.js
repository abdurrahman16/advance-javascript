// const numbers = [3,4,5,6,7];
// const output =[];
// for (let i =0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }

// numbers.map(function square (element){
//     return element*element;

// });

// // console.log(output);

//object property

const students =[
    {id: 21, name: 'omor sunny'},
    {id: 22, name: 'Mannaaa'},
    {id: 41, name: 'Myouri'},
    {id: 71, name: 'Dipjol'}
];

// var newStudent =[];
// for (var i =0; i<students.length; i++){
//     var elements =students[i];
//     newStudent.push(elements);
// }
// console.log(elements);
// console.log(newStudent.name[0]);

const names = students.map( s => s.name);
const ids = students.map( i => i.id);
const filters = students.filter( f => f.id > 40);
console.log(names);
console.log(ids);
console.log(filters);