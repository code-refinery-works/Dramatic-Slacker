// ===== 定数・データ =====
const EXCUSES = {
  sf: {
    nidone: `…聞こえるか？私は今、時空の歪み（タイム・アノマリー）に囚われている。午前7時、確かに私はベッドサイドの起爆装置（アラーム）を解除した。だがその瞬間、重力波が私の意識を事象の地平線へと引きずり込んだのだ。肉体はベッドに固定され、意識だけが宇宙の誕生を目撃していた。生還確率0.03%の特異点を突破し、私は今、洗面所へ到達した。これより貴社へ向けてワープドライブを敢行する。待っていてくれ、キャプテン（※課長のこと）。`,
    game: `緊急通信を送る。昨夜23:00、私のデスクに届いた「クエスト通知」は、単なるゲームではなかった。それは銀河の命運を賭けた最終防衛ラインへの招集状だった。私は7時間にわたり、無数の敵AIと交戦し、ついに銀河を救った。しかし帰還した私の肉体は、時空間移動のダメージにより機能不全に陥っている。現在、エナジーコアの再起動中（エナジードリンク摂取中）。到着まで今しばらく時間が必要だ。`,
    yarukinai: `報告する。本日の起動シーケンスにおいて、私の中枢制御システムが予期せぬエラーを検出した。診断結果：「モチベーション燃料の急激な枯渇」および「月曜日特有の重力場の異常増大」。これは通常の50倍の重力が全身を覆うという稀有な現象だ。現在、緊急修復プロトコルを実行中。推定到着時刻は——宇宙の意思が決定する。`,
    sns: `警告！私は昨夜、インターネット空間のブラックホール——通称「リール地獄」——に捕捉された。光速で流れる動画コンテンツが私の認識を書き換え、気づいた時には時間軸が6時間前進していた。現在、脱出に成功し地球時間への再同期を実施中。ただし脳内のドーパミン回路が過負荷状態のため、移動速度が通常の30%に低下している。`,
    netflix: `緊急事態発生。昨夜20:00、私は「あと1話だけ」という罠に嵌り、時空連続体の歪みに飲み込まれた。シーズン3の最終話が終わった時、窓の外はすでに別の時代——翌朝5:30——に変わっていた。現在、超光速睡眠プロトコルを2時間実行し意識の回復を試みた。到着は光速の壁と闘いながら行う。`,
    manga: `重大発表。本日の新刊「第23巻」は、単なる漫画ではなかった。それは私の魂と直接インターフェースするニューロリンク型テキストだった。一気読みにより私の時間感覚は完全に上書きされ、気づいた時には地球は8時間分公転していた。現在、現実空間への再統合プロセスを実行中。`,
    nap: `5分間のメンテナンスシャットダウンのはずだった。しかし私の演算コアは、過負荷状態からの回復に予想外の時間を要した。体内時計のタイムサーバーとの同期が外れ、3時間のロストタイムが発生。ただいま全システムの再起動完了。最大戦速で向かう。`,
    cat: `緊急報告。本日、私のキーボード型コンソールが生体ユニット（ネコ科哺乳類、体重4.2kg）によって占有された。このユニットは重力制御能力を持ち、物理的な移動が不可能な状態が継続している。宇宙の法則より、ネコが寝ている間は人間は動いてはならない——これは銀河条約第7条に明記されている。解除まで今しばらく待機を要請する。`,
    deadline: `衝撃の真実を告白する。私の時空間センサーが、納期の情報を異次元に誤送信していたことが判明した。いかなる先進文明も、情報の次元間ロスは避けられない。現在、緊急回収プロトコルを発動し、全速力で対応にあたっている。宇宙に謝罪を——そして貴殿にも。`,
  },
  history: {
    nidone: `臣、謹んで奏上つかまつる。本朝、鶏鳴の刻に目覚め申候ところ、天より重き使命の声が降り、再び褥（しとね）へと引き戻されたる次第にございます。これは怠惰にあらず、天命との邂逅にございました。ただいま甲冑の紐を締め直し、馬上にて参上の準備を整えておりまする。いずれの戦場へも馳せ参じる所存。何卒ご寛恕のほどを。`,
    game: `余は昨夜、隣国との国境紛争の解決に全精力を傾けた。デジタルの戦場において、七時間にわたる激戦の末、ついに勝利を収め申した。しかしながら、戦の疲れは余の肉体を深く蝕んでおる。これより身支度を整え、馬を駆って参上する所存にございます。戦の功を以て、御前での遅参の罪をお赦しくださるよう、謹んで申し上げます。`,
    yarukinai: `謹啓。本日、私は深刻な精神的重圧と向き合っておりました。それは武士道に言う「命のやり取り前夜の静謐」にも似た、魂の深淵との対話でございます。この内なる戦いを制してこそ、本日の業務に真の意味が宿ると確信し、今しばらく瞑想を続けておりました。ただいまより参上いたします。`,
    sns: `拙者、昨夜より情報の海——俗に申す「インターネット」——にて重要な情報収集任務に当たっておりました。敵情視察（動画の流れ）を見続けること六時間、気づけば夜が明けておりました。これは怠惰にあらず、情報戦における尊い犠牲にございます。`,
    netflix: `某、昨夜より隣国の文化（連続ドラマ）の研究に当たっておりました。「あと一話」という策略は、古来より城攻めと同じ——一度侵入を許せば止まらぬものにございます。夜明けまで奮戦いたしました。これも文化交流のためと何卒ご理解ください。`,
    manga: `謹んで申し上げます。昨日、到着した巻物（漫画の23巻）を解読するに、その内容は我が藩の命運にも関わる重要な示唆を含んでおりました。一夜を徹して読み解き、ようやく真意を把握いたしました。これも主君への忠義と思し召しください。`,
    nap: `申し上げます。本日、陣中にて五分間の英気養成（昼寝）を試みたところ、三時間の深い眠りに引きずり込まれました。これは戦場の疲れではなく、天が与えた鋭気補充の時間と解釈しております。起き上がった今、百万の力が漲っております。`,
    cat: `謹白。本日、我が軍師（猫）が戦略文書（キーボード）の上に陣取り、動かすことが叶いませぬ。古より「猫は神の使い」と申します。軍師の意図を無下にすることは天意に背くと判断し、ただいままで待機しておりました。軍師がお目覚めになり次第、ただちに参上いたします。`,
    deadline: `痛恨の極みを以て申し上げます。納期の認識において、拙者の記憶の中に霧が立ち込めており、日程を正確に把握しておりませなんだ。これは怠惰にあらず、情報伝達における伝令の不備にございます。全責任は伝令（私の記憶）にあり、拙者は被害者にございます。`,
  },
  love: {
    nidone: `ねえ、聞いてほしいんだけど……私、今朝アラームを止めた瞬間、昨日の君との会話が走馬灯のように蘇って、気づいたら涙が止まらなくなって……起き上がれなかったの。これって病気かな、それとも……愛ってこういうものかな。頬に伝う雫を拭いながら、今やっとベッドから出られた。遅れてごめん。でも、こんな気持ちで出社するから、今日の私を受け取ってほしい。`,
    game: `告白します。昨夜のゲームは、もはやゲームではありませんでした。あの画面の中で、私は誰かを守るために戦っていた。現実では守れなかった何かを——。夜明けとともにゲームが終わった時、私の頬には涙が。人はなぜ、仮想の世界にリアルな感情を見出すのでしょう。今日、少し遅れます。心の整理をつけながら向かいます。`,
    yarukinai: `正直に言います。今日、外に出る理由が見つからなかった。でも、あなたの顔を思い浮かべたら——不思議と足が動いた。人って、誰かのためなら動けるんですね。今向かっています。少し遅れるけど、ちゃんと行くから。待っていてください。`,
    sns: `昨夜、スマホの画面を眺めながら、孤独について考えていました。何万もの人の笑顔の動画を見ながら、なぜか胸が痛くて。気づいたら夜が明けていて、泣いていました。情報の洪水の中で、私は何かを探していたのかもしれない。今日は少し遅れます。許してください。`,
    netflix: `「余命〇〇日」のドラマを見ていたら、止まれなかった。あの主人公の瞳が、かつての誰かに重なって——。エンドロールが終わる頃には朝で、枕は濡れていた。人は時に、フィクションにしか泣けない夜があります。今日少し遅れます。`,
    manga: `23巻、読みました。あのラストシーン——言葉にならない。人は二次元にも魂を宿すことができるんですね。<overlap>
    manga: `23巻、読みました。あのラストシーン——言葉にならない。人は二次元にも魂を宿すことができるんですね。`,
    nap: `5分間だけ目を閉じたつもりだった。でも夢の中であなたに会って、離れたくなくて——気づいたら3時間経っていた。夢と現実の境界線で、私はあなたの名前を呼んでいた気がします。今向かっています。`,
    cat: `猫が膝から離れなかった。この小さな命が私を必要としている——その事実が、どんな仕事よりも尊く感じた瞬間があった。猫の温もりと、あなたへの罪悪感の間で揺れながら、今やっと立ち上がれました。`,
    deadline: `納期を忘れていたのではなく、抱えすぎていたのかもしれない。完璧にやり遂げたい気持ちが、かえって手を止めさせていた。不完全な私を、少しだけ許してもらえますか。今、全力で向かっています。`,
  },
  nordic: {
    nidone: `[INCIDENT REPORT - 07:42 UTC] 本日0600時、アラームシステムは正常に起動した。しかし調査の結果、停止ボタンを押した直後、私の意識は不可解な形で遮断されたことが判明した。監視カメラには映らない3時間。この空白について、私には一切の記憶がない。果たしてこれは単なる睡眠か——それとも、何者かが私の意識に介入したのか。真相究明のため、現在ベッドを離れた。`,
    game: `[CONFIDENTIAL - EYES ONLY] 昨夜2300時より、私はオンラインゲームを通じて謎のメッセージを受信し続けた。送信者不明。内容は断片的だが、重要な情報が含まれていると判断し、夜を徹して解読にあたった。夜明けに最後のピースが揃った。真実は——まだ言えない。いずれわかる。今向かっている。`,
    yarukinai: `[STATUS: UNKNOWN] 今朝、私は鏡の中の自分と長い時間向き合った。その目が何かを語りかけていた。「本当に行く必要があるのか」と。この問いに答えを出すのに、2時間かかった。答えは「おそらく、はい」だった。今向かっている。`,
    sns: `[ANOMALY DETECTED] 昨夜より、私のデバイスは異常なコンテンツフィードに接続されていた。アルゴリズムが私の思考パターンを学習し、脱出不可能なループを形成。外部からの介入なしには抜け出せなかった。今朝、電源を強制シャットダウンすることでようやく解放された。詳細は対面で説明する。`,
    netflix: `[LOG - 0530] シリーズ最終話が終わった時、部屋には朝の光が差し込んでいた。12時間、私はスクリーンの前に座っていた。なぜそこまで見続けたのか——今もわからない。ただ、あの結末は何かを意味している気がして、考えながら向かっている。`,
    manga: `[REPORT] 23巻を読了した。最後のページを閉じた時、外は明るかった。この作品が私に何を伝えようとしていたのか、通勤しながら考える。答えは会社に着く頃にわかるかもしれない。`,
    nap: `[UNEXPLAINED] 5分間の休憩のはずだった。次に気づいた時、時計は3時間進んでいた。この間、何が起きていたのか——私には記憶がない。`,
    cat: `[OBSERVATION] 本日0800時より、猫が私のキーボードを占有している。猫はこちらを見ている。猫は何かを知っている。私には動かせない。理由は説明できないが、動かすべきではないと判断した。`,
    deadline: `[CASE FILE - OPEN] 納期の認識に齟齬が生じた。私の手帳には別の日付が記されている。誰かが書き換えたのか、私が誤認したのか——現在調査中。いずれにせよ、今すぐ対応に向かう。`,
  },
};

// 遅延時間のテキスト生成
function getDelayText(minutes) {
  if (minutes < 30) return `${minutes}分`;
  if (minutes < 60) return `${minutes}分（約半刻）`;
  if (minutes < 120) return `${minutes}分（1時間超）`;
  if (minutes < 1440) return `${Math.floor(minutes/60)}時間${minutes%60 > 0 ? minutes%60+'分' : ''}`;
  if (minutes < 10080) return `${Math.floor(minutes/1440)}日間`;
  if (minutes < 43200) return `${Math.floor(minutes/10080)}週間`;
  return `${Math.floor(minutes/43200)}ヶ月`;
}

// メイン生成関数
function generateExcuse() {
  const excuseType = document.getElementById('excuseType').value;
  const delayMinutes = parseInt(document.getElementById('delaySlider').value);
  const genre = document.getElementById('genre').value;
  const bossRole = document.getElementById('bossRole').value;
  const bossMood = document.getElementById('bossMood').value;
  const bossBlood = document.getElementById('bossBlood').value;

  // BGM再生
  playBGM(genre);

  // 生成アニメーション
  showGeneratingAnimation();

  setTimeout(() => {
    const delayText = getDelayText(delayMinutes);
    let baseText = excuseTemplates[genre][excuseType] || excuseTemplates[genre]['nidone'];
    
    // 遅延時間を挿入
    baseText = baseText + `\n\n【遅延時間：${delayText}】`;

    // 許容確率計算
    const tolerance = calculateTolerance(bossRole, bossMood, bossBlood, delayMinutes);

    displayResult(baseText, tolerance, genre);
  }, 2000);
}

function showGeneratingAnimation() {
  const output = document.getElementById('outputArea');
  output.style.display = 'block';
  output.innerHTML = `
    <div class="generating">
      <div class="spinner"></div>
      <p class="gen-text">言い訳を劇的に変換中...</p>
      <p class="gen-sub">宇宙の法則と交渉しています</p>
    </div>
  `;
  document.getElementById('resultSection').style.display = 'block';
  document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
}

function calculateTolerance(role, mood, blood, delayMinutes) {
  let base = 70;
  
  // 役職による調整
  const roleModifiers = { shacho: -30, bucho: -20, kacho: -10, senpai: 10, doki: 20 };
  base += roleModifiers[role] || 0;

  // 機嫌による調整
  const moodModifiers = { angry: -30, normal: 0, good: 20 };
  base += moodModifiers[mood] || 0;

  // 血液型による調整（完全な偽科学）
  const bloodModifiers = { A: -5, B: 10, O: 5, AB: 0 };
  base += bloodModifiers[blood] || 0;

  // 遅延時間による調整
  if (delayMinutes > 60) base -= 10;
  if (delayMinutes > 120) base -= 10;
  if (delayMinutes > 1440) base -= 20;
  if (delayMinutes > 10080) base -= 30;

  return Math.max(1, Math.min(99, base));
}

function displayResult(text, tolerance, genre) {
  const output = document.getElementById('outputArea');
  const isLowTolerance = tolerance < 10;
  const isMidTolerance = tolerance < 30;

  const genreColors = {
    sf: { bg: '#0a0a2e', text: '#00ffff', accent: '#7b2fff' },
    history: { bg: '#2c1810', text: '#f0d080', accent: '#c8860a' },
    love: { bg: '#1a0a1a', text: '#ff9ec8', accent: '#ff4488' },
    nordic: { bg: '#0d1117', text: '#c9d1d9', accent: '#58a6ff' },
  };

  const colors = genreColors[genre] || genreColors.sf;

  let toleranceColor = '#00ff88';
  if (tolerance < 30) toleranceColor = '#ffaa00';
  if (tolerance < 10) toleranceColor = '#ff3344';

  const formattedText = text.replace(/\n/g, '<br>');

  output.innerHTML = `
    <div class="result-card" style="background: ${colors.bg}; border-color: ${colors.accent};">
      <div class="result-header" style="color: ${colors.accent};">
        ✦ 言い訳生成完了 ✦
      </div>
      <div class="result-text" style="color: ${colors.text};">
        ${formattedText}
      </div>
      <div class="tolerance-section">
        <div class="tolerance-label">🎯 上司の許容確率（推定）</div>
        <div class="tolerance-bar-wrap">
          <div class="tolerance-bar" style="width: ${tolerance}%; background: ${toleranceColor};"></div>
        </div>
        <div class="tolerance-value" style="color: ${toleranceColor};">${tolerance}%</div>
        ${isLowTolerance ? `<div class="safety-net">⚠️ 許容確率10%未満：猫セーフティネット発動！<br>「猫がキーボードで寝ています（AI生成画像添付）」モードへ移行しました。</div>` : ''}
        ${isMidTolerance && !isLowTolerance ? `<div class="warning-mid">⚡ 危険水域です。プリン送付（Phase 3機能）の準備をお勧めします。</div>` : ''}
      </div>
      <div class="copy-section">
        <button class="copy-btn" onclick="copyToClipboard()">📋 コピーしてSlackに貼る</button>
        <button class="tts-btn" onclick="speakText()">🎙️ 朗読する（BGM付き）</button>
      </div>
      <div id="nftBadge" class="nft-badge">
        🔗 NFT言い訳（Proof of Excuse）発行済み<br>
        <span class="nft-hash">Token ID: 0x${generateHash()}</span>
      </div>
    </div>
  `;

  // パニックボタン表示
  document.getElementById('panicSection').style.display = 'block';

  // 現在のテキストを保存
  window.currentExcuseText = text;
}

function generateHash() {
  return Math.random().toString(16).substr(2, 40).toUpperCase();
}

let currentSpeech = null;
let bgmOscillators = [];
let bgmContext = null;

function playBGM(genre) {
  // 既存のBGMを停止
  stopBGM();
  
  try {
    bgmContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const genreTunes = {
      sf: [261.63, 329.63, 392, 523.25],
      history: [220, 277.18, 329.63, 440],
      love: [293.66, 369.99, 440, 587.33],
      nordic: [174.61, 220, 261.63, 349.23],
    };

    const notes = genreTunes[genre] || genreTunes.sf;
    
    notes.forEach((freq, i) => {
      const osc = bgmContext.createOscillator();
      const gainNode = bgmContext.createGain();
      
      osc.type = genre === 'sf' ? 'sawtooth' : genre === 'nordic' ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, bgmContext.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, bgmContext.currentTime + 3);
      
      gainNode.gain.setValueAtTime(0, bgmContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, bgmContext.currentTime + 0.5 + i * 0.3);
      gainNode.gain.linearRampToValueAtTime(0, bgmContext.currentTime + 4);
      
      osc.connect(gainNode);
      gainNode.connect(bgmContext.destination);
      osc.start(bgmContext.currentTime + i * 0.3);
      osc.stop(bgmContext.currentTime + 4);
      
      bgmOscillators.push(osc);
    });
  } catch(e) {
    console.log('Audio not available');
  }
}

function stopBGM() {
  bgmOscillators.forEach(osc => {
    try { osc.stop(); } catch(e) {}
  });
  bgmOscillators = [];
  if (bgmContext) {
    try { bgmContext.close(); } catch(e) {}
    bgmContext = null;
  }
}

function speakText() {
  if (!window.currentExcuseText) return;
  
  const genre = document.getElementById('genre').value;
  
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(window.currentExcuseText);
    utterance.lang = 'ja-JP';
    utterance.rate = genre === 'nordic' ? 0.8 : genre === 'history' ? 0.9 : 1.0;
    utterance.pitch = genre === 'sf' ? 0.8 : genre === 'love' ? 1.2 : 1.0;
    window.speechSynthesis.speak(utterance);
    
    // BGMも同時再生
    playBGM(genre);
  } else {
    alert('お使いのブラウザは音声合成に対応していません。');
  }
}

function copyToClipboard() {
  if (!window.currentExcuseText) return;
  
  navigator.clipboard.writeText(window.currentExcuseText).then(() => {
    const btn = document.querySelector('.copy-btn');
    const original = btn.textContent;
    btn.textContent = '✅ コピーしました！';
    btn.style.background = '#00aa55';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
    }, 2000);
  }).catch(() => {
    // フォールバック
    const textarea = document.createElement('textarea');
    textarea.value = window.currentExcuseText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('コピーしました！');
  });
}

function triggerPanic() {
  const panicOverlay = document.getElementById('panicOverlay');
  panicOverlay.style.display = 'flex';
  
  // エラー音
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    for (let i = 0; i < 5; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = 150 + i * 50;
      gain.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.2);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + i * 0.2 + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.2);
      osc.stop(ctx.currentTime + i * 0.2 + 0.15);
    }
  } catch(e) {}
  
  // 5秒後に退職代行LPへリダイレクト（実際にはしないが演出）
  setTimeout(() => {
    document.getElementById('panicRedirect').style.display = 'block';
  }, 3000);
}

function closePanic() {
  document.getElementById('panicOverlay').style.display = 'none';
  document.getElementById('panicRedirect').style.display = 'none';
}

// スライダー値の更新
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('delaySlider');
  const sliderVal = document.getElementById('sliderValue');
  
  slider.addEventListener('input', function() {
    sliderVal.textContent = getDelayText(parseInt(this.value));
  });
  
  // 初期値設定
  sliderVal.textContent = getDelayText(parseInt(slider.value));
});