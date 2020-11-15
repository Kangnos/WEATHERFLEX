const wallpaper = require('wallpaper');

(async () => {
	await wallpaper.set('public\wallpapers\Clear.jpg');

	await wallpaper.get();
	//=> '/Users/sindresorhus/unicorn.jpg'
})();