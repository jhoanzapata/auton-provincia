@echo off
chcp 65001 >nul
title Auton-Provincia - Frontend Vercel Dev
echo ========================================
echo Auton-Provincia - Iniciar Frontend Vercel (Desarrollo)
echo ========================================
echo.

cd /d "%~dp0..\frontend-Vercel"
echo Iniciando frontend en http://localhost:5173
echo.
npm run dev