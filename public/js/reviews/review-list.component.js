angular.module('foodApp').component('reviewList', {
	templateUrl: 'js/reviews/review-list.template.html',
	controller: function ReviewListController($http) {
    this.orderProp = 'date'
    $http.get('data/reviews.json')
		.then((response) => this.reviews = response.data)
	}
})