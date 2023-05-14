function getAverage(marks){
    const sumOfMarks = marks.reduce((acc, mark) => acc + mark, 0);
    console.log (sumOfMarks);
    return Math.floor(sumOfMarks / marks.length);
}

console.log (getAverage(3, 4, 5))