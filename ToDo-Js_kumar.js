// Problum: No interaction
// Solution: Add interaction using JS
var inputText			 = document.getElementById("add-task");
var addButton      		 = document.getElementById("add-button");
var incompleteTaskHolder = document.getElementById("Incomplete-task");
var completeTaskHolder   = document.getElementById("completed-task");


/*console.log(incompleteTaskHolder."input[type=checkbox]" );
console.log(addButton);
console.log(incompleteTaskHolder);
console.log(completeTaskHolder);
console.log(incompleteTaskHolder.childNodes);*/
//console.log(incompleteTaskHolder.childNodes );


// Null text will not allow it throughs an alert ... 
var addTaskMain = function(){
	if(inputText.value){
		addTask();
		}
	else{ alert("Please add task"); }
	}

// add new task
var addTask = function() {
	console.log("addTask");

	// append div element to ul(incomplete task)
	var divItem = document.createElement("div"); 	
	incompleteTaskHolder.appendChild(divItem);

	// create checkBox, set attribute for that and append it to the div...
	var checkBox 	 = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	divItem.appendChild(checkBox);  

	var labelNew	 	 = document.createElement("label");
	console.log(labelNew);

	divItem.appendChild(labelNew);

		// asign the text inside the newtask (input ) to a label
			var inputTask = inputText.value;
			labelNew.innerHTML = inputTask;


	//create span item for edit and delete button..
		var spanItem 	= document.createElement("span");
		divItem.appendChild(spanItem);	

			//create edit and delete button and append it to the spanItem..
				var editButton = document.createElement("button");
				editButton.textContent = "Edit";
				editButton.setAttribute("class", "editButton");	
				editButton.setAttribute("type", "button");			
				spanItem.appendChild(editButton);

				var deleteButton = document.createElement("button");	
				deleteButton.textContent = "Delete";							
				deleteButton.setAttribute("class", "deleteButton");
				deleteButton.setAttribute("type", "button");
				spanItem.appendChild(deleteButton);	

	
	bindTaskEvent(divItem,completeTask);

	clearField(inputText);
}
addButton.onclick = addTaskMain;	// event handlers.
//----------------------------------------------------

	// to clear the input text after addtask..
function clearField(input) {
    input.value = null;
};

//---------------------------------

	// on press enter key 

	function myFunction(event) {
	    var x = event.which || event.keyCode;
	    if(x == 13){
	    	addTaskMain();
		    }
		}	


//---------------------------------
//End of add task..............................................................................




// existing incomplete task
var incompleteTask = function() {
	console.log("incompleteTask");
	//when  a check box is changed
		// append the incomplete task  to complete task
	var test = completeTaskHolder.children[i];
	console.log(test);
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvent(incompleteTaskHolder.appendChild(listItem),completeTask);
}
//End of incomplete task..............................................................................	


// existing completed task 
var completeTask = function(){
	console.log("completeTask");
	// when a check box is changed
		// append the complete task  to incomplete task;
	var listItem = this.parentNode;
	completeTaskHolder.appendChild(listItem);
	bindTaskEvent(completeTaskHolder.appendChild(listItem),incompleteTask);
}
//End of complete task..............................................................................



//edit task
var editTask = function(){
	console.log("editTask");
	// edit button clicked
		//Target the parent node...
	var editItem = this.parentNode;
	console.log(editItem);

	var divEdit = editItem.parentNode;
	console.log(divEdit);
	
	var typeLabel   = divEdit.querySelector("label");	
	console.log(typeLabel);	

	var inputTypeText   = divEdit.querySelector("input[type = text]");	
	console.log(inputTypeText);

	var inputTextNew = document.createElement("input")
	inputTextNew.setAttribute("type", "text");

	var labelEdit	 	 = document.createElement("label");


	if(typeLabel){
		//console.log("this is label item");
		// asign the text 
		var labelText = typeLabel.innerHTML; 
		inputTextNew.value = labelText;

		divEdit.appendChild(inputTextNew);
		typeLabel.remove();

		this.innerHTML = "Save";

		}

	if(inputTypeText){
		console.log("this is inputTypeText item");	

		var inputText = inputTypeText.value;
		labelEdit.innerHTML = inputText;

		divEdit.appendChild(labelEdit);
		inputTypeText.remove();

		this.innerHTML = "Edit";

		}	
	}
//End of Edit task..............................................................................


//delete task
var deleteTask = function(){
	console.log("deleteTask");
	
	var deleteItem = this.parentNode;
	
	var deleteDiv = deleteItem.parentNode;
	
	deleteDiv.remove();
	
}


//End of delete task..............................................................................






var bindTaskEvent = function(divItem,taskHolder){

	//for selecting checkbox in incompletetaskholder || complete taskholder...
	var checkBox 		 = 	divItem.querySelector("input[type=checkbox]");	
	//bind the checkbox to incompletetask || completetask.....
	checkBox.onchange 	 = taskHolder;

	// binding edit task with edit button..
	var editButton = divItem.querySelector("button.editButton");
	//console.log(editButton);
	editButton.onclick = editTask;

	//binding delete task with delete button..
	var deleteButton = divItem.querySelector("button.deleteButton");
	//console.log(deleteButton);
	deleteButton.onclick = deleteTask;	
	
}



// traversing for div elements inside incompleteTaskHolder && completeTaskHolder 
	for( i=0; i < incompleteTaskHolder.children.length; i++ ){
		//console.log(incompleteTaskHolder.children); // for checking 
		bindTaskEvent(incompleteTaskHolder.children[i],completeTask);		
		}


	for(i=0; i < completeTaskHolder.children.length; i++){
		//console.log(completeTaskHolder.children); // for checking 
		bindTaskEvent(completeTaskHolder.children[i],incompleteTask);		
		}
