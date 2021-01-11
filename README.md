# Next.jsでの基礎的なBlogサイト

-  ページ遷移やディレクトリ構成の見返しに使う
-  簡単なAPI実装
--------------

スタイルは流行りのtailwindcssを使用
1. npm install
```
npx create-next-app . --use-npm

npm i tailwindcss

npx tailwindcss init -p
```
2. 🗂stylesのglobal.cssの中身を書き換える
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
3. 🗂pagesにimport文を追加
```
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
```
4. 下記のサイトを参考にclassName内に記述  
```
<div classnName="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono"></div> 
```
[tailwindcssのチートシート](https://nerdcave.com/tailwind-cheat-sheet)
