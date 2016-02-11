/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'devicons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'devicons-file-o': '&#xf016;',
		'devicons-tag': '&#xf02b;',
		'devicons-tags': '&#xf02c;',
		'devicons-book3': '&#xf02d;',
		'devicons-bookmark': '&#xf02e;',
		'devicons-comment2': '&#xf075;',
		'devicons-magnet': '&#xf076;',
		'devicons-linkedin-square': '&#xf08c;',
		'devicons-certificate': '&#xf0a3;',
		'devicons-pinterest': '&#xf0d2;',
		'devicons-pinterest-square': '&#xf0d3;',
		'devicons-google-plus-square': '&#xf0d4;',
		'devicons-google-plus': '&#xf0d5;',
		'devicons-linkedin': '&#xf0e1;',
		'devicons-rss-square': '&#xf143;',
		'devicons-youtube-square': '&#xf166;',
		'devicons-youtube': '&#xf167;',
		'devicons-xing': '&#xf168;',
		'devicons-xing-square': '&#xf169;',
		'devicons-youtube-play': '&#xf16a;',
		'devicons-dropbox2': '&#xf16b;',
		'devicons-stack-overflow': '&#xf16c;',
		'devicons-instagram': '&#xf16d;',
		'devicons-adn': '&#xf170;',
		'devicons-bitbucket2': '&#xf171;',
		'devicons-bitbucket-square': '&#xf172;',
		'devicons-tumblr': '&#xf173;',
		'devicons-tumblr-square': '&#xf174;',
		'devicons-apple2': '&#xf179;',
		'devicons-weibo': '&#xf18a;',
		'devicons-wordpress2': '&#xf19a;',
		'devicons-reddit-square': '&#xf1a2;',
		'devicons-delicious': '&#xf1a5;',
		'devicons-digg': '&#xf1a6;',
		'devicons-drupal2': '&#xf1a9;',
		'devicons-cube': '&#xf1b2;',
		'devicons-cubes': '&#xf1b3;',
		'devicons-behance-square': '&#xf1b5;',
		'devicons-steam': '&#xf1b6;',
		'devicons-steam-square': '&#xf1b7;',
		'devicons-recycle': '&#xf1b8;',
		'devicons-soundcloud': '&#xf1be;',
		'devicons-git-square': '&#xf1d2;',
		'devicons-git2': '&#xf1d3;',
		'devicons-hacker-news': '&#xf1d4;',
		'devicons-y-combinator-square': '&#xf1d4;',
		'devicons-yc-square': '&#xf1d4;',
		'devicons-wechat': '&#xf1d7;',
		'devicons-weixin': '&#xf1d7;',
		'devicons-share-alt': '&#xf1e0;',
		'devicons-share-alt-square': '&#xf1e1;',
		'devicons-paypal': '&#xf1ed;',
		'devicons-cc-stripe': '&#xf1f5;',
		'devicons-skyatlas': '&#xf216;',
		'devicons-diamond2': '&#xf219;',
		'devicons-git': '&#xe602;',
		'devicons-git_compare': '&#xe628;',
		'devicons-git_branch': '&#xe625;',
		'devicons-git_commit': '&#xe629;',
		'devicons-git_pull_request': '&#xe626;',
		'devicons-git_merge': '&#xe627;',
		'devicons-bitbucket': '&#xe603;',
		'devicons-github_alt': '&#xe608;',
		'devicons-github_badge': '&#xe609;',
		'devicons-github': '&#xe60a;',
		'devicons-github_full': '&#xe617;',
		'devicons-java': '&#xe638;',
		'devicons-ruby': '&#xe639;',
		'devicons-scala': '&#xe637;',
		'devicons-python': '&#xe63c;',
		'devicons-go': '&#xe624;',
		'devicons-ruby_on_rails': '&#xe63b;',
		'devicons-django': '&#xe61d;',
		'devicons-markdown': '&#xe63e;',
		'devicons-php': '&#xe63d;',
		'devicons-mysql': '&#xe604;',
		'devicons-streamline': '&#xe605;',
		'devicons-database': '&#xe606;',
		'devicons-laravel': '&#xe63f;',
		'devicons-javascript': '&#xe64e;',
		'devicons-angular': '&#xe653;',
		'devicons-backbone': '&#xe652;',
		'devicons-coffeescript': '&#xe651;',
		'devicons-jquery': '&#xe650;',
		'devicons-modernizr': '&#xe620;',
		'devicons-jquery_ui': '&#xe654;',
		'devicons-ember': '&#xe61b;',
		'devicons-dojo': '&#xe61c;',
		'devicons-nodejs': '&#xe619;',
		'devicons-nodejs_small': '&#xe618;',
		'devicons-javascript_shield': '&#xe64f;',
		'devicons-bootstrap': '&#xe647;',
		'devicons-sass': '&#xe64b;',
		'devicons-css3_full': '&#xe64a;',
		'devicons-css3': '&#xe649;',
		'devicons-html5': '&#xe636;',
		'devicons-html5_multimedia': '&#xe632;',
		'devicons-html5_device_access': '&#xe633;',
		'devicons-html5_3d_effects': '&#xe635;',
		'devicons-html5_connectivity': '&#xe634;',
		'devicons-ghost_small': '&#xe614;',
		'devicons-ghost': '&#xe61f;',
		'devicons-magento': '&#xe640;',
		'devicons-joomla': '&#xe641;',
		'devicons-jekyll_small': '&#xe60d;',
		'devicons-drupal': '&#xe642;',
		'devicons-wordpress': '&#xe60b;',
		'devicons-grunt': '&#xe64c;',
		'devicons-bower': '&#xe64d;',
		'devicons-npm': '&#xe61e;',
		'devicons-yahoo_small': '&#xe62b;',
		'devicons-yahoo': '&#xe615;',
		'devicons-bing_small': '&#xe600;',
		'devicons-windows': '&#xe60f;',
		'devicons-linux': '&#xe612;',
		'devicons-ubuntu': '&#xe63a;',
		'devicons-android': '&#xe60e;',
		'devicons-apple': '&#xe611;',
		'devicons-appstore': '&#xe613;',
		'devicons-phonegap': '&#xe630;',
		'devicons-blackberry': '&#xe623;',
		'devicons-stackoverflow': '&#xe610;',
		'devicons-techcrunch': '&#xe62c;',
		'devicons-codrops': '&#xe62f;',
		'devicons-css_tricks': '&#xe601;',
		'devicons-smashing_magazine': '&#xe62d;',
		'devicons-netmagazine': '&#xe62e;',
		'devicons-codepen': '&#xe616;',
		'devicons-cssdeck': '&#xe62a;',
		'devicons-hackernews': '&#xe61a;',
		'devicons-dropbox': '&#xe607;',
		'devicons-google_drive': '&#xe631;',
		'devicons-visualstudio': '&#xe60c;',
		'devicons-unity_small': '&#xe621;',
		'devicons-rasberry_pi': '&#xe622;',
		'devicons-chrome': '&#xe643;',
		'devicons-ie': '&#xe644;',
		'devicons-firefox': '&#xe645;',
		'devicons-opera': '&#xe646;',
		'devicons-safari': '&#xe648;',
		'devicons-swift': '&#xe655;',
		'devicons-symfony': '&#xe656;',
		'devicons-symfony_badge': '&#xe657;',
		'devicons-less': '&#xe658;',
		'devicons-stylus': '&#xe659;',
		'devicons-trello': '&#xe65a;',
		'devicons-atlassian': '&#xe65b;',
		'devicons-jira': '&#xe65c;',
		'devicons-envato': '&#xe65d;',
		'devicons-snap_svg': '&#xe65e;',
		'devicons-raphael': '&#xe65f;',
		'devicons-google_analytics': '&#xe660;',
		'devicons-compass': '&#xe661;',
		'devicons-onedrive': '&#xe662;',
		'devicons-gulp': '&#xe663;',
		'devicons-atom': '&#xe664;',
		'devicons-cisco': '&#xe665;',
		'devicons-nancy': '&#xe666;',
		'devicons-clojure': '&#xe668;',
		'devicons-clojure_alt': '&#xe66a;',
		'devicons-perl': '&#xe669;',
		'devicons-celluloid': '&#xe66b;',
		'devicons-w3c': '&#xe66c;',
		'devicons-redis': '&#xe66d;',
		'devicons-postgresql': '&#xe66e;',
		'devicons-webplatform': '&#xe66f;',
		'devicons-jenkins': '&#xe667;',
		'devicons-requirejs': '&#xe670;',
		'devicons-opensource': '&#xe671;',
		'devicons-typo3': '&#xe672;',
		'devicons-uikit': '&#xe673;',
		'devicons-doctrine': '&#xe674;',
		'devicons-groovy': '&#xe675;',
		'devicons-nginx': '&#xe676;',
		'devicons-haskell': '&#xe677;',
		'devicons-zend': '&#xe678;',
		'devicons-gnu': '&#xe679;',
		'devicons-yeoman': '&#xe67a;',
		'devicons-heroku': '&#xe67b;',
		'devicons-debian': '&#xe67d;',
		'devicons-travis': '&#xe67e;',
		'devicons-dotnet': '&#xe67f;',
		'devicons-codeigniter': '&#xe680;',
		'devicons-javascript_badge': '&#xe681;',
		'devicons-yii': '&#xe682;',
		'devicons-msql_server': '&#xe67c;',
		'devicons-composer': '&#xe683;',
		'devicons-krakenjs_badge': '&#xe684;',
		'devicons-krakenjs': '&#xe685;',
		'devicons-mozilla': '&#xe686;',
		'devicons-firebase': '&#xe687;',
		'devicons-sizzlejs': '&#xe688;',
		'devicons-creativecommons': '&#xe689;',
		'devicons-creativecommons_badge': '&#xe68a;',
		'devicons-mitlicence': '&#xe68b;',
		'devicons-senchatouch': '&#xe68c;',
		'devicons-bugsense': '&#xe68d;',
		'devicons-extjs': '&#xe68e;',
		'devicons-mootools_badge': '&#xe68f;',
		'devicons-mootools': '&#xe690;',
		'devicons-ruby_rough': '&#xe691;',
		'devicons-komodo': '&#xe692;',
		'devicons-coda': '&#xe693;',
		'devicons-bintray': '&#xe694;',
		'devicons-terminal': '&#xe695;',
		'devicons-code': '&#xe696;',
		'devicons-responsive': '&#xe697;',
		'devicons-dart': '&#xe698;',
		'devicons-aptana': '&#xe699;',
		'devicons-mailchimp': '&#xe69a;',
		'devicons-netbeans': '&#xe69b;',
		'devicons-dreamweaver': '&#xe69c;',
		'devicons-brackets': '&#xe69d;',
		'devicons-eclipse': '&#xe69e;',
		'devicons-cloud9': '&#xe69f;',
		'devicons-scrum': '&#xe6a0;',
		'devicons-prolog': '&#xe6a1;',
		'devicons-terminal_badge': '&#xe6a2;',
		'devicons-code_badge': '&#xe6a3;',
		'devicons-mongodb': '&#xe6a4;',
		'devicons-meteor': '&#xe6a5;',
		'devicons-meteorfull': '&#xe6a6;',
		'devicons-fsharp': '&#xe6a7;',
		'devicons-rust': '&#xe6a8;',
		'devicons-ionic': '&#xe6a9;',
		'devicons-sublime': '&#xe6aa;',
		'devicons-error': '&#xe000;',
		'devicons-error_outline': '&#xe001;',
		'devicons-warning': '&#xe002;',
		'devicons-album': '&#xe019;',
		'devicons-closed_caption': '&#xe01c;',
		'devicons-equalizer': '&#xe01d;',
		'devicons-library_books': '&#xe02f;',
		'devicons-play_arrow': '&#xe037;',
		'devicons-subtitles': '&#xe048;',
		'devicons-videocam': '&#xe04b;',
		'devicons-volume_down': '&#xe04d;',
		'devicons-volume_up': '&#xe050;',
		'devicons-web': '&#xe051;',
		'devicons-business': '&#xe0af;',
		'devicons-call': '&#xe0b0;',
		'devicons-call_made': '&#xe0b2;',
		'devicons-call_merge': '&#xe0b3;',
		'devicons-call_missed': '&#xe0b4;',
		'devicons-call_received': '&#xe0b5;',
		'devicons-call_split': '&#xe0b6;',
		'devicons-chat': '&#xe0b7;',
		'devicons-comment': '&#xe0b9;',
		'devicons-contacts': '&#xe0ba;',
		'devicons-email': '&#xe0be;',
		'devicons-forum': '&#xe0bf;',
		'devicons-mail_outline': '&#xe0e1;',
		'devicons-add': '&#xe145;',
		'devicons-add_box': '&#xe146;',
		'devicons-add_circle': '&#xe147;',
		'devicons-add_circle_outline': '&#xe148;',
		'devicons-archive': '&#xe149;',
		'devicons-backspace': '&#xe14a;',
		'devicons-content_copy': '&#xe14d;',
		'devicons-content_cut': '&#xe14e;',
		'devicons-content_paste': '&#xe14f;',
		'devicons-create': '&#xe150;',
		'devicons-drafts': '&#xe151;',
		'devicons-flag': '&#xe153;',
		'devicons-gesture': '&#xe155;',
		'devicons-send': '&#xe163;',
		'devicons-cloud': '&#xe2bd;',
		'devicons-cloud_queue': '&#xe2c2;',
		'devicons-cloud_upload': '&#xe2c3;',
		'devicons-folder': '&#xe2c7;',
		'devicons-computer': '&#xe30a;',
		'devicons-desktop_mac': '&#xe30b;',
		'devicons-desktop_windows': '&#xe30c;',
		'devicons-keyboard_arrow_down': '&#xe313;',
		'devicons-keyboard_arrow_left': '&#xe314;',
		'devicons-keyboard_arrow_right': '&#xe315;',
		'devicons-keyboard_arrow_up': '&#xe316;',
		'devicons-phone_android': '&#xe324;',
		'devicons-phone_iphone': '&#xe325;',
		'devicons-blur_on': '&#xe3a5;',
		'devicons-dehaze': '&#xe3c7;',
		'devicons-near_me': '&#xe569;',
		'devicons-sms': '&#xe6ab;',
		'devicons-power': '&#xe6ac;',
		'devicons-wc': '&#xe6ad;',
		'devicons-cake': '&#xe7e9;',
		'devicons-school': '&#xe80c;',
		'devicons-share': '&#xe80d;',
		'devicons-check_box': '&#xe834;',
		'devicons-check_box_outline_blank': '&#xe835;',
		'devicons-radio_button_unchecked': '&#xe836;',
		'devicons-radio_button_checked': '&#xe837;',
		'devicons-star': '&#xe838;',
		'devicons-star_half': '&#xe839;',
		'devicons-star_outline': '&#xe83a;',
		'devicons-assignment': '&#xe85d;',
		'devicons-assignment_ind': '&#xe85e;',
		'devicons-bug_report': '&#xe868;',
		'devicons-code2': '&#xe86f;',
		'devicons-credit_card': '&#xe870;',
		'devicons-delete': '&#xe872;',
		'devicons-dns': '&#xe875;',
		'devicons-done': '&#xe876;',
		'devicons-done_all': '&#xe877;',
		'devicons-label': '&#xe892;',
		'devicons-label_outline': '&#xe893;',
		'devicons-list': '&#xe896;',
		'devicons-report_problem': '&#xe8b2;',
		'devicons-thumb_down': '&#xe8db;',
		'devicons-thumb_up': '&#xe8dc;',
		'devicons-pets': '&#xe91d;',
		'devicons-pan_tool': '&#xe925;',
		'devicons-free_breakfast': '&#xeb44;',
		'devicons-smoke_free': '&#xeb4a;',
		'devicons-smoking_rooms': '&#xeb4b;',
		'devicons-goat': '&#xe901;',
		'devicons-type': '&#xe900;',
		'devicons-browser': '&#xe902;',
		'devicons-battery-charging': '&#xe903;',
		'devicons-battery-empty': '&#xe904;',
		'devicons-battery-25': '&#xe905;',
		'devicons-battery-50': '&#xe906;',
		'devicons-battery-75': '&#xe907;',
		'devicons-battery-full': '&#xe908;',
		'devicons-microphone': '&#xe909;',
		'devicons-book': '&#xe90a;',
		'devicons-paperclip': '&#xe90b;',
		'devicons-calendar': '&#xe90c;',
		'devicons-email2': '&#xe90d;',
		'devicons-heart': '&#xe90e;',
		'devicons-enter': '&#xe90f;',
		'devicons-book2': '&#xe910;',
		'devicons-clock': '&#xe911;',
		'devicons-printer': '&#xe912;',
		'devicons-home': '&#xe913;',
		'devicons-unlocked': '&#xe914;',
		'devicons-unlocked2': '&#xe915;',
		'devicons-users': '&#xe916;',
		'devicons-user': '&#xe917;',
		'devicons-users2': '&#xe918;',
		'devicons-user2': '&#xe919;',
		'devicons-bullhorn': '&#xe91a;',
		'devicons-calculator': '&#xe91b;',
		'devicons-diamond': '&#xe91c;',
		'devicons-atom2': '&#xe91e;',
		'devicons-syringe': '&#xe91f;',
		'devicons-pill': '&#xe920;',
		'devicons-graph': '&#xe921;',
		'devicons-bars': '&#xe922;',
		'devicons-pencil': '&#xe923;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/devicons-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
