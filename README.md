# 一網在手，美食無窮

一個使用 Node.js + Express 打造的餐廳美食網站，管理自己的餐廳清單，如新增、修改、刪除餐廳資料等功能，並且可依照餐廳名稱與類別進行搜尋，也依照不同的條件排序餐廳資料。

## Features - 產品功能

1. 使用者可以在首頁瀏覽餐廳評分、類別
2. 使用者可以點擊餐廳，查看更多餐廳資訊，如地址、電話與介紹
3. 使用者可以依照餐廳名稱與餐廳類別進行搜尋

## Environment SetUp - 環境建置

- Node.js

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/Cindy-Hsieh55/restaurantList.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd restaurantList
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4. 若尚未安裝，請安裝 nodemon 套件

```
在 Terminal 輸入 npm install -g nodemon 指令
```

5. 匯入種子檔案

```
在 Terminal 找到 Seeder.js 檔案

執行 node models/seeds/Seeder.js 匯入使用者與餐廳資料
```

當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

```
Mongodb is connected!

User and Restaurant data get done!
```

6. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

7. 當 terminal 出現以下字樣，表示伺服器已啟動並成功連結

```
The Express server is running on http://localhost:3000

```

現在，你可開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用「一網在手，美食無窮」的美食網站囉！
