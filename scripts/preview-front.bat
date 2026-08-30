@echo off
chcp 65001 >nul
title Auton-Provincia - Frontend Preview
echo ========================================
echo Auton-Provincia - Preview Frontend Vercel
echo ========================================
echo.

cd /d "%~dp0..\frontend-Vercel"
echo Iniciando preview en http://localhost:4173
echo.
npm run preview