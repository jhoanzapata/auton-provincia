@echo off
chcp 65001 >nul
title Auton-Provincia - Frontend Preview
echo ========================================
echo Auton-Provincia - Preview Frontend (Produccion Local)
echo ========================================
echo.

cd /d "%~dp0..\frontend"
echo Previsualizando build en http://localhost:4173
echo.
npm run preview