function clickBtn(){
    let numtext1 = document.getElementById('text1').innerText;
    let numtext2 = document.getElementById('text2').innerText;
    let numtext3 = document.getElementById('text3').innerText;
    let numtext4 = document.getElementById('text4').innerText;
    let numtext5 = document.getElementById('text5').innerText;
    let numtext6 = document.getElementById('text6').innerText;
    let numtext7 = document.getElementById('text7').innerText;
    let numtext8 = document.getElementById('text8').innerText;
    let numtext9 = document.getElementById('text9').innerText;
    let numtext10 = document.getElementById('text10').innerText;
    const num1 = document.form1.volume;
	const num2 = num1.selectedIndex;
	const str = num1.options[num2].value;
    const words = [];
    words.push("arduino", "パッシブブザー", "アクティブブザー", "可変抵抗", "LED", "OLEDディスプレイ", "7セグメントLED", "トグルスイッチ", "タクトスイッチ", "スピーカー", "ギヤードモーター", "DCモーター", "ステッピングモーター", "サーボモーター", "NE555", "超音波センサー", "IRセンサー", "温度センサー", "光センサー", "LM386", "NJM4558", "6.3mm オーディオジャック", "3.5mm オーディオジャック", "ジョイスティック", "レーザーポインター", "DFPlayer", "キースイッチ");

    document.getElementById('text1').innerText = '';
    document.getElementById('text2').innerText = '';
    document.getElementById('text3').innerText = '';
    document.getElementById('text4').innerText = '';
    document.getElementById('text5').innerText = '';
    document.getElementById('text6').innerText = '';
    document.getElementById('text7').innerText = '';
    document.getElementById('text8').innerText = '';
    document.getElementById('text9').innerText = '';
    document.getElementById('text10').innerText = '';
    if (str >= 1) {
        let get = words[Math.floor(Math.random() * words.length)];
        document.getElementById('text1').innerText = get;
        if (str >= 2) {
            let get = words[Math.floor(Math.random() * words.length)];
            document.getElementById('text2').innerText = get;
            if (str >= 3) {
                let get = words[Math.floor(Math.random() * words.length)];
                document.getElementById('text3').innerText = get;
                if (str >= 4) {
                    let get = words[Math.floor(Math.random() * words.length)];
                    document.getElementById('text4').innerText = get;
                    if (str >= 5) {
                        let get = words[Math.floor(Math.random() * words.length)];
                        document.getElementById('text5').innerText = get;
                        if (str >= 6) {
                            let get = words[Math.floor(Math.random() * words.length)];
                            document.getElementById('text6').innerText = get;
                            if (str >= 7) {
                                let get = words[Math.floor(Math.random() * words.length)];
                                document.getElementById('text7').innerText = get;
                                if (str >= 8) {
                                    let get = words[Math.floor(Math.random() * words.length)];
                                    document.getElementById('text8').innerText = get;
                                    if (str >= 9) {
                                        let get = words[Math.floor(Math.random() * words.length)];
                                        document.getElementById('text9').innerText = get;
                                        if (str >= 10) {
                                            let get = words[Math.floor(Math.random() * words.length)];
                                            document.getElementById('text10').innerText = get;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
