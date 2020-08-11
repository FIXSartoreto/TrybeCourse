const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const function1 = (obj, key, value) => {
  obj[key] = value;
  console.log(obj);
  return obj;
}
function1(lesson2, "turno", "manha");

const function2 = (obj) => console.log(Object.keys(obj));
function2(lesson1);

function3 = (obj) => console.log(Object.keys(obj).length);
function3(lesson2);

function4 = (obj) => console.log(Object.values(obj));
function4(lesson3);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const function6 = (obj) => {
  const studentNumber = Object.keys(obj);
  let number = 0;
  for (i in studentNumber) {
      number += obj[studentNumber[i]].numeroEstudantes;    
  }
  console.log(number);
}
function6(allLessons);

const function7 = (obj, pos) => {console.log(Object.values(obj)[pos])}
function7(lesson1, 0);

const function8 = (obj, key, value) => {
  const arrayKey = Object.keys(obj);
  let isTrue = false;
  
  for (i in arrayKey) {
    if (arrayKey[i] === key) {
      if (obj[arrayKey[i]] === value) {
        isTrue = true;
      }
    }
  }
  console.log(isTrue);
}
function8(lesson1, "turno", "manhã");

const functionb1 = (obj) => {
  let total = 0;
  const arrayKeys = Object.keys(obj);
  for (i in arrayKeys){
    if (obj[arrayKeys[i]].materia === "Matemática") {
      total += obj[arrayKeys[i]].numeroEstudantes
    }
  }
  console.log(total);
}
functionb1(allLessons);

const functionb2 = (obj, name) => {
  const lessons = [];
  let students = 0;
  const arrayValues = Object.values(obj);
  for (i in arrayValues) {
    if (arrayValues[i].professor === name) {
      lessons.push(arrayValues[i].materia);
      students += arrayValues[i].numeroEstudantes;
    }
  }
  const info = {materias: lessons, alunos: students};

  const report = {};
  report.professor = name;
  Object.assign(report, info);
  console.log(report);
}
functionb2(allLessons, "Carlos");
