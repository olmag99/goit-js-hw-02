function countTotalSalary(salaries) {
  let totalSalary = 0;
  let salaryValues = Object.values(salaries);
  for (let salary of salaryValues) {
    totalSalary += salary;
  };
  return totalSalary
};

countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })