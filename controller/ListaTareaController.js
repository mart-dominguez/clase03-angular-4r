angular.module('app01').controller("ListaTareaController",
	['$scope','$location','TareaDao',function($scope,$location,tareaDao){
		$scope.tituloLista = "Lista de tareas";		
		$scope.listaTareas = tareaDao.buscarTodos();
	
		$scope.editarTarea = function(id){
			$location.path("/tarea/"+id);
		};

		// funcion que guarda una tarea
		$scope.nuevaTarea = function(){
			$location.path("/tarea");
		};

		// funcion que borra una tarea
		$scope.borrarTarea = function(tarea){
			tareaDao.borrarTarea(tarea);
			$scope.listaTareas = tareaDao.buscarTodos();
		};		
	}]
);