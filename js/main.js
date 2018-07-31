	function comicPaint(name, size, color, stock, image) {
		this.name = name
		this.size = size
		this.color = color
		this.stock = stock
		this.image = image

	}

	var comicArray = []

	var batmanpaint = new comicPaint('Batman Paint', ' large ', ' black ', 25, "img/batman.jpg")
	var bazookapaint = new comicPaint('Bazooka Paint', ' large ', ' olive', 55, "img/bazooka.jpg")
	var captamericapaint = new comicPaint('CaptAmerica Paint ', ' medium ','blue', 45, "img/captamerica.jpg")
	var couplepaint = new comicPaint('Deadpool Paint ', 'large ', ' red', 25, "img/couplecon.jpg")
	var flashpaint = new comicPaint('Flash Paint ', ' small ', ' red ', 250, "img/flash.jpg")
	var flipoutpaint = new comicPaint('Ironman Paint ', ' large' , ' red ', 50, "img/flipout.jpg")
	var nerdypaint = new comicPaint('Harleyquin Paint ', ' medium' , ' rainbow ', 70, "img/nerdy.jpg")
	var panterpaint = new comicPaint('Panterman Paint ', ' large ', ' black ', 205, "img/panter.jpg")
	var thorpaint = new comicPaint('Thor Paint', 'large ', ' red' , 45, "img/thor.jpg")
	var wonderpaint = new comicPaint('Wonderwoman Paint ', ' small ', ' red ', 25, "img/wonder.jpg")

	comicArray.push(batmanpaint)
	comicArray.push(bazookapaint)
	comicArray.push(captamericapaint)
	comicArray.push(couplepaint)
	comicArray.push(flashpaint)
	comicArray.push(flipoutpaint)
	comicArray.push(nerdypaint)
	comicArray.push(panterpaint)
	comicArray.push(thorpaint)
	comicArray.push(wonderpaint)


for(i = 0; i < comicArray.length; i++) {
	var comicName = document.createTextNode(comicArray[i].name)
	var Size = document.createTextNode('Instore size ' + comicArray[i].size)
	var Color = document.createTextNode('Color ' + comicArray[i].color)
	var Stock = document.createTextNode('In stock ' + comicArray[i].stock)
	var Button = document.createTextNode('Auction Now ')
	var Image = comicArray[i].image


	var Col = document.createElement('div')
	var newDiv = document.createElement('div')
	var nameH1 = document.createElement('h1')
	var sizeH4 = document.createElement('h4')
	var colorH4 = document.createElement('h4')
	var stockH4 = document.createElement('h4')
	var AuctionNow = document.createElement('button')
	var image = document.createElement('img')



	nameH1.appendChild(comicName)
	sizeH4.appendChild(Size)
	colorH4.appendChild(Color)
	stockH4.appendChild(Stock)
	AuctionNow.appendChild(Button)
	AuctionNow.className = "btn btn-primary btn-lg"
	image.src = Image
	image.className = "img-responsive"


	Col.className = "col-sm-4"
	newDiv.className = 'paint comicName' + [i] + 'thumbnail'
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(AuctionNow)
	Col.appendChild(newDiv)

	document.getElementById('chucks').appendChild(Col)
}


	





