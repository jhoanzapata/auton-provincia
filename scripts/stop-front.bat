@echo off
chcp 65001 >nul
title Auton-Provincia - Frontend Stop
echo ========================================
echo Auton-Provincia - Detener Frontend
echo ========================================
echo.

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING') do taskkill /F /PID %%a >nul 2>&1
echo Frontend detenido (puerto 5173)
pause