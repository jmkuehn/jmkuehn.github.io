var options = new Object();
options.generator='hexagons';
var pattern = GeoPattern.generate((new Date().getTime()/(1000*60*15)|0).toString(), options);
$('html').css('background-image', pattern.toDataUrl());