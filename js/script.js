var options = new Object();
options.generator='hexagons';
var pattern = GeoPattern.generate('000000', options);
$('html').css('background-image', pattern.toDataUrl());