angular.module('foodApp').component('reviewDetail', {
	templateUrl: 'js/reviews/review-detail.template.html',
	controller: function ReviewListController($routeParams, $http) {
	
		$http.get('data/' + $routeParams.reviewId + '.json')
		.then(response => {
			this.review = response.data
			this.setImage(this.review.images)
		});
		
		this.setImage = imageUrl =>
			this.mainImageUrl = imageUrl;
		}

});



