const {Scene, Path} = spritejs

;(function () {
  // // module aliases
  // const {Engine, World, Composites, Composite, Bodies} = Matter;

  // // create an engine
  // const engine = Engine.create();
  // // engine.world.gravity.scale = 0; //turn off gravity (it's added back in later)

  // const stackA = Composites.stack(100, 100, 6, 6, 0, 0, function(x, y) {
  //   return Bodies.rectangle(x, y, 15, 15,{
  //         // friction: 0,
  //         // frictionAir: 0,
  //         // frictionStatic: 0,
  //         // restitution: 1
  //   });
    
  // });
  // //access stackA elements with:   stackA.bodies[i]   i = 1 through 6x6

  // const wall = Bodies.rectangle(400, 300, 500, 20, {
  //   isStatic: true
  // });
  // World.add(engine.world, [stackA, wall]);

  // const offset = 5;
  // World.add(engine.world, [
  //   Bodies.rectangle(400, -offset, 800 + 2 * offset, 50, {
  //     isStatic: true,
  //   }),
  //   Bodies.rectangle(400, 600 + offset, 800 + 2 * offset, 50, {
  //     isStatic: true,
  //   }),
  //   Bodies.rectangle(800 + offset, 300, 50, 600 + 2 * offset, {
  //     isStatic: true,
  //   }),
  //   Bodies.rectangle(-offset, 300, 50, 600 + 2 * offset, {
  //     isStatic: true,
  //   })
  // ]);

  // const scene = new Scene('#container', {resolution: [1200, 800]})
  // const fglayer = scene.layer('fglayer')

  // const blocks = []
  // const offsetX = 50, offsetY = 50

  // function render() {
  //   Engine.update(engine, 16)
  //   const bodies = Composite.allBodies(engine.world)
  //   // console.log(bodies)
  //   for(let i = 0; i < bodies.length; i++) {
  //     const body = bodies[i],
  //       {vertices, position, angle} = body

  //     const {x:x0, y:y0} = vertices[0]
  //     let d = `M0,0`
  //     for(let j = 1; j < vertices.length; j++) {
  //       const x = vertices[j].x - x0,
  //         y = vertices[j].y - y0
  //       d += `L${x},${y}`
  //     }
  //     d += 'z'
  //     let path = blocks[i]
  //     if(!path) {
  //       path = new Path()
  //       path.attr({
  //         anchor: 0.5,
  //         path: {d, trim: true},
  //         pos: [position.x + offsetX, position.y + offsetY],
  //         rotate: 180 * angle / Math.PI,
  //         strokeColor: 'black',
  //       })
  //       blocks[i] = path
  //       fglayer.append(path)
  //     } else {
  //       path.attr({
  //         pos: [position.x + offsetX, position.y + offsetY],
  //         rotate: 180 * angle / Math.PI,
  //       })
  //       //console.log(angle)
  //     }
  //     // console.log(body)
  //     // break
  //   }
  //   window.requestAnimationFrame(render)
  // }

  // render()
}())