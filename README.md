# VisualIndicator

Easily add a countdown (or count up) timer for your (phaser)[http://phaser.io] games.

Usage:
```javascript
// in preload
game.load.spritesheet('timer', assets/img/timer.png', 150, 20);

// in create
var indicator = new VisualIndicator({
					game: this.game,
					x: 123,
					y: 456,
					seconds: 60,
					onFinish: function() {...}
				});
indicator.start();
```

This will show a progress bar indicator at (123, 456) and will it'll start counting down as soon as you call start() on it. After the time is up the onFinish() callback will be triggered.
