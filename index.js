let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

for(let i=0;i < weeklyExpenseQuestions.lenght;i++)
{
let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
weeklyExpenses = weeklyExpenses + answer
}
console.log(answer)
