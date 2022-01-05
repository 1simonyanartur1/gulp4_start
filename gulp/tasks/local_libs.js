module.exports = function () {

	function noData(msg) {
		console.log(`Переменная ${msg} пуста.`);
	}

	$.gulp.task('libs:css', async function () {
		if ($.path.src.libsCSS != '' || $.path.src.libsCSS.length != 0) {
			return $.gulp.src($.path.src.libsCSS)
				.pipe($.concat('libs.min.css'), {
					allowEmpty: true
				})
				.pipe($.cleanCSS())
				.pipe($.gulp.dest($.path.build.libsCSS))
		} else {
			return noData('libsCSS');
		}
	});
	
	$.gulp.task('libs:js', async function () {
		if ($.path.src.libsJS != '' || $.path.src.libsJS.length != 0) {
			return null;
		} else {
			return noData('libsJS');
		}
	});

};
