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
    
    update: (req, res) => {
        const {id} = req.params;
        const {titulo, descricao, professor} = req.body;
        const upCourse = modelCourses.updateCourse(id, titulo, descricao, professor);

        res.status(200).json({message: "Curso alterado com sucesso!"});
    },

    delete: (req, res) => {
        const {id} = req.params;
        const newList = modelCourses.deleteCourse(id);

        res.status(204).json({message:"Curso removido com sucesso"});
    }
}

module.exports = coursesController;