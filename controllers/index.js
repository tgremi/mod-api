let numbers = {};

numbers.generateRandomNumber = (application, req, res) => {

    let document = {
        _id: application.utils.index.uniqueIdGenerator(),
        created: new Date()
    }

    application.models.index.createNumbers(document, (error, success) => {
        if (error) {
            throw error;
        } else {
            res.send({ code: 200 })
        }
    })

}



numbers.getNumber = async (application, req, res) => {

    let promise = new Promise((resolve, reject) => {
        application.models.index.getNumber((error, success) => {
            if (error) reject(error)
            else resolve(success);
        })
    })
    try {
        let result = await promise;
        let response = result[Math.floor(Math.random() * result.length)]
        res.send({ result: response, code: 200 })
    } catch (error) {
        throw error;
    }

}

module.exports = numbers; 