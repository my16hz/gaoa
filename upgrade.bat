CALL COPY /y /b .\config/default.js .\config\default.js.bk

CALL git reset -- hard
CALL git pull

CALL COPY /y /b .\config\default.js.bk .\config\default.js

CALL npm install

CALL pm2 restart app.js
CALL pm2 save

PAUSE