<?
	function echoData($data){ echo $GLOBALS[$data.'_'.$GLOBALS['lang']]; }
	function getData($data){ return $GLOBALS[$data.'_'.$GLOBALS['lang']]; }

	//meta data
	$title_en = "USJE Presents - Illuminating Safety";
	$title_fr = "Le SESJ Présente - Votre protection en lumière";

	//GA
	$GAID_en = 'UA-86460987-1';
	$GAID_fr = 'UA-86460987-2';

	$SVGAnimations_en = "scripts/SVGAnimations_en.js";
	$SVGAnimations_fr = "scripts/SVGAnimations_fr.js";

	//nav
	$nav_img_en = 'images/logo_en.png';
	$nav_img_fr = 'images/logo_fr.png';

	$nav_alt_en = 'Union of Saftey and Justice Employees';
	$nav_alt_fr = 'Syndicat des employé-e-s de la sécurité de la justice';

	$nav0_en = "WHO WE ARE";
	$nav0_fr = "QUI NOUS SOMMES";

	$tag0_en = "who-we-are";
	$tag0_fr = "qui-nous-sommes";

	$nav1_en = "WHAT WE DO";
	$nav1_fr = "NOTRE MISSION";

	$tag1_en = "what-we-do";
	$tag1_fr = "notre-mission";

	$nav2_en = "WHO WE REPRESENT";
	$nav2_fr = "QUI NOUS REPRÉSENTONS";

	$tag2_en = "who-we-represent";
	$tag2_fr = "qui-nous-representons";

	$nav3_en = "MEDIA";
	$nav3_fr = "MÉDIA";

	$nav4_en = "LEARN MORE";
	$nav4_fr = "APPRENEZ-EN PLUS";

	$tag3_en = "media";
	$tag3_fr = "media";

	$langtoggle_en = '<a class="langtoggle" href="http://mt.laragit.com"><span class="langtoggle-on">EN</span> | <span class="langtoggle-off" >FR</span></a>';

	$langtoggle_fr = '<a class="langtoggle" href="http://fr.laragit.com"><span class="langtoggle-off">EN</span> | <span class="langtoggle-on" >FR</span></a>';

	$scrolldown_en = 'scroll down';
	$scrolldown_fr = 'voir plus bas';

	//header 
	$header1_img_en = 'images/usge-presents.svg';
	$header1_img_fr = 'images/usge-presents_fr.svg';

	$header1_mobile_img_en = 'images/usge-presents-mobile.svg';
	$header1_mobile_img_fr = 'images/usge-presents_fr.svg';

	$header1_alt_en = 'USGE PRESENTS';
	$header1_alt_fr = 'LE SESG PRÉSENTE';

	$header2_include_en = 'images/illuminating.svg';
	$header2_include_fr = 'images/illuminating_fr.svg';

	$header3_img_en = 'images/safety.svg';
	$header3_img_fr = 'images/safety_fr.svg';

	$header3_alt_en = 'SAFETY';
	$header3_alt_fr = 'LA PROTECTION';

	$watchVideo_en = "WATCH THE VIDEO";
	$watchVideo_fr = "VOIR LA VIDÉO";

	$youTubeID_en = "5FsnN168sjY";
	$youTubeID_fr = "1z0HBSVhMdc";

	//content
	$usge_include_en = 'images/usge.svg';
	$usge_include_fr = 'images/usge_fr.svg';

	$usge_copy_en = "We’re a union that works to keep Canadians safe every day.<br><br>We are parole and program officers, tradespeople, frontline staff and teachers, who work inside and outside the federal prison system.<br><br>We also support the day-to-day operations of hundreds of RCMP detachments.<br><br>Across 17 federal departments nationwide, we protect the privacy and security of Canadians as well as help provide access to information, justice and human rights.";
	$usge_copy_fr = "Nous sommes un syndicat qui travaille chaque jour à protéger les Canadiens et les Canadiennes.<br><br>Nous sommes des agents de libération conditionnelle, des gens de métiers, employés de première ligne et enseignants travaillant dans et à l’extérieur du système carcéral fédéral.<br><br>Nous assistons quotidiennement les tâches de centaines de détachements de la GRC partout au pays.<br><br>Dans 17 ministères fédéraux, nous protégeons la vie privée des Canadiens, leur sécurité, l’accès à l’information, la justice et les droits de la personne.";

	$usge_items_en = [
		"We dispatch Mounties<br>when there’s an emergency.",
		"We help inmates upgrade<br>their education and teach them<br>useful trades and life skills.",
		"We handle evidence<br>for the RCMP.",
		"We help Canadians<br>register their firearms. ",
		"We monitor and report<br>on natural disasters<br>across the country.",
		"We monitor and<br>supervise offenders<br>in the community. "];

	$usge_items_fr = [
		"Nous assignons<br>les membres de la GRC<br>en cas d’urgence.", 
		"Nous aidons les<br>détenus à parfaire leur<br>éducation et à acquérir un<br>métier et des compétences<br>de vie utiles.",
		"Nous assurons la<br>gestion des éléments de<br>preuve pour la GRC.",
		"Nous aidons les<br>Canadiens à enregistrer<br>leurs armes à feu.",
		"Nous surveillons et<br>signalons les désastres<br>naturels à travers le pays.",
		"Nous surveillons et<br>supervisons les délinquants<br>dans la collectivité."];

	$newheadline_include_en = 'images/impact.svg';
	$newheadline_include_fr = 'images/impact_fr.svg';

	$newheadline_copy_en = "The ways we keep Canadians safe aren’t always obvious, but they are important. Here are a few examples of our impact:";
	$newheadline_copy_fr = "Nos efforts pour protéger les Canadiens et les Canadiennes ne sont pas toujours évidents. Mais ils sont toujours importants. Voici quelques-uns de nos impacts :";

	$sixteen_include_en = 'images/16000.svg';
	$sixteen_include_fr = 'images/16000_fr.svg';

	$sixteen_copy_en = "Protecting more than 30 million Canadians is a massive undertaking that requires the commitment of many. We represent over 16,000 members across the country who look out for Canadians from behind the scenes. We work in the following departments and agencies:";
	$sixteen_copy_fr = "Protéger plus de 30 millions de Canadiens et Canadiennes est une entreprise massive qui nécessite les efforts de plusieurs. Nous représentons plus de 16 000 membres partout au pays qui veillent sur les Canadiens et les Canadiennes en arrière-plan. Nous travaillons dans les ministères et organismes suivants :";


	$represent_list_en = [
		"Administrative Tribunals Support Service of Canada",
		"Canadian Human Rights Tribunal",
		"Canadian Human Rights Commission",
		"Canadian Security Intelligence Service",
		"Civilian Review and Complaints Commission for the RCMP",
		"Commissioner of Canada Elections",
		"Correctional Service of Canada",
		"Courts Administrative Service",
		"Department of Justice ",
		"Parole Board of Canada",
		"Office of the Commissioner for Federal Judicial Affairs",
		"Office of the Information Commissioner of Canada",
		"Office of the Privacy Commissioner of Canada",
		"Public Safety Canada",
		"Public Prosecution Service of Canada",
		"Royal Canadian Mounted Police ",
                "Royal Canadian Mounted Police External Review Committee",
		"Supreme Court of Canada"];

	$represent_list_fr = [
		"Bureau du commissaire à la magistrature fédérale",
                "Comité externe d'examen de la Gendarmerie royale du Canada",
		"Commissariat à l'information du Canada",
		"Commissariat à la protection de la vie privée du Canada",
		"Commissaire aux élections fédérales",
		"Commission canadienne des droits de la personne",
		"Commission civile de l'examen et du traitement des plaintes contre la GRC",
		"Gendarmerie royale du Canada",
		"Commission des libérations conditionnelles du Canada",
		"Cour Suprême du Canada",
		"Ministère de la Justice  ",
		"Sécurité publique Canada",
		"Service administratif des tribunaux judiciaires",
		"Service canadien du renseignement de sécurité",
		"Service canadien d’appui aux tribunaux administratifs",
		"Service correctionnel du Canada",
		"Service des poursuites pénales du Canada",
		"Tribunal canadien des droits de la personne"];

	$button_copy_en = "LEARN MORE";
	$button_link_en = "http://www.usge-sesg.com/en";

	$button_copy_fr = "EN SAVOIR PLUS";
	$button_link_fr = "http://www.usge-sesg.com/fr";

	//footer
	$quote_en = "“USGE Shines A Light On Safety”";
	$quote_fr = "“USGE Shines A Light On Safety”";

	$quote_source_en = "- Toronto Star";
	$quote_source_fr = "- Toronto Star";

	//footer images probably...
?>