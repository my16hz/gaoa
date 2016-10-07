SET path_logs=D:\logs

IF NOT EXIST %path_logs% (CALL MKDIR %path_logs%)

CALL npm install

CALL npm install pm2 -g
CALL npm install pm2-windows-startup -g

CALL pm2-startup install

CALL pm2 install pm2-logrotate
CALL pm2 delete all
CALL pm2 start app.js --merge-logs --log-date-format="YYYY-MM-DD HH:mm Z" -o "%path_logs%\out.log" -e "%path_logs%\err.log"
CALL pm2 save

PAUSE