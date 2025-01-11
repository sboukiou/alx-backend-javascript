export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (emps = employeesList) => Object.keys(emps).length,
  };
}
