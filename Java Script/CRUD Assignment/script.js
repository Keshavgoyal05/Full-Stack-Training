cnt=4 
var employee = [{'Student ID':101,'Student Name':"keshav",'Stream':'IT','Marks':94},
                {'Student ID':102,'Student Name':"shyam",'Stream':'IT','Marks':94},
                {'Student ID':103,'Student Name':"Samyak",'Stream':'IT','Marks':93}];

function showForm(){
    document.getElementById("maindiv").style.display="none";
    document.getElementById("formdiv").style.display="block";
    var table = document.getElementById("maintable");
    var rowCount = table.rows.length;
    document.getElementById("sid").value=100+cnt;  
}
function showData(){
    document.getElementById("maindiv").style.display="block";
    document.getElementById("formdiv").style.display="none";
}
function showTable(){
    var keys=Object.keys(employee[0])
    var tableBody=document.getElementById("tbody");
    
    for(var i=0;i<employee.length;i++){
        var tr=document.createElement('TR');
        tableBody.appendChild(tr);

        for(var j=0;j<keys.length;j++){
            var td=document.createElement('TD');
            td.innerHTML=(employee[i])[keys[j]];
            tr.appendChild(td);
        }
        var td=document.createElement('TD');
        td.innerHTML='<button type="button" class="btn btn-danger btn-sm" onClick="deleteRow1(this)">Delete</button>&nbsp;'
        td.innerHTML+='<button type="button" class="btn btn-primary btn-sm" onClick="editRow(this)">Edit</button>'
        tr.appendChild(td);
    }
}

function addRow(){
    document.getElementById("maindiv").style.display="block";
    document.getElementById("formdiv").style.display="none";
    var table = document.getElementById("maintable");
    var sid = document.getElementById("sid");
    var sname = document.getElementById("sname");
    var sstream = document.getElementById("sstream");
    var smarks = document.getElementById("smarks");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= sid.value;
    row.insertCell(1).innerHTML= sname.value;
    row.insertCell(2).innerHTML= sstream.value;
    row.insertCell(3).innerHTML= smarks.value;
    row.insertCell(4).innerHTML='<button type="button" class="btn btn-danger btn-sm" onClick="deleteRow1(this)">Delete</button>&nbsp;<button type="button" class="btn btn-primary btn-sm" onClick="editRow(this)">Edit</button>';
    employee.push({'Student ID':sid.value,'Student Name':sname.value,'Marks':smarks.value});
    //console.log(employee);
    cnt+=1;
}

function deleteRow1(obj){
    var index = obj.parentNode.parentNode.rowIndex;
    console.log(index);
    document.getElementById("maintable").deleteRow(index);
}

function editRow(obj){  
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("maintable");
    table.rows[index].cells.item(0).innerHTML= '<input type="number" id="new_sid" value='+table.rows[index].cells.item(0).innerText+'>';
    table.rows[index].cells.item(1).innerHTML= "<input type='text' id='new_sname' value="+table.rows[index].cells.item(1).innerText+">";
    table.rows[index].cells.item(2).innerHTML= '<input type="text" id="new_sstream" value='+table.rows[index].cells.item(2).innerText+'>';
    table.rows[index].cells.item(3).innerHTML= '<input type="number" id="new_smarks" value='+table.rows[index].cells.item(3).innerText+'>';
    table.rows[index].cells.item(4).innerHTML='<button type="button" class="btn btn-danger btn-sm" onClick="deleteRow1(this)">Delete</button>&nbsp;<button type="button" class="btn btn-primary btn-sm" onClick="saveEditedRow(this)">Save</button>';
}
function saveEditedRow(obj){
    var sid = document.getElementById("new_sid");
    var sname = document.getElementById("new_sname");
    var sstream = document.getElementById("new_sstream");
    var smarks = document.getElementById("new_smarks");
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("maintable");
    table.rows[index].cells.item(0).innerHTML= sid.value;
    table.rows[index].cells.item(1).innerHTML= sname.value;
    table.rows[index].cells.item(2).innerHTML= sstream.value;
    table.rows[index].cells.item(3).innerHTML= smarks.value;
    table.rows[index].cells.item(4).innerHTML='<button type="button" class="btn btn-danger btn-sm" onClick="deleteRow1(this)">Delete</button>&nbsp;<button type="button" class="btn btn-primary btn-sm" onClick="editRow(this)">Edit</button>';
    
}

function search_table(){
    // Declare variables 
    var  filter, table, tr, td, i;
    var sid = document.getElementById("search_sid").value.toUpperCase();;
    var sname = (document.getElementById("search_sname")).value.toUpperCase();
    var sstream = (document.getElementById("search_sstream")).value.toUpperCase();
    var smarks = document.getElementById("search_smarks").value.toUpperCase();
    table = document.getElementById("maintable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td") ;
        if (td) {
            if(sid=="" && sname=="" && sstream=="" && smarks=="")
                tr[i].style.display="";
            else
            {
                if ((sid!="" && td[0].innerHTML.toUpperCase().indexOf(sid) > -1) || 
                    (sname!="" && td[1].innerHTML.toUpperCase().indexOf(sname) > -1) || 
                    (sstream!="" && td[2].innerHTML.toUpperCase().indexOf(sstream) > -1) ||
                    (smarks!="" && td[3].innerHTML.toUpperCase().indexOf(smarks) > -1) ) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        } 
    }
}

function Clear(){
    document.getElementById("search_sid").value="";
    document.getElementById("search_sname").value="";
    document.getElementById("search_sstream").value="";
    document.getElementById("search_smarks").value="";
    search_table();
}

function sortByName() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("maintable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

function sortByMarks() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("maintable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];
        if (parseInt(x.innerHTML.toLowerCase()) > parseInt(y.innerHTML.toLowerCase())) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}