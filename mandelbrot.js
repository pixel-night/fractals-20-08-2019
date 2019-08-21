const scopeX = .5
const scopeY = .5

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1)
	loadPixels()
	
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			
			let a = map(x, 0, width, -scopeX, scopeX)
			let b = map(y, 0, height, -scopeY, scopeY)
			
			let count = 0
            let zA = a
            let zB = b
			while(count < 100 && a + b < 10){
              let real = a * a - b * b
              let img = 2 * a * b
              
              a = real + zA
              b = img + zB
  			  count++
            }
            
            let norm = map(count, 0, 100, 0, 1)
			const pixel = ((width * y) + x) * 4;
			let cor = norm * 255;
			pixels[pixel] = cor * .5;
			pixels[pixel + 1] = cor * .2;
			pixels[pixel + 2] = cor;
            pixels[pixel + 3] = 255;
        }
	}
  
    updatePixels()
}

function draw() {
}const scopeX = .5
const scopeY = .5

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1)
	loadPixels()
	
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			
			let a = map(x, 0, width, -scopeX, scopeX)
			let b = map(y, 0, height, -scopeY, scopeY)
			
			let count = 0
            let zA = a
            let zB = b
			while(count < 100 && a + b < 10){
              let real = a * a - b * b
              let img = 2 * a * b
              
              a = real + zA
              b = img + zB
  			  count++
            }
            
            let norm = map(count, 0, 100, 0, 1)
			const pixel = ((width * y) + x) * 4;
			let cor = norm * 255;
			pixels[pixel] = cor * .5;
			pixels[pixel + 1] = cor * .2;
			pixels[pixel + 2] = cor;
            pixels[pixel + 3] = 255;
        }
	}
  
    updatePixels()
}

function draw() {
}const scopeX = .5
const scopeY = .5

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1)
	loadPixels()
	
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			
			let a = map(x, 0, width, -scopeX, scopeX)
			let b = map(y, 0, height, -scopeY, scopeY)
			
			let count = 0
            let zA = a
            let zB = b
			while(count < 100 && a + b < 10){
              let real = a * a - b * b
              let img = 2 * a * b
              
              a = real + zA
              b = img + zB
  			  count++
            }
            
            let norm = map(count, 0, 100, 0, 1)
			const pixel = ((width * y) + x) * 4;
			let cor = norm * 255;
			pixels[pixel] = cor * .5;
			pixels[pixel + 1] = cor * .2;
			pixels[pixel + 2] = cor;
            pixels[pixel + 3] = 255;
        }
	}
  
    updatePixels()
}

function draw() {
}const scopeX = .5
const scopeY = .5

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1)
	loadPixels()
	
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			
			let a = map(x, 0, width, -scopeX, scopeX)
			let b = map(y, 0, height, -scopeY, scopeY)
			
			let count = 0
            let zA = a
            let zB = b
			while(count < 100 && a + b < 10){
              let real = a * a - b * b
              let img = 2 * a * b
              
              a = real + zA
              b = img + zB
  			  count++
            }
            
            let norm = map(count, 0, 100, 0, 1)
			const pixel = ((width * y) + x) * 4;
			let cor = norm * 255;
			pixels[pixel] = cor * .5;
			pixels[pixel + 1] = cor * .2;
			pixels[pixel + 2] = cor;
            pixels[pixel + 3] = 255;
        }
	}
  
    updatePixels()
}

function draw() {}
