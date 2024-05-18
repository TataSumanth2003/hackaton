let id=0;
const myTable=document.getElementById("myTable");

var expenses=[];

const addExpenses=()=>{

    const amount=document.getElementById("amount").value;
    const category=document.getElementById('category').value;
    const date=document.getElementById('date').value;
    const addExpense={id:id,amount:amount,category:category,date:date}
    expenses.push(addExpense);
    id++;
  
    show()

}
const show=()=>{
    myTable.innerHTML='';
    for(let i=0;i<expenses.length;i++){
   {        
            console.log(expenses);
            myTable.innerHTML+=`
            <tr><td>${expenses[i].id}</td>
            <td>${expenses[i].amount}</td>
            <td>${expenses[i].category}</td>
            <td>${expenses[i].date}</td>
            <td><button onclick="edit(${i})">EDIT</button></td>
            <td><button onclick="remove(${i})">DELETE</button></td><tr>`
        
        }
    }

}
const remove=(index)=>
    {
        expenses.splice(index);
        show();
    }

const edit=(index)=>{

    var edited=expenses[index];
    console.log(edited);
    const amount=document.getElementById("amount").value;
    const category=document.getElementById('category').value;
    const date=document.getElementById('date').value;
    expenses.splice(edited.id);
    edited.amount=amount;
    edited.category=category;
    edited.date=date;
    expenses[edited.id]=edited;


    // expenses.splice(index,1,30,[amount,category,date])
    show();


}

