# Login Guard Demo 🔐🛡️

Eine einfache Angular 19 Demo zur Veranschaulichung eines Login-Prozesses mit **Route Guard**, **NgRx Store** und **RxJS**. 
Bei erfolgreicher Eingabe von Benutzername und Passwort wird der Benutzer auf die geschützte **Home-Seite** weitergeleitet.

## 🛠️ Technologien

- Angular 19
- Angular Material
- Angular Routing
- Route Guard (`CanActivate`)
- RxJS (Observables, BehaviorSubject)
- NgRx (Store zur Verwaltung des Login-Zustands)

## 🚀 Features

- Login-Formular mit Angular Material
- Benutzername & Passwort erforderlich
- Login-Zustand im NgRx Store gespeichert
- Geschützte Home-Seite nur bei erfolgreichem Login erreichbar
- Redirect nach Login

## 🔐 Funktionsweise

1. Benutzer besucht `/login`
2. Gibt gültige Zugangsdaten ein
3. Wird nach erfolgreicher Anmeldung auf `/home` weitergeleitet
4. Die Route `/home` ist durch einen **Auth Guard** geschützt

## 🚀 Lokales Setup

```
git clone https://github.com/ronnymundt/login-guard-demo.git
cd login-guard-demo
npm install
ng serve
```

## 🎥 Screencast

![Screencast](/src/assets/screencast.gif)
