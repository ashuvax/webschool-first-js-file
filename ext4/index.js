let arnona = "";
let allocations = "";
const salary = parseFloat(prompt("Please enter your salary:"));
const people = parseInt(
  prompt("Please enter the number of people in your home:")
);
//minus water
let total = salary - 54 * people;
//minus electric bill
total = total - 77 * people;
//minus arnona
if (salary < 5000 && people > 2) {
  arnona = 260;
} else {
  arnona = 350;
}
total = total - arnona;
//minus Subtract rent
total = total - 2950;
//Family allocations
const child = people - 2;
if (child > 5) {
  allocations = 180 * child;
} else if (child > 3) {
  allocations = 203 * child;
}
total = total + allocations;

alert("After all, you have " + total * 12 + "$ at the end of the year");
