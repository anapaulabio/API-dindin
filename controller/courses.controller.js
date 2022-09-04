const modelCourses = require('../model/courses');

const coursesController = {
    get: (req, res) => {
        res.json(modelCourses.getCoursesList())
        res.status(200)
    },

    insert: (req, res) => {
        const {titulo, professor, descricao} = req.body;
        const newCourse = modelCourses.insertCourse(titulo, professor, descricao);

        res.status(204).json(newCourse);
    },
    
    delete: (req, res) => {
        const {id} = req.params;
        const newList = modelCourses.deleteCourse(id);

        res.status(204).json({message:"Curso removido com sucesso"});
    }
}

module.exports = coursesController;