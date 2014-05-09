# VisualIndicator

Easily add a countdown (or count up) timer for your (phaser)[http://phaser.io] games.

Usage:
```javascript
// in preload
game.load.spritesheet('timer', 'assets/img/timer.png', 150, 20);

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

## Options
You can use the following options when initialising the indicator:

* game: (required) a reference to the phaser.game object
* x: (required) the x coordinate for the indicator
* y: (required) the y coordinate for the indicator
* seconds: (required) the time to count
* onFinish: (required) a function to call when the time is up
* type: (optional, default 'down') this is either 'up' or 'down' to have the indicator start from 0 to `seconds` or from `seconds` to 0
* context: (optional) you might want to pass `this` for the context to have the `onFinish` callback run in that context. If not specified, it'll run in the context of the indicator
* key: (optional, default 'timer') the cache key from the preload step.

## Methods
* start: starts the timer. Note that if you pause() the timer then call start(), it'll resume from where it left
* stop: stops the timer and resets it (note that `onFinish` will not be called when you call `stop`)
* reset: same as stop
* pause: pauses the timer
* resume: resumes the timer after a pause (same with start)
* remainingTime: returns the remaining time