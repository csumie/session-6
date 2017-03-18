angular.module('foodApp').component('recipeList', {
	templateUrl: 'js/recipes/recipe-list.template.html',
	controller: function RecipeListController($http) {
		this.orderProp = 'date'
		$http.get('data/recipes.json')
		.then((response) => this.recipes = response.data)
	}
})





















