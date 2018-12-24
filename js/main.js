alert("Hello World!");

var root = document.body;

var count = 0 // added a variable

m.render("main", [
            m("h1", {class: "title"}, "Kiiboodoo"),
            m("button", {onclick: function() {count++}}, count + " clicks")
])
    
function transcrire() {
    var romaji = document.getElementById("area").value;
    romaji = romaji.replace(/ô/g, "oう");
    romaji = romaji.replace(/û/g, "uう");
    romaji = romaji.replace(/â/g, "aあ");
    romaji = romaji.replace(/î/g, "iい");
    romaji = romaji.replace(/ê/g, "eい");
    romaji = romaji.replace(/n/g, "ん");
    romaji = romaji.replace(/q/g, "っ");
    romaji = romaji.replace(/tsu/g, "つ");
    romaji = romaji.replace(/dzu/g, "づ");
    romaji = romaji.replace(/dji/g, "ぢ");
    romaji = romaji.replace(/kya/g, "きゃ");
    romaji = romaji.replace(/kyu/g, "きゅ");
    romaji = romaji.replace(/kyo/g, "きょ");
    romaji = romaji.replace(/んya/g, "にゃ");
    romaji = romaji.replace(/んyu/g, "にゅ");
    romaji = romaji.replace(/んyo/g, "にょ");
    romaji = romaji.replace(/sha/g, "しゃ");
    romaji = romaji.replace(/shi/g, "し");
    romaji = romaji.replace(/shu/g, "しゅ");
    romaji = romaji.replace(/sho/g, "しょ");
    romaji = romaji.replace(/chi/g, "ち");
    romaji = romaji.replace(/cha/g, "ちゃ");
    romaji = romaji.replace(/chu/g, "ちゅ");
    romaji = romaji.replace(/cho/g, "ちょ");
    romaji = romaji.replace(/hya/g, "ひゃ");
    romaji = romaji.replace(/hyu/g, "ひゅ");
    romaji = romaji.replace(/hyo/g, "ひょ");
    romaji = romaji.replace(/mya/g, "みゃ");
    romaji = romaji.replace(/myu/g, "みゅ");
    romaji = romaji.replace(/myo/g, "みょ");
    romaji = romaji.replace(/rya/g, "りゃ");
    romaji = romaji.replace(/ryu/g, "りゅ");
    romaji = romaji.replace(/ryo/g, "りょ");
    romaji = romaji.replace(/gya/g, "ぎゃ");
    romaji = romaji.replace(/gyu/g, "ぎゅ");
    romaji = romaji.replace(/gyo/g, "ぎょ");
    romaji = romaji.replace(/bya/g, "びゃ");
    romaji = romaji.replace(/byu/g, "びゅ");
    romaji = romaji.replace(/byo/g, "びょ");
    romaji = romaji.replace(/pya/g, "ぴゃ");
    romaji = romaji.replace(/pyu/g, "ぴゅ");
    romaji = romaji.replace(/pyo/g, "ぴょ");
    romaji = romaji.replace(/ja/g, "じゃ");
    romaji = romaji.replace(/ju/g, "じゅ");
    romaji = romaji.replace(/jo/g, "じょ");
    romaji = romaji.replace(/ba/g, "ば");
    romaji = romaji.replace(/da/g, "だ");
    romaji = romaji.replace(/ga/g, "が");
    romaji = romaji.replace(/ha/g, "は");
    romaji = romaji.replace(/ka/g, "か");
    romaji = romaji.replace(/ma/g, "ま");
    romaji = romaji.replace(/んa/g, "な");
    romaji = romaji.replace(/pa/g, "ぱ");
    romaji = romaji.replace(/ra/g, "ら");
    romaji = romaji.replace(/sa/g, "さ");
    romaji = romaji.replace(/ta/g, "た");
    romaji = romaji.replace(/wa/g, "わ");
    romaji = romaji.replace(/ya/g, "や");
    romaji = romaji.replace(/za/g, "ざ");
    romaji = romaji.replace(/a/g, "あ");
    romaji = romaji.replace(/be/g, "べ");
    romaji = romaji.replace(/de/g, "で");
    romaji = romaji.replace(/ge/g, "げ");
    romaji = romaji.replace(/he/g, "へ");
    romaji = romaji.replace(/ke/g, "け");
    romaji = romaji.replace(/me/g, "め");
    romaji = romaji.replace(/んe/g, "ね");
    romaji = romaji.replace(/pe/g, "ぺ");
    romaji = romaji.replace(/re/g, "れ");
    romaji = romaji.replace(/se/g, "せ");
    romaji = romaji.replace(/te/g, "て");
    romaji = romaji.replace(/we/g, "ゑ");
    romaji = romaji.replace(/ze/g, "ぜ");
    romaji = romaji.replace(/[eé]/g, "え");
    romaji = romaji.replace(/bi/g, "び");
    romaji = romaji.replace(/gi/g, "ぎ");
    romaji = romaji.replace(/hi/g, "ひ");
    romaji = romaji.replace(/ki/g, "き");
    romaji = romaji.replace(/mi/g, "み");
    romaji = romaji.replace(/んi/g, "に");
    romaji = romaji.replace(/pi/g, "ぴ");
    romaji = romaji.replace(/ri/g, "り");
    romaji = romaji.replace(/wi/g, "ゐ");
    romaji = romaji.replace(/ji/g, "じ");
    romaji = romaji.replace(/bo/g, "ぼ");
    romaji = romaji.replace(/do/g, "ど");
    romaji = romaji.replace(/go/g, "ご");
    romaji = romaji.replace(/ho/g, "ほ");
    romaji = romaji.replace(/ko/g, "こ");
    romaji = romaji.replace(/mo/g, "も");
    romaji = romaji.replace(/んo/g, "の");
    romaji = romaji.replace(/po/g, "ぽ");
    romaji = romaji.replace(/ro/g, "ろ");
    romaji = romaji.replace(/so/g, "そ");
    romaji = romaji.replace(/to/g, "と");
    romaji = romaji.replace(/wo/g, "を");
    romaji = romaji.replace(/yo/g, "よ");
    romaji = romaji.replace(/zo/g, "ぞ");
    romaji = romaji.replace(/o/g, "お");
    romaji = romaji.replace(/bu/g, "ぶ");
    romaji = romaji.replace(/gu/g, "ぐ");
    romaji = romaji.replace(/fu/g, "ふ");
    romaji = romaji.replace(/ku/g, "く");
    romaji = romaji.replace(/mu/g, "む");
    romaji = romaji.replace(/んu/g, "ぬ");
    romaji = romaji.replace(/pu/g, "ぷ");
    romaji = romaji.replace(/ru/g, "る");
    romaji = romaji.replace(/su/g, "す");
    romaji = romaji.replace(/yu/g, "ゆ");
    romaji = romaji.replace(/zu/g, "ず");
    romaji = romaji.replace(/di/g, "ぢ");
    romaji = romaji.replace(/じ=/g, "ぢ");
    romaji = romaji.replace(/du/g, "づ");
    romaji = romaji.replace(/ず=/g, "づ");
    romaji = romaji.replace(/i/g, "い");
    romaji = romaji.replace(/u/g, "う");
    romaji = romaji.replace(/v/g, "ゔ");
    romaji = romaji.replace(/つ=/g, "っ");
    romaji = romaji.replace(/あ=/g, "ぁ");
    romaji = romaji.replace(/い=/g, "ぃ");
    romaji = romaji.replace(/う=/g, "ぅ");
    romaji = romaji.replace(/え=/g, "ぇ");
    romaji = romaji.replace(/お=/g, "ぉ");
    romaji = romaji.replace(/や=/g, "ゃ");
    romaji = romaji.replace(/ゆ=/g, "ゅ");
    romaji = romaji.replace(/よ=/g, "ょ");
    romaji = romaji.replace(/Ô/g, "Oー");
    romaji = romaji.replace(/Û/g, "Uー");
    romaji = romaji.replace(/Â/g, "Aー");
    romaji = romaji.replace(/Î/g, "Iー");
    romaji = romaji.replace(/Ê/g, "Eー");
    romaji = romaji.replace(/N/g, "ン");
    romaji = romaji.replace(/V/g, "ヴ");
    romaji = romaji.replace(/Q/g, "ッ");
    romaji = romaji.replace(/SHI/g, "シ");
    romaji = romaji.replace(/CHI/g, "チ");
    romaji = romaji.replace(/TSU/g, "ツ");
    romaji = romaji.replace(/DJU/g, "ヅ");
    romaji = romaji.replace(/DJI/g, "ヂ");
    romaji = romaji.replace(/KYA/g, "キャ");
    romaji = romaji.replace(/KYU/g, "キュ");
    romaji = romaji.replace(/KYO/g, "キョ");
    romaji = romaji.replace(/ンYA/g, "ニャ");
    romaji = romaji.replace(/ンYU/g, "ニュ");
    romaji = romaji.replace(/ンYO/g, "ニョ");
    romaji = romaji.replace(/SHA/g, "シャ");
    romaji = romaji.replace(/SHU/g, "シュ");
    romaji = romaji.replace(/SHO/g, "ショ");
    romaji = romaji.replace(/CHA/g, "チャ");
    romaji = romaji.replace(/CHU/g, "チュ");
    romaji = romaji.replace(/CHO/g, "チョ");
    romaji = romaji.replace(/HYA/g, "ヒャ");
    romaji = romaji.replace(/HYU/g, "ヒュ");
    romaji = romaji.replace(/HYO/g, "ヒョ");
    romaji = romaji.replace(/MYA/g, "ミャ");
    romaji = romaji.replace(/MYU/g, "ミュ");
    romaji = romaji.replace(/MYO/g, "ミョ");
    romaji = romaji.replace(/RYA/g, "リャ");
    romaji = romaji.replace(/RYU/g, "リュ");
    romaji = romaji.replace(/RYO/g, "リョ");
    romaji = romaji.replace(/GYA/g, "ギャ");
    romaji = romaji.replace(/GYU/g, "ギュ");
    romaji = romaji.replace(/GYO/g, "ギョ");
    romaji = romaji.replace(/BYA/g, "ビャ");
    romaji = romaji.replace(/BYU/g, "ビュ");
    romaji = romaji.replace(/BYO/g, "ビョ");
    romaji = romaji.replace(/PYA/g, "ピャ");
    romaji = romaji.replace(/PYU/g, "ピュ");
    romaji = romaji.replace(/PYO/g, "ピョ");
    romaji = romaji.replace(/JA/g, "ジャ");
    romaji = romaji.replace(/JU/g, "ジュ");
    romaji = romaji.replace(/JO/g, "ジョ");
    romaji = romaji.replace(/BA/g, "バ");
    romaji = romaji.replace(/DA/g, "ダ");
    romaji = romaji.replace(/GA/g, "ガ");
    romaji = romaji.replace(/HA/g, "ハ");
    romaji = romaji.replace(/KA/g, "カ");
    romaji = romaji.replace(/MA/g, "マ");
    romaji = romaji.replace(/ンA/g, "ナ");
    romaji = romaji.replace(/PA/g, "パ");
    romaji = romaji.replace(/RA/g, "ラ");
    romaji = romaji.replace(/SA/g, "サ");
    romaji = romaji.replace(/TA/g, "タ");
    romaji = romaji.replace(/WA/g, "ワ");
    romaji = romaji.replace(/YA/g, "ヤ");
    romaji = romaji.replace(/ZA/g, "ザ");
    romaji = romaji.replace(/A/g, "ア");
    romaji = romaji.replace(/BE/g, "ベ");
    romaji = romaji.replace(/DE/g, "デ");
    romaji = romaji.replace(/GE/g, "ゲ");
    romaji = romaji.replace(/HE/g, "ヘ");
    romaji = romaji.replace(/KE/g, "ケ");
    romaji = romaji.replace(/ME/g, "メ");
    romaji = romaji.replace(/ンE/g, "ネ");
    romaji = romaji.replace(/PE/g, "ペ");
    romaji = romaji.replace(/RE/g, "レ");
    romaji = romaji.replace(/SE/g, "セ");
    romaji = romaji.replace(/TE/g, "テ");
    romaji = romaji.replace(/WE/g, "ヱ");
    romaji = romaji.replace(/ZE/g, "ゼ");
    romaji = romaji.replace(/[EÉ]/g, "エ");
    romaji = romaji.replace(/BI/g, "ビ");
    romaji = romaji.replace(/GI/g, "ギ");
    romaji = romaji.replace(/HI/g, "ヒ");
    romaji = romaji.replace(/KI/g, "キ");
    romaji = romaji.replace(/MI/g, "ミ");
    romaji = romaji.replace(/ンI/g, "ニ");
    romaji = romaji.replace(/PI/g, "ピ");
    romaji = romaji.replace(/RI/g, "リ");
    romaji = romaji.replace(/WI/g, "ヰ");
    romaji = romaji.replace(/JI/g, "ジ");
    romaji = romaji.replace(/BO/g, "ボ");
    romaji = romaji.replace(/DO/g, "ド");
    romaji = romaji.replace(/GO/g, "ゴ");
    romaji = romaji.replace(/HO/g, "ホ");
    romaji = romaji.replace(/KO/g, "コ");
    romaji = romaji.replace(/MO/g, "モ");
    romaji = romaji.replace(/ンO/g, "ノ");
    romaji = romaji.replace(/PO/g, "ポ");
    romaji = romaji.replace(/RO/g, "ロ");
    romaji = romaji.replace(/SO/g, "ソ");
    romaji = romaji.replace(/TO/g, "ト");
    romaji = romaji.replace(/WO/g, "ヲ");
    romaji = romaji.replace(/YO/g, "ヨ");
    romaji = romaji.replace(/ZO/g, "ゾ");
    romaji = romaji.replace(/O/g, "オ");
    romaji = romaji.replace(/BU/g, "ブ");
    romaji = romaji.replace(/GU/g, "グ");
    romaji = romaji.replace(/FU/g, "フ");
    romaji = romaji.replace(/KU/g, "ク");
    romaji = romaji.replace(/MU/g, "ム");
    romaji = romaji.replace(/ンU/g, "ヌ");
    romaji = romaji.replace(/PU/g, "プ");
    romaji = romaji.replace(/RU/g, "ル");
    romaji = romaji.replace(/SU/g, "ス");
    romaji = romaji.replace(/YU/g, "ユ");
    romaji = romaji.replace(/ZU/g, "ズ");
    romaji = romaji.replace(/DI/g, "ヂ");
    romaji = romaji.replace(/ジ=/g, "ヂ");
    romaji = romaji.replace(/DU/g, "ヅ");
    romaji = romaji.replace(/ズ=/g, "ヅ");
    romaji = romaji.replace(/I/g, "イ");
    romaji = romaji.replace(/U/g, "ウ");
    romaji = romaji.replace(/ア=/g, "ァ");
    romaji = romaji.replace(/イ=/g, "ィ");
    romaji = romaji.replace(/ウ=/g, "ゥ");
    romaji = romaji.replace(/エ=/g, "ェ");
    romaji = romaji.replace(/オ=/g, "ォ");
    romaji = romaji.replace(/ツ=/g, "ッ");
    romaji = romaji.replace(/ヤ=/g, "ャ");
    romaji = romaji.replace(/ユ=/g, "ュ");
    romaji = romaji.replace(/ヨ=/g, "ョ");
    romaji = romaji.replace(/\./g, "。");
    romaji = romaji.replace(/\,/g, "、");
    romaji = romaji.replace(/\!/g, "！");
    romaji = romaji.replace(/\?/g, "？");
    romaji = romaji.replace(/\:/g, "：");
    romaji = romaji.replace(/\(/g, "（");
    romaji = romaji.replace(/\)/g, "）");
    romaji = romaji.replace(/\[/g, "［");　
    romaji = romaji.replace(/\]/g, "］");
    romaji = romaji.replace(/\«/g, "「");
    romaji = romaji.replace(/\»/g, "」");
    //document.getElementById("area").value = romaji;
}