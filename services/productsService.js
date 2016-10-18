myApp.service('productsService', function($http){
	var products = [
	{
		"id": 167687,
		"title": "A Kind of Guise Mindelo T-Shirt (White)",
		"price": "80.00",
		"retailer": "Oipolloi",
		"image": "https://static.grabble.com/products/167687/149509c8ea32f07ab0027064b9b2b7ce.jpg"
	}, 
	{
		"id": 167790,
		"title": "Linen-Cotton crew pullover",
		"price": "29.95",
		"retailer": "Gap",
		"image": "https://static.grabble.com/products/167790/dba4bd52b9764818c780fb4e471fa741.jpg"
	}, 
	{
		"id": 168012,
		"title": "ASOS Skinny Blazer In Cotton",
		"price": "65.00",
		"retailer": "ASOS",
		"image": "https://static.grabble.com/products/168012/324927f3437e024b7301bdc05c542c28.jpg"
	}, 
	{
		"id": 168013,
		"title": "Julep Printed Crew Neck Jumper",
		"price": "50.00",
		"retailer": "French Connection",
		"image": "https://static.grabble.com/products/168013/c1385ee4ba25e9c67cbade7071a9670c.jpg"
	}];

	var selectedProd = [];
	
	this.getProducts = function() {
		return products;
	}

	this.getSelectedProds = function() {
		return selectedProd;
	}

	this.select = function(prod) {
		if (!this.isSelected(prod.id)) {
			this.add(prod);
		} else {
			this.remove(prod)
		}
	}

	this.remove = function(prod) {
		_.remove(selectedProd, function(p) {
	  		return p.id === prod.id;
		});
	}

	this.add = function(prod) {
		selectedProd.push(prod);
	}

	this.isSelected = function(id) {
		return this.getProductById(selectedProd, id);
	}

	this.initSelected = function(arr) {
		selectedProd = arr;
	}

	this.getProductById = function(arr, id) {
		return _.find(arr, function(prod) { return prod.id === id; });
	}

	return this;

});