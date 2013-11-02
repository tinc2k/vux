﻿$(document).ready(function() {
	document.body.style.background="#333"; /*can't use vux.css for body background on vukajlija*/
	$.each($(".definition.post p, .definition.post blockquote"), function(index, value) {
		$(value).html(transliterate($(value).html()));
	});
});


var transliterations = {
	/*"А":"A", "а":"a",*/
	"Б":"B", "б":"b",
	"В":"V", "в":"v",
	"Г":"G", "г":"g",
	"Д":"D", "д":"d",
	"Ђ":"Đ", "ђ":"đ",
	/*"Е":"E", "е":"e",*/
	"Ж":"Ž", "ж":"ž",
	"З":"Z", "з":"z",
	"И":"I", "и":"i",
	/*"Ј":"J", "ј":"j",*/
	/*"К":"K",*/ "к":"k",
	"Л":"L", "л":"l",
	"Љ":"Lj", "љ":"lj",
	/*"М":"M",*/ "м":"m",
	"Н":"N", "н":"n",
	"Њ":"Nj", "њ":"nj",
	/*"О":"O", "о":"o",*/
	"П":"P", "п":"p",
	"Р":"R", "р":"r",
	"С":"S", "с":"s",
	/*"Т":"T",*/ "т":"t",
	"Ћ":"Ć", "ћ":"ć",
	"У":"U", "у":"u",
	"Ф":"F", "ф":"f",
	"Х":"H", "х":"h",
	"Ц":"C", "ц":"c",
	"Ч":"Č", "ч":"č",
	"Џ":"Dž", "џ":"dž",
	"Ш":"Š", "ш":"š"
};

function transliterate(phrase){
  return phrase.split('').map(function (char) { 
    return transliterations[char] || char; 
  }).join("");
}
