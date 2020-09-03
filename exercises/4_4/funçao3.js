function indiceMenor(numbers){
    let index = 0;
    for (let i in numbers){
        if (numbers[index] > numbers[i]){
            index = i;
        }
    }
    return index;
}

console.log(indiceMenor([1, 10, -3, 12, 35, 28, -1, 10]));