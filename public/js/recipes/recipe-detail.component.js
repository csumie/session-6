angular.module('foodApp').component('recipeDetail', {
	templateUrl: 'js/recipes/recipe-detail.template.html',
	controller: function RecipeListController($routeParams, $http) {

		$http.get('data/' + $routeParams.recipeId + '.json')
		.then(response => {
			this.recipe = response.data
			this.setImage(this.recipe.images[2])
		});
		this.setImage = imageUrl =>
			this.mainImageUrl = imageUrl;
		// this.recipeId = $routeParams.recipeId;
	}
});



