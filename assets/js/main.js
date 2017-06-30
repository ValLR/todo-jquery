$(document).ready(function(){ /*usamos ready para que el jquery sólo cargue cuando a página esté lista*/

	$("button").click(function(e){
		e.preventDefault();

		var tasks = $(#add).val();

		//if para validations
		if(tasks==""){
			alert("Please write down a task");
		}
		else{
		//si no está vacío el campo, encontes creamos un div para las taread completadas y la casilla/checkbox con lo que se recoge del input
		$("#tareas").append("<div class='hide-div'><input type='checkbox' id='casilla'><label for='ticket' id='ls'>"+ tasks + "</label><a class='hide-element'>x</a></div>");
		}
		$('#add').val(""); //<<<-- para limpiar donde ingreso tareas



	})

})