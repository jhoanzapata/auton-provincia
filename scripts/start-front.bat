@echo off
chcp 65001 >nul
title Auton-Provincia - Frontend Dev
echo ========================================
echo Auton-Provincia - Iniciar Frontend (Desarrollo)
echo ========================================
echo.

cd /d "%~dp0..\frontend"
echo Iniciando frontend en http://localhost:5173
echo.
npm run dev