import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'peliculas.sqlite'
})

async function init() {
    await sequelize.sync()
}

init()

export { sequelize }