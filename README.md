# A12: 老爸的私房錢

此網頁程式可以讓使用者記錄生活開支

## 功能

#### 使用者可以：

- 在首頁一次瀏覽所有支出的清單
- 在首頁看到所有支出清單的總金額
- 新增一筆支出
- 編輯支出的所有屬性 (一次只能編輯一筆)
- 刪除任何一筆支出 (一次只能刪除一筆)
- 在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和

### 環境

- Node.js v10.15.0
- express v4.17.1
- express-handlebars v5.3.2
- handlebars-helpers ^0.10.0
- method-override ^3.0.0
- mongoose v5.13.2
- mongodb v4.2.14

### 安裝

1.開啟終端機(Terminal)將此專案 Clone 至本機電腦

`git clone https://github.com/Lucas-Peng-CS/expense-tracker.git`

2.進入存放此專案的資料夾

`cd expense-tracker`

3.安裝 npm 套件

`npm install`

4.加入種子資料

`npm run seed`

5.啟動網頁伺服器

`npm run dev`

6.當 Terminal 出現以下文字表示成功連結本地伺服器

`Express is listen on localhost:3000`

7.在任一瀏覽器中輸入 http://localhost:3000 開始瀏覽網頁
