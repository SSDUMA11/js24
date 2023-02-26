const employees = {
    development: {
        backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
        frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
    },
    sales: {
        marketing: {
            internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
            promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
        },
        sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    },
    designer: [{name: 'Kate', salary: 1800}]
}

function sumSallary(obj) {
    let sum = 0;
    function calculateSalary(obj) {
        for (let key in obj) {
            if (Array.isArray(obj[key])) {
                obj[key].forEach(employee => sum += employee.salary);
            } else {
                calculateSalary(obj[key]);
            }
        }
    }
    calculateSalary(obj);
    return sum;
}
let totalSalary = sumSallary(employees);
console.log(totalSalary);
