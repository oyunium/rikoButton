// button processing
//!!!!!!不要なIDはgetしないこと！nullを呼び出した場合それ以降のコードが実行されない!!!!!! by N.
function iFrame_top() {
	document.getElementById("ArticleFrame").src = "./src/iframeHTML/iframe_top.html";
	document.getElementById('MENU06').innerHTML = '<li id="MENU06" class="menu-on"><a onclick="iFrame_top();">TOP</a></li>';
	document.getElementById('MENU07').innerHTML = '<li id="MENU07"><a onclick="iFrame_uncategorize();">その他</a></li>';
	document.getElementById('MENU08').innerHTML = '<li id="MENU08"><a onclick="iFrame_greeting();">あいさつ</a></li>';
	document.getElementById('MENU10').innerHTML = '<li id="MENU10"><a onclick="iFrame_valorant();">VALORANT関連</a></li>';
	document.getElementById('MENU11').innerHTML = '<li id="MENU11"><a onclick="iFrame_admiration();">感情表現</a></li>';
	// document.getElementById('MENU12').innerHTML = '<li id="MENU12"><a
	// onclick="iFrame_daipan();">台パン</a></li>';
	// document.getElementById('MENU13').innerHTML = '<li id="MENU13"><a
	// onclick="iFrame_daipan();">感謝</a></li>';
};
function iFrame_uncategorize() {
	document.getElementById("ArticleFrame").src = "./src/iframeHTML/iframe_uncategorize.html";
	document.getElementById('MENU06').innerHTML = '<li id="MENU06"><a onclick="iFrame_top();">TOP</a></li>';
	document.getElementById('MENU07').innerHTML = '<li id="MENU07" class="menu-on"><a onclick="iFrame_uncategorize();">その他</a></li>';
	document.getElementById('MENU08').innerHTML = '<li id="MENU08"><a onclick="iFrame_greeting();">あいさつ</a></li>';
	document.getElementById('MENU10').innerHTML = '<li id="MENU10"><a onclick="iFrame_valorant();">VALORANT関連</a></li>';
	document.getElementById('MENU11').innerHTML = '<li id="MENU11"><a onclick="iFrame_admiration();">感情表現</a></li>';
	// document.getElementById('MENU12').innerHTML = '<li id="MENU12"><a
	// onclick="iFrame_daipan();">台パン</a></li>';
	// document.getElementById('MENU13').innerHTML = '<li id="MENU13"><a
	// onclick="iFrame_daipan();">感謝</a></li>';
};
function iFrame_greeting() {
	document.getElementById("ArticleFrame").src = "./src/iframeHTML/iframe_greeting.html";
	document.getElementById('MENU06').innerHTML = '<li id="MENU06"><a onclick="iFrame_top();">TOP</a></li>';
	document.getElementById('MENU07').innerHTML = '<li id="MENU07"><a onclick="iFrame_uncategorize();">その他</a></li>';
	document.getElementById('MENU08').innerHTML = '<li id="MENU08" class="menu-on"><a onclick="iFrame_greeting();">あいさつ</a></li>';
	document.getElementById('MENU10').innerHTML = '<li id="MENU10"><a onclick="iFrame_valorant();">VALORANT関連</a></li>';
	document.getElementById('MENU11').innerHTML = '<li id="MENU11"><a onclick="iFrame_admiration();">感情表現</a></li>';
	// document.getElementById('MENU12').innerHTML = '<li id="MENU12"><a
	// onclick="iFrame_daipan();">台パン</a></li>';
	// document.getElementById('MENU13').innerHTML = '<li id="MENU13"><a
	// onclick="iFrame_appreciation();">感謝</a></li>';
};
function iFrame_tmp() {
	document.getElementById("ArticleFrame").src = "./src/iframeHTML/iframe_tmp.html";
	document.getElementById('MENU06').innerHTML = '<li id="MENU06"><a onclick="iFrame_top();">TOP</a></li>';
	document.getElementById('MENU07').innerHTML = '<li id="MENU07"><a onclick="iFrame_uncategorize();">その他</a></li>';
	document.getElementById('MENU08').innerHTML = '<li id="MENU08"><a onclick="iFrame_greeting();">あいさつ</a></li>';
	document.getElementById('MENU09').innerHTML = '<li id="MENU09" class="menu-on"><a onclick="iFrame_tmp();">テンプレート</a></li>';
	document.getElementById('MENU10').innerHTML = '<li id="MENU10"><a onclick="iFrame_valorant();">VALORANT関連</a></li>';
	document.getElementById('MENU11').innerHTML = '<li id="MENU11"><a onclick="iFrame_admiration();">感情表現</a></li>';
	// document.getElementById('MENU12').innerHTML = '<li id="MENU12"><a
	// onclick="iFrame_daipan();">台パン</a></li>';
	// document.getElementById('MENU13').innerHTML = '<li id="MENU13"><a
	// onclick="iFrame_appreciation();">感謝</a></li>';
};
function iFrame_valorant() {
	document.getElementById("ArticleFrame").src = "./src/iframeHTML/iframe_valorant.html";
	document.getElementById('MENU06').innerHTML = '<li id="MENU06"><a onclick="iFrame_top();">TOP</a></li>';
	document.getElementById('MENU07').innerHTML = '<li id="MENU07"><a onclick="iFrame_uncategorize();">その他</a></li>';
	document.getElementById('MENU08').innerHTML = '<li id="MENU08"><a onclick="iFrame_greeting();">あいさつ</a></li>';
	document.getElementById('MENU10').innerHTML = '<li id="MENU10" class="menu-on"><a onclick="iFrame_valorant();">VALORANT関連</a></li>';
	document.getElementById('MENU11').innerHTML = '<li id="MENU11"><a onclick="iFrame_admiration();">感情表現</a></li>';
	// document.getElementById('MENU12').innerHTML = '<li id="MENU12"><a
	// onclick="iFrame_daipan();">台パン</a></li>';
	// document.getElementById('MENU13').innerHTML = '<li id="MENU13"><a
	// onclick="iFrame_appreciation();">感謝</a></li>';
};
function iFrame_admiration() {
	document.getElementById("ArticleFrame").src = "./src/iframeHTML/iframe_admiration.html";
	document.getElementById('MENU06').innerHTML = '<li id="MENU06"><a onclick="iFrame_top();">TOP</a></li>';
	document.getElementById('MENU07').innerHTML = '<li id="MENU07"><a onclick="iFrame_uncategorize();">その他</a></li>';
	document.getElementById('MENU08').innerHTML = '<li id="MENU08"><a onclick="iFrame_greeting();">あいさつ</a></li>';
	document.getElementById('MENU10').innerHTML = '<li id="MENU10"><a onclick="iFrame_valorant();">VALORANT関連</a></li>';
	document.getElementById('MENU11').innerHTML = '<li id="MENU11" class="menu-on"><a onclick="iFrame_admiration();">感情表現</a></li>';
	// document.getElementById('MENU12').innerHTML = '<li id="MENU12"><a
	// onclick="iFrame_daipan();">台パン</a></li>';
	// document.getElementById('MENU13').innerHTML = '<li id="MENU13"><a
	// onclick="iFrame_appreciation();">感謝</a></li>';
};

function iFrame_daipan() {
	document.getElementById("ArticleFrame").src = "./src/iframeHTML/iframe_daipan.html";
	document.getElementById('MENU06').innerHTML = '<li id="MENU06"><a onclick="iFrame_top();">TOP</a></li>';
	document.getElementById('MENU07').innerHTML = '<li id="MENU07"><a onclick="iFrame_uncategorize();">その他</a></li>';
	document.getElementById('MENU08').innerHTML = '<li id="MENU08"><a onclick="iFrame_greeting();">あいさつ</a></li>';
	document.getElementById('MENU10').innerHTML = '<li id="MENU10"><a onclick="iFrame_valorant();">VALORANT関連</a></li>';
	document.getElementById('MENU11').innerHTML = '<li id="MENU11"><a onclick="iFrame_admiration();">感情表現</a></li>';
	// document.getElementById('MENU12').innerHTML = '<li id="MENU12"
	// class="menu-on"><a onclick="iFrame_daipan();">台パン</a></li>';
	// document.getElementById('MENU13').innerHTML = '<li id="MENU13"><a
	// onclick="iFrame_appreciation();">感謝</a></li>';
};
function iFrame_appreciation() {
	document.getElementById("ArticleFrame").src = "./src/iframeHTML/iframe_appreciation.html";
	document.getElementById('MENU06').innerHTML = '<li id="MENU06"><a onclick="iFrame_top();">TOP</a></li>';
	document.getElementById('MENU07').innerHTML = '<li id="MENU07"><a onclick="iFrame_uncategorize();">その他</a></li>';
	document.getElementById('MENU08').innerHTML = '<li id="MENU08"><a onclick="iFrame_greeting();">あいさつ</a></li>';
	document.getElementById('MENU10').innerHTML = '<li id="MENU10"><a onclick="iFrame_valorant();">VALORANT関連</a></li>';
	document.getElementById('MENU11').innerHTML = '<li id="MENU11"><a onclick="iFrame_admiration();">感情表現</a></li>';
	// document.getElementById('MENU12').innerHTML = '<li id="MENU12"><a
	// onclick="iFrame_daipan();">台パン</a></li>';
	// document.getElementById('MENU13').innerHTML = '<li id="MENU13"
	// class="menu-on"><a onclick="iFrame_appreciation();">感謝</a></li>';
};