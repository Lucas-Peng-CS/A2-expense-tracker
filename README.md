# A2: 老爸的私房錢升級 

此網頁程式可以讓使用者記錄生活開支

## 功能

#### 使用者可以：

- 在首頁一次瀏覽所有支出的清單
- 在首頁看到所有支出清單的總金額
- 新增一筆支出
- 編輯支出的所有屬性 (一次只能編輯一筆)
- 刪除任何一筆支出 (一次只能刪除一筆)
- 在首頁，同時根據「類別」與「月份」來篩選支出；總金額的計算只會包括被篩選出來的支出總和
- 註冊帳號
- 透過 Facebook Login 直接登入
- 建立並管理專屬他的記帳本

### 環境

- Node.js v10.15.0
- mongodb v4.2.14
- bcryptjs ^2.4
- connect-flash ^0.1.1
- dotenv ^10.0.0
- express ^4.17.1
- express-handlebars ^5.3.2
- express-session ^1.17.2
- method-override ^3.0.0
- mongoose ^5.13.2
- passport ^0.4.1
- passport-facebook ^3.0.0
- passport-local ^1.0.0

### 安裝

1.開啟終端機(Terminal)將此專案 Clone 至本機電腦

`https://github.com/Lucas-ac-sp/A2-expense-tracker.git`

2.進入存放此專案的資料夾

`cd A2-expense-tracker`

3.安裝 npm 套件

`npm install`

4.加入種子資料

`npm run seed`

5.啟動網頁伺服器

`npm run dev`

6.當 Terminal 出現以下文字表示成功連結本地伺服器

`Express is listen on localhost:3000`

7.在任一瀏覽器中輸入 http://localhost:3000 開始瀏覽網頁

### 預設種子使用者

- 使用者：<br>
  1.email: root@example.com<br>
  2.password: 12345678

### 環境變數

環境變數在`.env.example` 檔案中，將檔案名稱改成`.env`後，請使用自己的憑證密碼。<br>
FACEBOOK_ID<br>
FACEBOOK_SECRET
