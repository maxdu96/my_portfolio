# My Personal Website

Hey there! Welcome to the codebase for my personal website. What started as a fork of the awesome [Soumyajit4419](https://github.com/soumyajit4419/Portfolio) has grown into something I like to call my digital playground.

This project was built using these technologies.
- React.js
- Node.js
- Express.js
- CSS3
- VsCode
- Vercel

### 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, you can run: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.


### Set in GitHub Action

For me 

```
name: Build and Deploy
on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@master
      - name: Install Dependencies
        run: npm install
      - name: Build
        env:
          CI: false   
        run: npm run build
      - name: Archive Production Artifact
        uses: actions/upload-artifact@master
        with:
          name: build
          path: build
  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@master
      - name: Download Artifact
        uses: actions/download-artifact@master
        with:
          name: build
          path: build
      - name: Deploy to Firebase
        uses: w9jds/firebase-action@master
        with:
          args: deploy --only hosting
        env:
          GCP_SA_KEY: ${{ secrets.FIREBASE_SERVICE_ACCOUNT_MAXDU_PORTFOLIOWEBSITE }}
```
