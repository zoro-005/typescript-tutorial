// let sales = 123_456_789;
// let course = 'TypeScript'
// let is_published = true
// let level;

// function render(document: any){
//     console.log(document);
// }

// let numbers: number[] = [1, 2, 3];

// let user: [number, string] = [1, 'User']
// console.log(user[0]);
// console.log(user[1]);
// enum Size  {Small = 99 , Medium, Large}
// let mySize: Size = Size.Large;
// console.log(mySize);
// function calculateTax (income: number, tax_year = 2022): number{
//     if (tax_year < 2022){
//         return income * 1.2
//     }
//     return income * 1.3
// }
// calculateTax(50_000, 2025);
// type Employee = {
//     readonly id: number,
//     emp_name: string,
//     retire: (date: Date) => void
// }
// let employee: Employee = {id: 1, emp_name : "noob", retire: (date: Date) => {console.log(date)}};
// employee.emp_name = "pro"
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
