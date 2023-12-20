module.exports = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Library Genesis • fiction</title>
			<base href="/fiction/">
		<link rel="stylesheet" href="/static/style.css">
	<link rel="stylesheet" href="/static/menu.css">
	<script type="text/javascript" src="/static/jquery-3.3.1.min.js"></script>
		<link rel="search" type="application/opensearchdescription+xml" href="/fiction/opensearch.xml" title="Library Genesis • fiction">
	
</head>
<body>
<ul id="menu">
	<li><div class="drop">Download</div>
		<div class="dropdown_2columns">
			<div class="col_2">
				<ul>
					<li><a href="/dbdumps/">Database dumps (library's catalogue)</a></li>
					<li><a href="/fiction/repository_torrent/">Torrents (library's content)</a></li>
					<li><a href="https://phillm.net/libgen-stats-table.php">Torrent health tracker</a></li>
				</ul>
			</div>
		</div>
	</li>
	<li><a class="drop" href="https://wiki.mhut.org/content:how_to_upload">Upload</a>
		<div class="dropdown_2columns">
			<div class="col_2">
				<div><a href="https://library.bz/fiction/upload/">Web uploader</a></div>
				<div style="margin:0 0 1em 0">for an anonymous access use<br>username: <em>genesis</em><br>password: <em>upload</em></div>
				<div><a href="https://wiki.mhut.org/content:how_to_upload">A quick guide on how to upload</a></div>
			</div>
		</div>
	</li>
	<li><div class="drop">Updates</div>
		<div class="dropdown_2columns">
			<div class="col_2">
				<ul>
					<li><a href="/fiction/recent">Recently added files (1 month)</a></li>
					<li><a href="/fiction/rss">RSS feed (1 month)</a></li>
				</ul>
			</div>
		</div>
	</li>

	<li><a href="https://forum.mhut.org/">Community &amp; support</a></li>
</ul>

<h1 class="header"><a href="/">Library Genesis</a>: <a href="/fiction/">Fiction</a></h1>
<p style="margin:1em 0;text-align:center">


<a href="https://wiki.mhut.org/project:get_involved">Get involved to help the project!</a><br>
<a href="https://wiki.mhut.org/catalog:search">A guide to effective catalog searching</a><br>
Try <a href="https://wiki.mhut.org/software:libgen_desktop">Libgen Desktop</a> application!
</p>


<form action="/fiction/" method="get" id="search_form">

<div style="margin:0 0 0.5em 0"><input type="text" name="q" value="tom swift" style="width:93%"> <input type="submit" value="search"></div>
<ul class="inline-fields">
	<li>
		<label title="Choose fields to search in.">Search criteria
			<select name="criteria" style="width:5em">
								<option value="" selected>- any -</option>
								<option value="title">title</option>
								<option value="authors">authors</option>
								<option value="series">series</option>
				
			</select>
		</label>
	</li>
	<li>
		<label title="Each word in a query will be searched as a wildcard.&#10;Use it to search for more word forms.">Wildcarded words (<em>word*</em>)
			<input type="checkbox" name="wildcard" value="1">
		</label>
	</li>
	<li>
		<label>Language
			<select name="language">
								<option value="" selected>- any -</option>
								<option value="Abkhazian">Abkhazian</option>
								<option value="Acoli">Acoli</option>
								<option value="Afaan Oromoo (Oromo)">Afaan Oromoo (Oromo)</option>
								<option value="Afrikaans">Afrikaans</option>
								<option value="Albanian">Albanian</option>
								<option value="Amharic">Amharic</option>
								<option value="Ancient Greek">Ancient Greek</option>
								<option value="Antillean Creole (Kwéyòl / Kréyòl)">Antillean Creole (Kwéyòl / Kréyòl)</option>
								<option value="Antillean Creole (Kwéyòl / Kréyòl); French">Antillean Creole (Kwéyòl / Kréyòl); French</option>
								<option value="Antillian Creole; French; English; Spanish">Antillian Creole; French; English; Spanish</option>
								<option value="ar">ar</option>
								<option value="ara, eng">ara, eng</option>
								<option value="Arabic">Arabic</option>
								<option value="Arabic, kurdish">Arabic, kurdish</option>
								<option value="Aragonese">Aragonese</option>
								<option value="Armenian">Armenian</option>
								<option value="Assamese">Assamese</option>
								<option value="Aymara; Quechua; Spanish">Aymara; Quechua; Spanish</option>
								<option value="Azerbaijani">Azerbaijani</option>
								<option value="Bambara (Bámánánkán)">Bambara (Bámánánkán)</option>
								<option value="Bangla">Bangla</option>
								<option value="Basque">Basque</option>
								<option value="Basque (Euskara)">Basque (Euskara)</option>
								<option value="Belarusian">Belarusian</option>
								<option value="Bengali">Bengali</option>
								<option value="Bokmål, Norwegian; Norwegian Bokmål">Bokmål, Norwegian; Norwegian Bokmål</option>
								<option value="Bosnian">Bosnian</option>
								<option value="Brazilian Portuguese">Brazilian Portuguese</option>
								<option value="Breton">Breton</option>
								<option value="bruxellois">bruxellois</option>
								<option value="Bulgarian">Bulgarian</option>
								<option value="Burmese">Burmese</option>
								<option value="Cape Verdean Creole / Kriolu">Cape Verdean Creole / Kriolu</option>
								<option value="Catalan">Catalan</option>
								<option value="Catalan; Aranese">Catalan; Aranese</option>
								<option value="Catalan; Valencian">Catalan; Valencian</option>
								<option value="Cebuano">Cebuano</option>
								<option value="Central Khmer">Central Khmer</option>
								<option value="Chichewa (ciCewa) / Nyanja (ciNyanja)">Chichewa (ciCewa) / Nyanja (ciNyanja)</option>
								<option value="Chichewa / Nyanja">Chichewa / Nyanja</option>
								<option value="Chinese">Chinese</option>
								<option value="Chinese, English">Chinese, English</option>
								<option value="chiShona (Shona)">chiShona (Shona)</option>
								<option value="chiShona (Shona); English">chiShona (Shona); English</option>
								<option value="chiShona (Shona); Swahili; English">chiShona (Shona); Swahili; English</option>
								<option value="Cree">Cree</option>
								<option value="Croatian">Croatian</option>
								<option value="Croatian, Serbian,">Croatian, Serbian,</option>
								<option value="Croatian, Serbian, Bosnian, Serbo-Croatian">Croatian, Serbian, Bosnian, Serbo-Croatian</option>
								<option value="Czech">Czech</option>
								<option value="Danish">Danish</option>
								<option value="Dansk">Dansk</option>
								<option value="de">de</option>
								<option value="deu, eng">deu, eng</option>
								<option value="deu, ita">deu, ita</option>
								<option value="Deutsch">Deutsch</option>
								<option value="deutsch, english">deutsch, english</option>
								<option value="Dholuo">Dholuo</option>
								<option value="Diné bizaad (Navajo); English">Diné bizaad (Navajo); English</option>
								<option value="Dutch">Dutch</option>
								<option value="Dutch / Flemish">Dutch / Flemish</option>
								<option value="Dutch; Flemish">Dutch; Flemish</option>
								<option value="Dutchh">Dutchh</option>
								<option value="en">en</option>
								<option value="en-GB">en-GB</option>
								<option value="en-US">en-US</option>
								<option value="eng">eng</option>
								<option value="eng, eng, nld">eng, eng, nld</option>
								<option value="eng, fra, fra, jpn">eng, fra, fra, jpn</option>
								<option value="eng, fra, nld">eng, fra, nld</option>
								<option value="eng, jpn">eng, jpn</option>
								<option value="eng, nld">eng, nld</option>
								<option value="English">English</option>
								<option value="English    German">English    German</option>
								<option value="English / French">English / French</option>
								<option value="English &amp; Croatian">English &amp; Croatian</option>
								<option value="English Russian">English Russian</option>
								<option value="English-Greek">English-Greek</option>
								<option value="English-Italian">English-Italian</option>
								<option value="English-Turkish">English-Turkish</option>
								<option value="English, Arabic">English, Arabic</option>
								<option value="English, Chinese">English, Chinese</option>
								<option value="English, French">English, French</option>
								<option value="English, German">English, German</option>
								<option value="English, Haitian Creole">English, Haitian Creole</option>
								<option value="English, Italian">English, Italian</option>
								<option value="English, Japanese">English, Japanese</option>
								<option value="English, Polish">English, Polish</option>
								<option value="English, Portuguese">English, Portuguese</option>
								<option value="English, Russian">English, Russian</option>
								<option value="English, Spanish">English, Spanish</option>
								<option value="English; French; Spanish; German; Italian;">English; French; Spanish; German; Italian;</option>
								<option value="English; Greek">English; Greek</option>
								<option value="English; Italian">English; Italian</option>
								<option value="English; Kiswahili (Swahili)">English; Kiswahili (Swahili)</option>
								<option value="English; Southern Sotho (Sesotho)">English; Southern Sotho (Sesotho)</option>
								<option value="English; Yiddish">English; Yiddish</option>
								<option value="English; Zezuru (chiShona / Shona)">English; Zezuru (chiShona / Shona)</option>
								<option value="English;Latin">English;Latin</option>
								<option value="English/German">English/German</option>
								<option value="espanish">espanish</option>
								<option value="Español">Español</option>
								<option value="Español; Spanish">Español; Spanish</option>
								<option value="Esperanto">Esperanto</option>
								<option value="essp">essp</option>
								<option value="Estonian">Estonian</option>
								<option value="et">et</option>
								<option value="eu">eu</option>
								<option value="European Portuguese">European Portuguese</option>
								<option value="Faroese">Faroese</option>
								<option value="Farsi">Farsi</option>
								<option value="Filipino">Filipino</option>
								<option value="Filipino, English">Filipino, English</option>
								<option value="Filipino; Pilipino">Filipino; Pilipino</option>
								<option value="Finnish">Finnish</option>
								<option value="Franch">Franch</option>
								<option value="French">French</option>
								<option value="French, English">French, English</option>
								<option value="French, picard">French, picard</option>
								<option value="French, Russian">French, Russian</option>
								<option value="French, Sango">French, Sango</option>
								<option value="Galego">Galego</option>
								<option value="Galician">Galician</option>
								<option value="Gallego">Gallego</option>
								<option value="Georgian">Georgian</option>
								<option value="German">German</option>
								<option value="German - Spanish">German - Spanish</option>
								<option value="German-English">German-English</option>
								<option value="German, Russian">German, Russian</option>
								<option value="German, Russisch">German, Russisch</option>
								<option value="Germna">Germna</option>
								<option value="Gĩgĩkũyũ (Kikuyu)">Gĩgĩkũyũ (Kikuyu)</option>
								<option value="Greek">Greek</option>
								<option value="Greek, Ancient Greek">Greek, Ancient Greek</option>
								<option value="Greek, Modern">Greek, Modern</option>
								<option value="Greek, Modern (1453-">Greek, Modern (1453-</option>
								<option value="Greek, Modern (1453-)">Greek, Modern (1453-)</option>
								<option value="Guaraní">Guaraní</option>
								<option value="Gujarati">Gujarati</option>
								<option value="Haitian Creole / Kreyòl ayisyen">Haitian Creole / Kreyòl ayisyen</option>
								<option value="Haitian Creole / Kreyòl ayisyen; English">Haitian Creole / Kreyòl ayisyen; English</option>
								<option value="Haitian Creole / Kreyòl ayisyen; French">Haitian Creole / Kreyòl ayisyen; French</option>
								<option value="Haitian Creole; English; French; Spanish">Haitian Creole; English; French; Spanish</option>
								<option value="Haitian Creole; French; English">Haitian Creole; French; English</option>
								<option value="Hebrew">Hebrew</option>
								<option value="Hindi">Hindi</option>
								<option value="Hungarian">Hungarian</option>
								<option value="Icelandic">Icelandic</option>
								<option value="Igbo">Igbo</option>
								<option value="Indigenous">Indigenous</option>
								<option value="Indonesia">Indonesia</option>
								<option value="Indonesian">Indonesian</option>
								<option value="Irish">Irish</option>
								<option value="isiNdebele (Northern Ndebele)">isiNdebele (Northern Ndebele)</option>
								<option value="isiZulu (Zulu)">isiZulu (Zulu)</option>
								<option value="Italian">Italian</option>
								<option value="Italian-Spanish">Italian-Spanish</option>
								<option value="Italian; English">Italian; English</option>
								<option value="Italian; Portuguese">Italian; Portuguese</option>
								<option value="Italian/English">Italian/English</option>
								<option value="italiano">italiano</option>
								<option value="Izon (Ijaw) and English">Izon (Ijaw) and English</option>
								<option value="Japanese">Japanese</option>
								<option value="Kannada">Kannada</option>
								<option value="Kashmiri">Kashmiri</option>
								<option value="Kazakh">Kazakh</option>
								<option value="Kiswahili (Swahili)">Kiswahili (Swahili)</option>
								<option value="Korean">Korean</option>
								<option value="Korean-English">Korean-English</option>
								<option value="Kurdish">Kurdish</option>
								<option value="Latin">Latin</option>
								<option value="Latin/Portuguese">Latin/Portuguese</option>
								<option value="Latvian">Latvian</option>
								<option value="Lietuvių">Lietuvių</option>
								<option value="Lingala">Lingala</option>
								<option value="Lithuanian">Lithuanian</option>
								<option value="Lojban">Lojban</option>
								<option value="Macedonian">Macedonian</option>
								<option value="Malagasy">Malagasy</option>
								<option value="Malay">Malay</option>
								<option value="Malayalam">Malayalam</option>
								<option value="Malayalam Poetry">Malayalam Poetry</option>
								<option value="Māori">Māori</option>
								<option value="Marathi">Marathi</option>
								<option value="Meditative Angelic Script">Meditative Angelic Script</option>
								<option value="Mirandese">Mirandese</option>
								<option value="Moldovan">Moldovan</option>
								<option value="Moldovan, Romanian">Moldovan, Romanian</option>
								<option value="Nepali">Nepali</option>
								<option value="nl">nl</option>
								<option value="nld, deu, eng, nld">nld, deu, eng, nld</option>
								<option value="Northern Sami">Northern Sami</option>
								<option value="Norwegian">Norwegian</option>
								<option value="Norwegian Bokmål">Norwegian Bokmål</option>
								<option value="Norwegian Nynorsk; Nynorsk, Norwegian">Norwegian Nynorsk; Nynorsk, Norwegian</option>
								<option value="Nzema (Nzima / N&#039;zima)">Nzema (Nzima / N&#039;zima)</option>
								<option value="Occitan">Occitan</option>
								<option value="Otomí">Otomí</option>
								<option value="Panjabi">Panjabi</option>
								<option value="Panjabi، Punjabi">Panjabi، Punjabi</option>
								<option value="Panjabi; Punjabi">Panjabi; Punjabi</option>
								<option value="Papiamento">Papiamento</option>
								<option value="Pashto">Pashto</option>
								<option value="Persian">Persian</option>
								<option value="Poertuguese">Poertuguese</option>
								<option value="Polish">Polish</option>
								<option value="Polish / English">Polish / English</option>
								<option value="Português">Português</option>
								<option value="Português brasileiro">Português brasileiro</option>
								<option value="Portuguesa">Portuguesa</option>
								<option value="Portuguese">Portuguese</option>
								<option value="Portuguese (BR)">Portuguese (BR)</option>
								<option value="Portuguese (PT-PT)">Portuguese (PT-PT)</option>
								<option value="Portuguese Brazilian">Portuguese Brazilian</option>
								<option value="Portuguese, English">Portuguese, English</option>
								<option value="Portuguese; German">Portuguese; German</option>
								<option value="Portuguese/English">Portuguese/English</option>
								<option value="Portuguesse">Portuguesse</option>
								<option value="Punjabi">Punjabi</option>
								<option value="Punjabi-Urdu">Punjabi-Urdu</option>
								<option value="Pushto; Pashto">Pushto; Pashto</option>
								<option value="Quechua">Quechua</option>
								<option value="Quechua; Spanish">Quechua; Spanish</option>
								<option value="Réunion Creole / Kréol Réyoné">Réunion Creole / Kréol Réyoné</option>
								<option value="Réunion Creole / Kréol Réyoné; French">Réunion Creole / Kréol Réyoné; French</option>
								<option value="Romana">Romana</option>
								<option value="Romana / Engleza">Romana / Engleza</option>
								<option value="Romanian">Romanian</option>
								<option value="Romanian, Moldavian">Romanian, Moldavian</option>
								<option value="Romanian, Moldovan">Romanian, Moldovan</option>
								<option value="Romanian;">Romanian;</option>
								<option value="Romanian; Moldavian; Moldovan">Romanian; Moldavian; Moldovan</option>
								<option value="Romanian/Moldovan">Romanian/Moldovan</option>
								<option value="Roviana">Roviana</option>
								<option value="Russian">Russian</option>
								<option value="Russian (Old)">Russian (Old)</option>
								<option value="Russian / English">Russian / English</option>
								<option value="Russian, English">Russian, English</option>
								<option value="Russian, English, French">Russian, English, French</option>
								<option value="Russian, German">Russian, German</option>
								<option value="Russian, Italian">Russian, Italian</option>
								<option value="Russian,English">Russian,English</option>
								<option value="Russian/English">Russian/English</option>
								<option value="Sanskrit">Sanskrit</option>
								<option value="Sardinian">Sardinian</option>
								<option value="Scots">Scots</option>
								<option value="Scottish Gaelic">Scottish Gaelic</option>
								<option value="Serbian">Serbian</option>
								<option value="Serbo-Croatian">Serbo-Croatian</option>
								<option value="Serbo-Croatian, Bosnian, Croatian, Serbian">Serbo-Croatian, Bosnian, Croatian, Serbian</option>
								<option value="Sesotho (Southern Sotho)">Sesotho (Southern Sotho)</option>
								<option value="Setswana (Tswana)">Setswana (Tswana)</option>
								<option value="Shipibo-Konibo">Shipibo-Konibo</option>
								<option value="Sindhi">Sindhi</option>
								<option value="Slovak">Slovak</option>
								<option value="Slovene">Slovene</option>
								<option value="Slovene, Slovenian">Slovene, Slovenian</option>
								<option value="Slovenian">Slovenian</option>
								<option value="Somali">Somali</option>
								<option value="Spanish">Spanish</option>
								<option value="Spanish and Zapotec">Spanish and Zapotec</option>
								<option value="Spanish-English">Spanish-English</option>
								<option value="Spanish, Castilian">Spanish, Castilian</option>
								<option value="spanish, english">spanish, english</option>
								<option value="Spanish, German">Spanish, German</option>
								<option value="Spanish, Mexican">Spanish, Mexican</option>
								<option value="Spanish; Aymara">Spanish; Aymara</option>
								<option value="Spanish; Castilian">Spanish; Castilian</option>
								<option value="Spanish; Castilian Spanish">Spanish; Castilian Spanish</option>
								<option value="Spanish; Colombian">Spanish; Colombian</option>
								<option value="Spanish; english">Spanish; english</option>
								<option value="Spanish; French">Spanish; French</option>
								<option value="Spanish; Italian">Spanish; Italian</option>
								<option value="Spanish; Latin Spanish">Spanish; Latin Spanish</option>
								<option value="Spanish; Quechua; Aymara">Spanish; Quechua; Aymara</option>
								<option value="Spanish; Vietnamese">Spanish; Vietnamese</option>
								<option value="Spanish;Castilianish;Castilian">Spanish;Castilianish;Castilian</option>
								<option value="Spanish;Castiliannish;Castilian">Spanish;Castiliannish;Castilian</option>
								<option value="Spanish;Mexican">Spanish;Mexican</option>
								<option value="Spanish;Portuguese">Spanish;Portuguese</option>
								<option value="Spañol">Spañol</option>
								<option value="srpsko-hrvatski">srpsko-hrvatski</option>
								<option value="St. Lucian Creole / Kwéyòl; English">St. Lucian Creole / Kwéyòl; English</option>
								<option value="Sunda">Sunda</option>
								<option value="sv">sv</option>
								<option value="Swahili">Swahili</option>
								<option value="Swedish">Swedish</option>
								<option value="Swedish, English">Swedish, English</option>
								<option value="Swedish, Norwegian, Danish">Swedish, Norwegian, Danish</option>
								<option value="Tagalog">Tagalog</option>
								<option value="Tahitian">Tahitian</option>
								<option value="Tamil">Tamil</option>
								<option value="Telugu">Telugu</option>
								<option value="Thai">Thai</option>
								<option value="Thai; English">Thai; English</option>
								<option value="Thai; Kelantan-Pattani Malay">Thai; Kelantan-Pattani Malay</option>
								<option value="Thai; Malay; Jawi">Thai; Malay; Jawi</option>
								<option value="Tibetan">Tibetan</option>
								<option value="Tiếng Việt (Vietnamese)">Tiếng Việt (Vietnamese)</option>
								<option value="tl">tl</option>
								<option value="tr, kz">tr, kz</option>
								<option value="Tshivenda (Venda); English">Tshivenda (Venda); English</option>
								<option value="Tswana">Tswana</option>
								<option value="Turkish">Turkish</option>
								<option value="Turkish, Arabic">Turkish, Arabic</option>
								<option value="Turkish, English">Turkish, English</option>
								<option value="Turkish, English, Arabic">Turkish, English, Arabic</option>
								<option value="Turkish, German">Turkish, German</option>
								<option value="Turkish, Ottoman (1500-1928)">Turkish, Ottoman (1500-1928)</option>
								<option value="Turkish, Spanish">Turkish, Spanish</option>
								<option value="Turkmen">Turkmen</option>
								<option value="Udmurt">Udmurt</option>
								<option value="Ukrainian">Ukrainian</option>
								<option value="Ukrainian, English">Ukrainian, English</option>
								<option value="Ukrainian, Polish, Slovak">Ukrainian, Polish, Slovak</option>
								<option value="Ukrainian, Russian">Ukrainian, Russian</option>
								<option value="Undetermined">Undetermined</option>
								<option value="Urdu">Urdu</option>
								<option value="Uzbek">Uzbek</option>
								<option value="Vietnam">Vietnam</option>
								<option value="Vietnamese">Vietnamese</option>
								<option value="Wayuunaiki">Wayuunaiki</option>
								<option value="Welsh">Welsh</option>
								<option value="Wolof">Wolof</option>
								<option value="Wolof; French">Wolof; French</option>
								<option value="Xitsonga (Tsonga)">Xitsonga (Tsonga)</option>
								<option value="Yiddish">Yiddish</option>
								<option value="Yiddish, English">Yiddish, English</option>
								<option value="Yugoslavian">Yugoslavian</option>
								<option value="Zapoteco">Zapoteco</option>
								<option value="Zhuang; Chuang">Zhuang; Chuang</option>
								<option value="руский">руский</option>
								<option value="русский">русский</option>
								<option value="Русский; Russian">Русский; Russian</option>
								<option value="עברית">עברית</option>
								<option value="اردو">اردو</option>
								<option value="عربي">عربي</option>
								<option value="中文">中文</option>
								<option value="日本語 (Japanese)">日本語 (Japanese)</option>
								<option value="繁体中文">繁体中文</option>
				
			</select>
		</label>
	</li>
	<li>
		<label>Format
			<select name="format">
								<option value="">- any -</option>
								<option value="epub" selected>EPUB</option>
								<option value="mobi">MOBI</option>
								<option value="azw">AZW</option>
								<option value="azw3">AZW3</option>
								<option value="fb2">FB2</option>
								<option value="pdf">PDF</option>
								<option value="rtf">RTF</option>
								<option value="txt">TXT</option>
				
			</select>
		</label>
	</li>
</ul>
</form>
<div style="clear:both"></div>


<script type="text/javascript">
$(document).ready(function() {
	$('.page_selector').replaceWith('<select class="page_selector"></select>');
	var list = $('.page_selector');
	var options = new Array();
	var total_pages = 8;
	if (total_pages > 500)
	{
		for (var i = 1; i <= 200; i++) {
			var option = $('<option></option>').attr('value', i).text('page ' + i + ' / ' + total_pages);
			if (i == 1) option.attr('selected', 'selected');
			options.push(option);
		}
		options.push('<option>...</option>');
		for (var i = total_pages - 200 + 1; i <= total_pages; i++) {
			var option = $('<option></option>').attr('value', i).text('page ' + i + ' / ' + total_pages);
			if (i == 1) option.attr('selected', 'selected');
			options.push(option);
		}
	}
	else
	{
		for (var i = 1; i <= total_pages; i++) {
			var option = $('<option></option>').attr('value', i).text('page ' + i + ' / ' + total_pages);
			if (i == 1) option.attr('selected', 'selected');
			options.push(option);
		}
	}
	list.append(options);
	list.on('change', function() {
		if (this.value != '...')
			window.location.href = "/fiction/?q=tom+swift&criteria=&language=&format=epub&page=" + this.value;
	});
});
</script>



<div class="catalog_paginator">
	<div style="float:left">187 files found</div>
		<div style="float:right">
		<span class="page_selector">page 1 / 8</span>
	 <a href="/fiction/?q=tom+swift&criteria=&language=&format=epub&page=2">▶</a>	</div>
	</div>
<div style="clear:both"></div>



<table class="catalog">
<thead><tr>
	<td style="width:15%">						<a href="/fiction/?q=tom+swift&criteria=&language=&format=epub&sort=author:a" title="sort">Author(s) <span class="sort_direction">&varr;</span></a>
			</td>
	<td>						<a href="/fiction/?q=tom+swift&criteria=&language=&format=epub&sort=series:a" title="sort">Series <span class="sort_direction">&varr;</span></a>
			</td>
	<td>						<a href="/fiction/?q=tom+swift&criteria=&language=&format=epub&sort=title:a" title="sort">Title <span class="sort_direction">&varr;</span></a>
			</td>
	<td>						<a href="/fiction/?q=tom+swift&criteria=&language=&format=epub&sort=language:a" title="sort">Language <span class="sort_direction">&varr;</span></a>
			</td>
	<td style="width:9em">						<a href="/fiction/?q=tom+swift&criteria=&language=&format=epub&sort=filesize:a" title="sort">File <span class="sort_direction">&varr;</span></a>
			</td>
	<td style="width:9em">Mirrors</td>
	<td style="width:4em">&nbsp;</td>
</tr></thead>
<tbody>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td></td>
	<td>
		<p><a href="/fiction/C05244BC3AA38AA25E6DF875202EE36E">0127 - Tom Swift and His Great Oil Gusher (1924) aka The Treasure of Goby Farm</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2023-11-29 14:18:05">EPUB / 834&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/C05244BC3AA38AA25E6DF875202EE36E" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=C05244BC3AA38AA25E6DF875202EE36E" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/C05244BC3AA38AA25E6DF875202EE36E" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 24</td>
	<td>
		<p><a href="/fiction/2C3809164B7D9727B23CA6A9AC654613">And His 3-D Telejector</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 147&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/2C3809164B7D9727B23CA6A9AC654613" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=2C3809164B7D9727B23CA6A9AC654613" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/2C3809164B7D9727B23CA6A9AC654613" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 23</td>
	<td>
		<p><a href="/fiction/8FADE210CC3434880160E605814F0AFA">And His Aquatomic Tracker</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 135&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/8FADE210CC3434880160E605814F0AFA" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=8FADE210CC3434880160E605814F0AFA" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/8FADE210CC3434880160E605814F0AFA" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 5</td>
	<td>
		<p><a href="/fiction/79D34AE28F1A7EC37F90036ACA0E21F8">And His Atomic Earth Blaster</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 151&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/79D34AE28F1A7EC37F90036ACA0E21F8" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=79D34AE28F1A7EC37F90036ACA0E21F8" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/79D34AE28F1A7EC37F90036ACA0E21F8" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 5</td>
	<td>
		<p><a href="/fiction/44090B4DBA0B0E82F754D084DE68C485">And His Atomic Earth Blaster</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2014-11-17 18:57:44">EPUB / 154&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/44090B4DBA0B0E82F754D084DE68C485" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=44090B4DBA0B0E82F754D084DE68C485" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/44090B4DBA0B0E82F754D084DE68C485" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 11</td>
	<td>
		<p><a href="/fiction/D688D4CF49A24CFAD6FC8A83DFB1D113">And His Deep-Sea Hydrodome</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 137&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/D688D4CF49A24CFAD6FC8A83DFB1D113" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=D688D4CF49A24CFAD6FC8A83DFB1D113" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/D688D4CF49A24CFAD6FC8A83DFB1D113" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 11</td>
	<td>
		<p><a href="/fiction/25B3723ADB754CE385D0F9C53529E658">And His Deep-Sea Hydrodome</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2014-11-17 18:57:44">EPUB / 140&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/25B3723ADB754CE385D0F9C53529E658" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=25B3723ADB754CE385D0F9C53529E658" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/25B3723ADB754CE385D0F9C53529E658" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 7</td>
	<td>
		<p><a href="/fiction/A4FC686188F1C975A249C509580BB6C5">And His Diving Seacopter</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 156&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/A4FC686188F1C975A249C509580BB6C5" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=A4FC686188F1C975A249C509580BB6C5" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/A4FC686188F1C975A249C509580BB6C5" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 7</td>
	<td>
		<p><a href="/fiction/6370A3A78D2E8A1245E9A6EE8BE0BA38">And His Diving Seacopter</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2014-11-17 18:57:44">EPUB / 160&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/6370A3A78D2E8A1245E9A6EE8BE0BA38" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=6370A3A78D2E8A1245E9A6EE8BE0BA38" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/6370A3A78D2E8A1245E9A6EE8BE0BA38" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 31</td>
	<td>
		<p><a href="/fiction/FE6054F35B31C546E20FE5BDA61A0C5C">And His Dyna 4 Capsule</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 154&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/FE6054F35B31C546E20FE5BDA61A0C5C" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=FE6054F35B31C546E20FE5BDA61A0C5C" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/FE6054F35B31C546E20FE5BDA61A0C5C" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 14</td>
	<td>
		<p><a href="/fiction/14F70E5F6999C244F4B0A254A1793A43">And His Electronic Retroscope</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 133&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/14F70E5F6999C244F4B0A254A1793A43" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=14F70E5F6999C244F4B0A254A1793A43" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/14F70E5F6999C244F4B0A254A1793A43" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 14</td>
	<td>
		<p><a href="/fiction/2A90121DAAC092F746507B759FA6AAE6">And His Electronic Retroscope</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2014-11-17 18:57:44">EPUB / 136&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/2A90121DAAC092F746507B759FA6AAE6" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=2A90121DAAC092F746507B759FA6AAE6" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/2A90121DAAC092F746507B759FA6AAE6" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 1</td>
	<td>
		<p><a href="/fiction/0288F7F4901768AF528BEC5EBA262190">And His Flying Lab</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 158&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/0288F7F4901768AF528BEC5EBA262190" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=0288F7F4901768AF528BEC5EBA262190" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/0288F7F4901768AF528BEC5EBA262190" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 1</td>
	<td>
		<p><a href="/fiction/1B7AAC5437E54E8C92E9D2A20F470480">And His Flying Lab</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2014-11-17 18:57:44">EPUB / 162&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/1B7AAC5437E54E8C92E9D2A20F470480" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=1B7AAC5437E54E8C92E9D2A20F470480" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/1B7AAC5437E54E8C92E9D2A20F470480" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 4</td>
	<td>
		<p><a href="/fiction/ED4014805C084CC29A50801D1D8C86DB">And His Giant Robot</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 155&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/ED4014805C084CC29A50801D1D8C86DB" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=ED4014805C084CC29A50801D1D8C86DB" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/ED4014805C084CC29A50801D1D8C86DB" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 4</td>
	<td>
		<p><a href="/fiction/A50E3AF9401D3790607EEE72ACF0AB26">And His Giant Robot</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2014-11-17 18:57:44">EPUB / 159&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/A50E3AF9401D3790607EEE72ACF0AB26" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=A50E3AF9401D3790607EEE72ACF0AB26" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/A50E3AF9401D3790607EEE72ACF0AB26" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 2</td>
	<td>
		<p><a href="/fiction/2CD42984C5587E50C32F4BB3ABDA79EA">And His Jetmarine</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 144&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/2CD42984C5587E50C32F4BB3ABDA79EA" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=2CD42984C5587E50C32F4BB3ABDA79EA" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/2CD42984C5587E50C32F4BB3ABDA79EA" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 2</td>
	<td>
		<p><a href="/fiction/711557039D0591BB3A65689F62CC8064">And His Jetmarine</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2014-11-17 18:57:44">EPUB / 148&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/711557039D0591BB3A65689F62CC8064" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=711557039D0591BB3A65689F62CC8064" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/711557039D0591BB3A65689F62CC8064" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 20</td>
	<td>
		<p><a href="/fiction/FB9B26699E7F3409232597A412E17D1D">And His Megascope Space Prober</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 128&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/FB9B26699E7F3409232597A412E17D1D" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=FB9B26699E7F3409232597A412E17D1D" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/FB9B26699E7F3409232597A412E17D1D" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 20</td>
	<td>
		<p><a href="/fiction/EB8E0F29AB1A51D0B350353723D33DBD">And His Megascope Space Prober</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2014-11-17 18:57:44">EPUB / 131&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/EB8E0F29AB1A51D0B350353723D33DBD" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=EB8E0F29AB1A51D0B350353723D33DBD" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/EB8E0F29AB1A51D0B350353723D33DBD" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 6</td>
	<td>
		<p><a href="/fiction/91DDE417039AB8E26941DB85E99327AF">And His Outpost in Space</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 159&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/91DDE417039AB8E26941DB85E99327AF" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=91DDE417039AB8E26941DB85E99327AF" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/91DDE417039AB8E26941DB85E99327AF" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 25</td>
	<td>
		<p><a href="/fiction/D1A688B51AABA395A93861432EE475B0">And His Polar-Ray Dynasphere</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 152&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/D1A688B51AABA395A93861432EE475B0" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=D1A688B51AABA395A93861432EE475B0" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/D1A688B51AABA395A93861432EE475B0" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 22</td>
	<td>
		<p><a href="/fiction/ED3974B3A3ECEAD758011667595E85B7">And His Repelatron Skyway</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 141&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/ED3974B3A3ECEAD758011667595E85B7" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=ED3974B3A3ECEAD758011667595E85B7" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/ED3974B3A3ECEAD758011667595E85B7" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 3</td>
	<td>
		<p><a href="/fiction/C3509070684DE1638A5AF4CBD7840076">And His Rocket Ship</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2013-02-26 20:00:00">EPUB / 155&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/C3509070684DE1638A5AF4CBD7840076" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=C3509070684DE1638A5AF4CBD7840076" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/C3509070684DE1638A5AF4CBD7840076" title="edit metadata">[edit]</a></td>
</tr>
<tr>
	<td>
				<ul class="catalog_authors">
		<li><a href="/fiction/?q=Appleton%2C%20Victor&criteria=authors" title="search by author">Appleton, Victor</a></li>
		</ul>
			</td>
	<td>Tom Swift Jr 3</td>
	<td>
		<p><a href="/fiction/52172BB9D1D7694FEAC7E04CD66BF638">And His Rocket Ship</a></p>
			</td>
	<td>English</td>
	<td title="Uploaded at 2014-11-17 18:57:44">EPUB / 159&nbsp;Kb</td>
	<td><ul class="record_mirrors_compact"><li><a href="http://library.lol/fiction/52172BB9D1D7694FEAC7E04CD66BF638" title="Libgen.rs">[1]</a></li><li><a href="https://libgen.li/ads.php?md5=52172BB9D1D7694FEAC7E04CD66BF638" title="Libgen.li">[2]</a></li></ul></td>
	<td class="catalog_edit"><a href="https://library.bz/fiction/edit/52172BB9D1D7694FEAC7E04CD66BF638" title="edit metadata">[edit]</a></td>
</tr>

</tbody>
</table>
<div class="catalog_paginator">
	<div style="float:left">187 files found</div>
		<div style="float:right">
		<span class="page_selector">page 1 / 8</span>
	 <a href="/fiction/?q=tom+swift&criteria=&language=&format=epub&page=2">▶</a>	</div>
	</div>
<div style="clear:both"></div>


</body>
</html>
`;
