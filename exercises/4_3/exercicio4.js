let n = 5;
let lineIndex;
let lineColumn;
let lineInput = '';
let simbolo = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex++) {
  for (lineColumn = 1; lineColumn <= n; lineColumn++) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + simbolo;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight--;
  controlLeft++;
};