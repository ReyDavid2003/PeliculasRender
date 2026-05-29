import { Pelicula } from '../modules/pelicula.model.js'

const getAll = async () => {
    return await Pelicula.findAll()
}

const getById = async (id) => {
    return await Pelicula.findByPk(id)
}

const create = async (data) => {
    return await Pelicula.create(data)
}

const update = async (id, data) => {
    return await Pelicula.update(data, {
        where: { id }
    })
}

const remove = async (id) => {
    return await Pelicula.destroy({
        where: { id }
    })
}

export { getAll, getById, create, update, remove }