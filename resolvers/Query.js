const data = require('../data/db')

module.exports = {
    alunos: () => {
        console.log("Alunos: ", data.alunos)
        return data.alunos
    }
}