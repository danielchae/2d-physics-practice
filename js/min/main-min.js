function SpriteObject(){var e=new PIXI.Sprite(texture);return e.anchor.x=.5,e.anchor.y=.5,e.position.x=200,e.position.y=150,stage.addChild(e),e}function newSpriteObject(){var e=new PIXI.Sprite(texture);return e.anchor.x=.5,e.anchor.y=.5,e.position.x=200,e.position.y=150,stage.addChild(e),e}function PhysicsObject(){var e,n,i;e=Math.random()*ww+1,n=Math.random()*wh+1,i=25;var r=Bodies.rectangle(e,n,i,i);return bodies.push(r),r}function newPhysicsObject(){var e,n,i;e=Math.random()*ww+1,n=Math.random()*wh+1,i=25;var r=Bodies.rectangle(e,n,i,i);return newbodies.push(r),r}function newanimate(){requestAnimationFrame(animate);for(var e in newbunnies)newbunnies[e].sprite.position=newbunnies[e].body.position,newbunnies[e].sprite.rotation=newbunnies[e].body.angle;renderer.render(stage)}function animate(){requestAnimationFrame(animate);for(var e in bunnies)bunnies[e].sprite.position=bunnies[e].body.position,bunnies[e].sprite.rotation=bunnies[e].body.angle;renderer.render(stage)}var ww=$(window).width(),wh=$(window).height(),Engine=Matter.Engine,World=Matter.World,Bodies=Matter.Bodies,engine=Engine.create(document.body),ground=Bodies.rectangle(ww/2,wh+10,ww,10,{isStatic:!0}),bodies=[],newbodies=[];bodies.push(ground);var renderer=PIXI.autoDetectRenderer(ww,wh,{backgroundColor:1087931}),stage=new PIXI.Container;document.body.appendChild(renderer.view);for(var texture=PIXI.Texture.fromImage("http://www.goodboydigital.com/pixijs/bunnymark/bunny.png"),bunnies=[],newbunnies=[],createBunny=function(){return{sprite:new SpriteObject,body:new PhysicsObject}},createNewBunny=function(){return{sprite:new newSpriteObject,body:new newPhysicsObject}},i=0;150>i;i++)bunnies.push(createBunny());$("body").on("click",function(){console.log("clicked"),newbunnies.push(createNewBunny()),newanimate(),World.addBody(engine.world,newbodies),Engine.run(engine)}),animate(),World.add(engine.world,bodies),Engine.run(engine);