module.exports = function() {
    let faker = require("faker")
    let _ = require("lodash")

    return {
        people: _.times(10, function(n) {
            return {
                id: n +1,
                name: faker.name.findName(),
                avatar: faker.image.avatar(),
                phone: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                department: _.sample(["UI/UX", "Frontend", "Backend", "Tester", "Designer"])
            }
        })
    }
}