var ww = $(window).width();
var wh = $(window).height();

// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create a Matter.js engine
var engine = Engine.create(document.body);
var ground = Bodies.rectangle((ww/2), (wh+10), ww, 10, { isStatic: true });	// x, y, w, h
var bodies = [];
var newbodies = [];
bodies.push(ground);





var renderer = PIXI.autoDetectRenderer(ww, wh,{backgroundColor : 0x1099bb});
var stage = new PIXI.Container();
document.body.appendChild(renderer.view);

var texture = PIXI.Texture.fromImage('http://www.goodboydigital.com/pixijs/bunnymark/bunny.png');

var bunnies = [];
var newbunnies = [];

function SpriteObject() {
	// create a new Sprite using the texture
	var bunny = new PIXI.Sprite(texture);
	
	// center the sprite's anchor point
	bunny.anchor.x = 0.5;
	bunny.anchor.y = 0.5;
	// move the sprite to the center of the screen
	bunny.position.x = 200;
	bunny.position.y = 150;	
	
	stage.addChild(bunny);
	return bunny;
};
function newSpriteObject() {
	// create a new Sprite using the texture
	var bunny = new PIXI.Sprite(texture);
	
	// center the sprite's anchor point
	bunny.anchor.x = 0.5;
	bunny.anchor.y = 0.5;
	// move the sprite to the center of the screen
	bunny.position.x = 200;
	bunny.position.y = 150;	
	
	stage.addChild(bunny);
	return bunny;
};

function PhysicsObject() {
	// create two boxes and a ground
	var x, y, scale;
	x = (Math.random() * ww) + 1;
	y = (Math.random() * wh) + 1;
// 	scale = (Math.random() * 20) + 20;
	scale = 25;
	var box = Bodies.rectangle(x, y, scale, scale);
	
	bodies.push(box);
	return box;
};
function newPhysicsObject() {
	// create two boxes and a ground
	var x, y, scale;
	x = (Math.random() * ww) + 1;
	y = (Math.random() * wh) + 1;
// 	scale = (Math.random() * 20) + 20;
	scale = 25;
	var box = Bodies.rectangle(x, y, scale, scale);
	
	newbodies.push(box);
	return box;
};








var createBunny = function() {
	return {
		sprite: new SpriteObject(),
		body: new PhysicsObject()
	};
};
var createNewBunny = function() {
	return {
		sprite: new newSpriteObject(),
		body: new newPhysicsObject()
	};
};







for(var i=0; i < 150; i++) {

	
	bunnies.push(createBunny());
}



$('body').on('click',function(){
	console.log('clicked');
	
	newbunnies.push(createNewBunny());
	newanimate();
	World.addBody(engine.world, newbodies);
	Engine.run(engine);
})




// start animating

function newanimate() {
	requestAnimationFrame(animate);
	
	for(var b in newbunnies) {
		newbunnies[b].sprite.position = newbunnies[b].body.position;
		newbunnies[b].sprite.rotation = newbunnies[b].body.angle;
	}
	
	// render the container
	renderer.render(stage);
}





// start animating
animate();
function animate() {
	requestAnimationFrame(animate);
	
	for(var b in bunnies) {
		bunnies[b].sprite.position = bunnies[b].body.position;
		bunnies[b].sprite.rotation = bunnies[b].body.angle;
	}
	
	// render the container
	renderer.render(stage);
}

// add all of the bodies to the world
World.add(engine.world, bodies);

// run the engine
Engine.run(engine);