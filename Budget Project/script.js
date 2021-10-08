const buttonNext = document.querySelector('#buttonNext')
const budget = document.querySelector('#budget')



let salary=0;
buttonNext.addEventListener('click',() => {
    if(budget.value<0) return;
    salary=budget.value
    console.log(salary)
})
console.log(salary)