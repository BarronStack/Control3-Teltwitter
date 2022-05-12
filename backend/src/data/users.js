import { faker } from '@faker-js/faker'

exports.getUsers = () => {
    const users = []
    for (let i = 1; i <= 10; i++) {
        users.push(getFakeUser(i))
    }
    return users
}

function getFakeUser (id) {
    return {
        id,
        name: faker.name.findName(),
        email: faker.internet.email()
    }
}
