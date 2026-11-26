import { Application, Assets, Container, Sprite } from 'pixi.js';
import cookieUrl from './christiancookie.jpg';
let score = 0;

(async () =>  {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({
    resizeTo: window,
    backgroundAlpha: 0
});

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);

  // Create and add a container to the stage
  const container = new Container();

  app.stage.addChild(container);

    const texture = await Assets.load(cookieUrl);
    const sprite = new Sprite(texture);
    sprite.anchor.set(0.5);
    sprite.position.set(100, 100);
    
    container.addChild(sprite);
    const heading = document.querySelector('#scorey');
    document.querySelector('#game').appendChild(app.canvas);

    sprite.eventMode = 'static';
    sprite.on('pointerdown', (event) => {
    console.log('Clicked at:', event.global.x, event.global.y);
    score++;
    
    //alert(score);
     heading.textContent = `Score: ${score}`;
     const baseScale = 2;
     const pulseAmount = 0.2
     let time = 0;
     app.ticker.add((ticker) => {
      time += ticker.deltaMS / 1000;
      const pulse = Math.sin(time * 3) * pulseAmount;

      sprite.scale.set(baseScale + pulse);
    });
  });

})();