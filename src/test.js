let x = require('./dragokyun');
(async () => {
    let text = `昔の素材を切り貼りして音楽を担当してます中野さんとは @suzukitakayuki_atelier のインスタレーション以来のコラボ。映像作品もまたやりたいな`
    let z = await x.translate(text, 'ja', 'en');
    console.log(z)
  })();