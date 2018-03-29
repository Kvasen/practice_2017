
var filters ={
	all: function(todos){
		return todos;
	},
	active:function(todos){
		return todos.filter(function(todo){
			return !todo.completed;
		});
	},
	completed:function(todos){
		return todos.filter(function(todo){
			return todo.completed;
		});
	}
};

new Vue({
	el: '.todoapp',
	data: {
		todos: [],
		newTodo: '',
		visibility: 'all',
		editedTodo: null
	},
	methods: {
		addTodo: function(){
			var value = this.newTodo && this.newTodo.trim();
			if(!value){
				return;
			}
			this.todos.push({
				title:value,
				completed:false
			});
			this.newTodo = '';
		},
		ck: function(){
			$(".new-todo").removeAttr("readonly");
			console.log("editing...");
		},
		bl: function(){
			$(".new-todo").attr("readonly","readonly");
			console.log("saved")
		},
		removeTodo: function(todo){
			this.todos.$remove(todo);
		},
		editTodo: function(todo){
			this.beforeEditCache= todo.title;
			this.editedTodo=todo;
		},
		cancelEdit: function(todo){
			this.editedTodo= null;
			todo.title= this.beforeEditCache;
		}
	},
	computed: {
		filteredTodos: function(){
			return filters[this.visibility](this.todos);
		}
	}
})