var options = new Object();
options.generator='hexagons';
var pattern = GeoPattern.generate(navigator.userAgent, options);
$('html').css('background-image', pattern.toDataUrl());