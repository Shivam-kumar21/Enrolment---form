var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["Name"] = document.getElementById("Name").value;
  formData["Mobile"] = document.getElementById("Mobile").value;
  formData["Email"] = document.getElementById("Email").value;
  formData["Address"] = document.getElementById("Address").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.Name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Mobile;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Address;

  cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> 
                    <button onClick="onDelete(this)">Delete</button>`
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("Mobile").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Address").value = selectedRow.cells[3].innerHTML;


}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.Name;
  selectedRow.cells[1].innerHTML = formData.Mobile;
  selectedRow.cells[2].innerHTML = formData.Email;
  selectedRow.cells[3].innerHTML = formData.Address;

}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("Name").value = "";
  document.getElementById("Mobile").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Address").value = "";
  selectedRow = null;
}