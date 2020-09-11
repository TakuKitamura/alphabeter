# Alphabeter's Website

> 日本IBMのインターン中に作成
> Alphabeter 向け

## Webサイトの立て方

### 1. [Node.js](https://nodejs.org/ja/) をダウンロードする. 
URLに飛んで, 濃い緑色の背景にLTSと書いてあるところからダウンロードできる.
### 2. Webサイトのプログラムをダウンロード

##### gitの使い方を知っている方
```sh
git clone https://github.com/TakuKitamura/alphabeter.git # gitの使い方を知っている方はこちら(デスクトップにクローンした想定)
```
##### gitを知らない方
gitを知らない方は, [こちら](https://github.com/TakuKitamura/alphabeter/archive/master.zip)をクリックしてダウンロード.
そして, ダウンロードしたmaster.zipというファイルをデスクトップ上で開く(解答, 展開)
デスクトップにalphabeter-masterというフォルダがあることを確認する!
###### Windowsの方用参考
[ファイルを zip 圧縮および解凍する](https://support.microsoft.com/ja-jp/help/14200/windows-compress-uncompress-zip-files)
###### Macの方用参考
[Macでファイルやフォルダを圧縮する/展開する](https://support.apple.com/ja-jp/guide/mac-help/mchlp2528/mac)
### 3. プログラムを操作できる画面を開く(CUI)
##### Windows の場合
[コマンドプロンプトを起動する](https://www.adminweb.jp/command/ini/index1.html)
黒い画面が開けたらOK!
##### Mac の場合
[Macで「ターミナル」を開く/終了する
](https://support.apple.com/ja-jp/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac)
### 4. プログラムを操作できる画面を操作してWebサイトを立ち上げる 
##### Windows の場合
黒い画面で以下の文字列を入力し, Enterボタンを押す
```bash
cd Desktop
```
黒い画面で以下の文字列を入力し, Enterボタンを押す
```bash
cd alphabeter-master
```
うまく行かなければ, ここを参照するとよいかも
[【入門編】Windowsのコマンドプロンプトでディレクトリを移動する方法
](https://tonari-it.com/windows-cmd-cd/)

##### Mac の場合
黒い画面で以下の文字列を入力し, Enterボタンを押す
```sh
cd ~/Desktop
```
黒い画面で以下の文字列を入力し, Enterボタンを押す
```sh
cd alphabeter-master
```

#### Windows, Mac 共通
Windows, Macで cd ほにゃらら の入力をおこなった後行う

黒い画面で以下の文字列を入力し, Enterボタンを押す
```bash
npm install
```
黒い画面で以下の文字列を入力し, Enterボタンを押す
```bash
npm run dev
```
うまくいくと
```
Listening on: http://192.168.1.233:3000/
```
というような緑の枠に囲われた記述が黒い画面に見られる.
ただし, URLは個々人によって違うのでそれに合わせる.
今回の場合, http://192.168.1.233:3000/
にブウウザでアクセスするとWebサイトが見ることができる!
## お疲れさまでした!!
質問は何なりと!

<!-- ## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org). -->
