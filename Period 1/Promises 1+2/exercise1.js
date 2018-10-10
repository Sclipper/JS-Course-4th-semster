const crypto = require('crypto');
function makeSecureRandom(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, function (err, buffer) {
            if (err) {
                reject(err);
            }
            else {

                let secure = {}
                secure.length = resolve.length;
                secure.size = size;
                secure.randomByte = buffer.toString('hex')
                console.log(secure)

            };
        });
    });
};


Promise.all([
    makeSecureRandom(1),
    makeSecureRandom(10),
    makeSecureRandom(23),
    makeSecureRandom(32),
    makeSecureRandom(27),
    makeSecureRandom(201234234)])
    .then(resolve => {
        let rands = {
            "title": "Some randoms",
            "randoms": resolve
        }

    })
    .catch(reject => {
        console.log(reject)
    });

module.exports.makeSecureRandom = makeSecureRandom;