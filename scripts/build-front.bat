@echo off
chcp 65001 >nul
title Auton-Provincia - Frontend Build
echo ========================================
echo Auton-Provincia - Build Frontend Vercel (Produccion)
echo ========================================
echo.

cd /d "%~dp0..\frontend-Vercel"
echo Construyendo para produccion...
echo.
npm run build
echo.
echo Build completado en dist/
pause