setlocal
cd "D:\Soft\A5\a5m2_2.14.5_x64"
taskkill /IM A5M2.exe /F

cd "C:\Program Files\Google\Chrome\Application"
taskkill /IM chrome.exe /F

cd "C:\Program Files (x86)\QTranslate"
taskkill /IM QTranslate.exe /F


cd "C:\Program Files (x86)\Microsoft\Skype for Desktop"
taskkill /IM Skype.exe /F

cd "C:\Program Files\Notepad++"
taskkill /IM notepad++.exe /F

cd "C:\Users\tantq\AppData\Local\DBeaver"
taskkill /IM dbeaver.exe /F

cd "C:\ProgramData\Microsoft\Windows\Start Menu\Programs"
taskkill /IM dbeaver.exe /F

endlocal
exit