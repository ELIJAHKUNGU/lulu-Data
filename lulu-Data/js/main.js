 // Get the modal
 var modal = document.getElementById("myModal");
    
 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 var cancel = document.getElementsByClassName("cancel");
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }

function display(){

    modal.style.display = "none";
}
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
 //Submit Display//

var  selectedRow = null; 
 function onFormSubmit() {
     var formData = readFormData();
     if(selectedRow == null){
         insertNewRecord(formData)
     }else{
         updateRecord(formData)

     }

     
      resetForm(); 
      modal.style.display = "none";

 }
 
 function readFormData() {
     var formData = {};
     formData["id"] = document.getElementById("id").value;
     formData["name"] = document.getElementById("name").value;
     formData["phone"] = document.getElementById("phone").value;
     return formData;
 }
 
 function insertNewRecord(data) {
     var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
     var newRow = table.insertRow(table.length);
     cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.id;
     cell1 = newRow.insertCell(1);
     cell1.innerHTML = data.name;
     cell2 = newRow.insertCell(2);
     cell2.innerHTML = data.phone;
     
     cell3 = newRow.insertCell(3)
     cell3.innerHTML = `<a onClick="onDelete(this)">Delete</a>`
     cell4 = newRow.insertCell(4)
     cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>`


     
 }
 
 function resetForm() {
    document.getElementById("id").value = "";
     document.getElementById("name").value = "";
     document.getElementById("phone").value = "";
     selectedRow = null;
   
 }
 
 function onEdit(td) {
    modal.style.display = "block";
     selectedRow = td.parentElement.parentElement;
     document.getElementById("id").value = selectedRow.cells[0].innerHTML;
     document.getElementById("name").value = selectedRow.cells[1].innerHTML;
     document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    
 }
 function updateRecord(formData) {
     selectedRow.cells[0].innerHTML = formData.id;
     selectedRow.cells[1].innerHTML = formData.name;
     selectedRow.cells[2].innerHTML = formData.phone;
     
 }
 
 function onDelete(td) {
     if (confirm('Are you sure to delete this record ?')) {
         row = td.parentElement.parentElement;
         document.getElementById("employeeList").deleteRow(row.rowIndex);
         resetForm();
     }
 }
 function validate() {
     isValid = true;
     if (document.getElementById("fullName").value == "") {
         isValid = false;
         document.getElementById("fullNameValidationError").classList.remove("hide");
     } else {
         isValid = true;
         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
             document.getElementById("fullNameValidationError").classList.add("hide");
     }
     return isValid;
 }



