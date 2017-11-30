var shop ={
	customerName: "Ratana",
	totalPrice: 0,
	products:[
	"Pizza",
	"Naan",
	"Sourdough",
	"Foccacia",
	"iPhonex"],
	price:[40,10,20,80,1000],
	displayCustomerName: function(){
		var customerElement =document.getElementById("customer-name");
		customerElement.innerHTML =this.customerName;
	},
		displayProductList: function(){
		var productsText ="";
		var productsElement = document.getElementById("product-list");
		for (var i = 0; i<5; i++){
			productsText = productsText+"<li class ='list-group-item'>" + this.products[i] + "<span class ='badge'>$" + this.price[i]+ "</li>";
		}

		productsElement.innerHTML = productsText;
	},
		displayTotalPice: function(){
			var totalPrice = 0;
			for( var i = 0; i<this.price.length; i++){
				totalPrice = totalPrice + this.price[i];
			}
			document.getElementById("price").innerHTML = "$" + (totalPrice-(totalPrice*0.25));
		}
	}
shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPice();

// var products = [
// 	"pizza","Naan","Sourdough","Foccacia","iPhonex"
// ];
// var price = [ 40,10,20,80,1000];
// var productstext ="";
// var productsElement = document.getElementById("product-list");

// for(var i = 0; i< products.length; i++){
// 	productstext = productstext +"<li class ='list-group-item'>" +products[i] + "<span class='badge'>$"+price[i] +"</li>";
// 	totalPrice = totalPrice + price[i];
// }

// document.getElementById("customer-name").innerHTML ="Ratana";
// document.getElementById("price").innerHTML ="$" +(totalPrice-(totalPrice*0.25));
// productsElement.innerHTML=productstext;

// var hour=new Date().getHours();
// // var hour = 10;
// if(hour<12){
// 	document.getElementById("greeting").innerHTML="Good Morning";
// 	// $("#greeting").html("Good morning");
// }else if(hour<18){
// 	document.getElementById("greeting").innerHTML="Good Afternoon";
// }else{
// 	document.getElementById("greeting").innerHTML="Good Evening";
