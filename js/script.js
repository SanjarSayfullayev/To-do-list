
let add = document.querySelector(".add");
let tbody = document.querySelector("tbody");
let fio = '';
let group = '';
let count = '';
let globalId = null;
add.addEventListener('click', (event) =>{
    event.preventDefault()
    

    fio = document.querySelector(".fio").value
    group = document.querySelector(".group").value
    if(fio == "" || group == "") {
        alert("Text kiritish kerak")
    }
    else{
        count++
        tableData.push({
            number: count,
            fio: fio,
            group: group,
            eventt: "Editing",
            deleteButton: "Delete"
    })

    // console.log(fio);
    // console.log(group);
    tbody.innerHTML = "";
    createTable(fio, group);
    }
    
})

function createTable(Fio,Group){
    
    
    tableData.map(data => {
        let tr = document.createElement("tr");
        let numberTD = document.createElement("td");
        let fioTD = document.createElement("td");
        let groupTD = document.createElement("td");
        let eventTD = document.createElement("td");
        let deleteTD = document.createElement("td");

        numberTD.innerText = data.number;
        fioTD.innerText = data.fio;
        groupTD.innerText = data.group;

        let tahrirlashTugmasi = document.createElement("button");
        tahrirlashTugmasi.classList.add("btn", "btn-warning");
        tahrirlashTugmasi.setAttribute("onclick", `uzgartirish(${data.number})`);
        eventTD.appendChild(tahrirlashTugmasi);
        tahrirlashTugmasi.innerText = data.eventt;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.setAttribute("onclick", `deleteItem(${data.number})`);
        deleteTD.appendChild(deleteButton);
        deleteButton.innerText = data.deleteButton;

        tr.appendChild(numberTD);
        tr.appendChild(fioTD);
        tr.appendChild(groupTD);
        tr.appendChild(eventTD);
        tr.appendChild(deleteTD);

        tbody.appendChild(tr);
    })
    document.querySelector(".fio").value = "";
    document.querySelector(".group").value = "";
    // console.log(tahrirlashTugmasi);
    // console.log(numberTD);
    // console.log(fioTD);
    // console.log(groupTD);
}
function uzgartirish(val){
    console.log(val);
    globalId = val;

    console.log(tableData[val-1]);

    document.querySelector(".fio").value= tableData[val-1].fio;
    document.querySelector(".group").value = tableData[val-1].group;
}


const edit = document.querySelector(".edit");
edit.addEventListener("click", (val) => {
    val.preventDefault()
    // console.log("Ishlavoti");
    // console.log(globalId);
    tableData[globalId-1].fio = document.querySelector(".fio").value
    tableData[globalId-1].group = document.querySelector(".group").value

    tbody.innerHTML = ""
    createTable()
})

function deleteItem (val){
    console.log(val);

    for(let i = 0; i < tableData.length; i++){
        if(tableData[i].number == val){
            tableData.splice(i, 1)
        }
    }
    
    tbody.innerHTML = ""
    createTable()
}
