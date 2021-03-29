# **Dragokyun ~ Translator**
> Rob the corpos until they ban you uwu
> 
<div align="center">
<img src="https://wallpapercave.com/wp/wp3115963.png" alt="Dragokyun" width="500" />

</div><br/>
<br/>

*Make sure you have `puppeteer`, `puppeteer-extra` and `puppeteer-extra-plugin-stealth` installed in your system before using this*

# Installation
```cmd
> npm i dragokyun
```

# Usage

## Importing
###  💛 JavaScript
```JS
const dragokyun = require('dragokyun');
```

## Functions
### translate()
```JS
	translate('text to translate', 'source language', 'translate language');
```

## Translation:

### Example of Translating Texts

```JS
const dragokyun = require('dragokyun');
(async () => {
    let text = `昔の素材を切り貼りして音楽を担当してます中野さんとは @suzukitakayuki_atelier のインスタレーション以来のコラボ。映像作品もまたやりたいな`
    let output = await dragokyun.translate(text, 'ja', 'en');
    console.log(output)
  })();
```
* Oii, it can translate texts without source language too, it will detect i hope uwu*
