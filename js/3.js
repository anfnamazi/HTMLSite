

var product= {
	name: "Peach",
	sku: 'peach', 
	price: 15
}
console.log(product);
	

function Product(name, sku, price) {     
this.name = name;     
this.sku = sku;     
this.price = price;     
this.tax = 0.05; 
this.finalprice = function() {       return this.price * (1 + this.tax);}
}

var peach = new Product("Peach", "peach", 15);     
document.write("<p>Peach price: ");     
document.write(peach.finalprice());     
document.write("</p>"); 
