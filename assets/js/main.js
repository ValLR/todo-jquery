$(document).ready(function(){ /*con ready el jquery sólo carga cuando a página esté lista*/

	$("button").click(function(e){
		e.preventDefault();

		var tasks = $("#add").val();

		//if para validations
		if (tasks=="") {
			alert("Please write down a task");
		}
		else{
		//si no está vacío el campo, encontes creamos un div para las taread completadas y la casilla/checkbox con lo que se recoge del input
		$("#tasks").append("<div class='hide-div'><input type='checkbox' id='casilla'><label for='casilla' id='ls'>"+ tasks + "</label><a class='hide-element'>x</a></div>");
		}
		$('#add').val(""); //<<<-- para limpiar donde ingreso tareas


		$(document).on("click", ".hide-element", function(){ /*eliminamos tareas clickeando la x*/
			$(this).parent().remove();
		});

		$(document).on("click", "#checkbox", function(){
			//se elimina el ticket(todo) en el primer nodo y se le agrega al otro nodo.
			var erase = $(this).parent().remove();
			$("#completed-task").append(erase);
		});
	});

})


