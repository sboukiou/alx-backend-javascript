interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
	firstName : 'Dias',
	lastName : 'Said',
	age: 20,
	location : 'Sparta'
};
const secondStudent: Student = {
	firstName : 'Said',
	lastName : 'Dias',
	age: 20,
	location : 'Athena'
};

type stdList = Array<Student>
const studentList: stdList = [firstStudent, secondStudent];

const body = document.getElementsByTagName('body')[0]
const table = document.createElement('table');
const titleRow = document.createElement('tr');
const titleFname = document.createElement('th');
const titleLocation = document.createElement('th');

titleFname.innerText = 'firstName';
titleLocation.innerText = 'location'

table.append(titleRow)
titleRow.append(titleFname)
titleRow.append(titleLocation)

for (const element of studentList) {
	const studentRow = document.createElement('tr')
	const fname = document.createElement('th')
	fname.innerText = element.firstName
	studentRow.append(fname)
	const loc = document.createElement('th')
	loc.innerText = element.location
	studentRow.append(loc)
	table.append(studentRow)
}
body.append(table)
