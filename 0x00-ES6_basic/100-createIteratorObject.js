export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).reduce((occ, value) => [...occ, ...value], []);
}
