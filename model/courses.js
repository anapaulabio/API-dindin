const coursesList = require("../database/courses.json");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

//retorna a lista de cursos contidos no arquivo json
function getCoursesList() {
  return coursesList;
}

// adiciona um novo curso através do push utilizando os parâmetro da função
function insertCourse(titulo, professor, descricao) {
  const newCourse = {
    id: randomUUID(),
    titulo: titulo,
    descricao: descricao,
    professor: professor,
  };
  coursesList.push(newCourse);
  
  courseFile()
  return newCourse;
}

function updateCourse(id, titulo, descricao, professor) {
  const coursesListIndex = coursesList.findIndex((course) => course.id === id);
  coursesList[coursesListIndex] = {
    ...coursesList[coursesListIndex],
    titulo,
    descricao,
    professor
  }
  courseFile();
}

// localiza o id através do findIndex e exclui o curso de acordo com o id indicado através dp splice
function deleteCourse(id) {
  const coursesListIndex = coursesList.findIndex((course) => course.id === id);
  coursesList.splice(coursesListIndex, 1);
  courseFile()
}

//permite alteração do arquivo json
function courseFile() {
    fs.writeFileSync(
        path.resolve("database", "courses.json"),
        JSON.stringify(coursesList)
      );
}

//permite a exportação do arquivo
module.exports = { getCoursesList, insertCourse, updateCourse, deleteCourse };
