# LoyaTON - jumpstart your loyalty program in seconds

This repo is dedicated to the results of Hack-a-TON in Prague.

## Important links

![NFT collection in explorer](nft.jpg)

- [General Demo Video](TODO)
- [repository with the most recent API](https://github.com/13Belka13/loyaton-web)
- [Link to the posted NFT collection](https://testnet.tonapi.io/account/kQDH6WIUWoQPsENk1noZBNAcwCNQhxGwWmlpzcqwohX9Dvvt)
  - wallet: EQASUe10vZGXwqxSIHIuXQXUUGQiXCp3OHElIbsPYYFq24Ie
  - collection: EQCKr5PMRKJh-48JqTe81k6HCmtqDEQjE3rB_gPoQzr-Z4A6
  - first nft: EQAUbggImWY7tAFPlQ49q_d0dvoGRViUfRaqzCzXHb7fbhmD
- [Swagger](https://app.swaggerhub.com/apis/BELIK820/LoyaTon/1.0.0)
- [Website](https://loyaton.herokuapp.com/)
- [Telegram Web App for Users](https://t.me/LoyaTONbot)
- [Telegram Web App for Companies](https://t.me/LoyaTONcbot)

## Description

This project is dedicated to the **Web3 Loyalty Program PaaS**, meaning that we are delivering **set of APIs** to establish the connection between old-fashioned business and Web3. Our potential customers could be:

- GameFi projects
- Enteriprises with exising IT landscape
- Niche loyalty programs startups

As the MVP we've built a website that enables user to interact with different companies throughout our website and have created a **NFT collection and item** that is **pushed to the testnet**.

## Architecture

Our web part consists of several technologies:

- Standalone API can be found on [SwaggerHub](https://app.swaggerhub.com/apis/BELIK820/LoyaTon/1.0.0). All functionality and collaboration are available through the UI
  - API itself is hosted in Heroku and is written on ExpressJS framework with a bit of TypeScript
  - The Apigee is also established, proxies are set up, however, there's a requirements to set up a custom DNS, which didn't happen within the hackathon
- [Website](https://loyaton.herokuapp.com/) that contains all the links and can also represent the workflow
- Telegram Web Apps for user and a company in order to separate the experience (if the website structure doesn't fit)
  - for user - @LoyaTONbot
  - for companies - @LoyaTONcbot

## Functionality

Our API provides any user with the following functionality:

- End user
  - user info
  - get a reward
  - get info about the rewards
  - sign up for a promotional campaign
  - get current status of campaigns participation
- Company
  - company info
  - create the reward (NFT) and get its status
  - create and update promotional campaign

## Deployment manual

### Prerequisites

You need to have a JS and npm installed at their most actual version

### NFT

Our current setup uses the content that is posted to the public Google Cloud Storage bucket. To get NFT deployed you need to open a terminal and run

    npm build && npm deploy

### Web

In order to install our website (static content + API) you need to open your terminal and run the command:

    npm i && npm run clean && npm start

## Contacts

In case if you have any questions please don't hesitate to write to the repository owner or @ilya_2108 (TG, VK)
