let skills = ["JS", "NODE", "HTML", "CSS", "REACT"];
let resultado = "";

const changeX = (param1) => {
  let str = `Olá, ${param1} aqui!
  Tudo bom?`
  return str;
}

const concatSkills = () => {
  skills = skills.sort();
  skillList = "";
  for (let i = 0; i < skills.length; i += 1){
    skillList += `
    ${skills[i]}`;
  }
  let resultado = `${changeX("André")}
  Minhas cinco principais habilidades são: ${skillList}`;
  console.log(resultado);
}

concatSkills();