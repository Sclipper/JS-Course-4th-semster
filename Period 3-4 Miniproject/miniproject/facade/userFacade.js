const testData = [
    {car: "Saab", type: "Mid car"},
    {car: "Volvo", type: "Good car"},
    {car: "BMW", type: "Luxury car"}
];

function addUser(data) {
    testData.push(data);
}

function getAllUsers() {
    return testData;
}

function findByUserName(username) {
    let searchName = username.req.params.user_name;

    for (let i = 0; i < testData.length; i++) {
        if (testData[i].car === searchName) {
            return testData[i];
        } else {
            return "Sorry no results";
        }
    }
}

module.exports = {
    addUser,
    getAllUsers,
    findByUserName
};