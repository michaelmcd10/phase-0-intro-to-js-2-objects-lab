// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};


const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
console.log(updatedEmployee);


destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
console.log(employee);


const employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
console.log(employeeWithoutName);


destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log(employee);
