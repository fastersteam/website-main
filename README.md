# FASTER Website Main

The main FASTER website

## Tech Stack

- CMS - Payload CMS
- Front End - Next.js (version 13 - App Router)
- Database - MongoDB
- Image Storage - TBD
- Package Manager - Yarn

## Designs

Designs are hosted on Figma. Reach out to Erin or Chris if you need access. [design link](https://www.figma.com/file/UTKBysR2Deup2ZHS2xFg47/faster-2023-site?type=design&node-id=0-286&mode=design&t=kV9bO4gs7sEgVPrx-4)

## Set up your environment

- install [nvm](https://github.com/nvm-sh/nvm)
- use nvm to install node 18 `nvm install 18`
  - if you have not set version 18 to your default, you can do so by running `nvm alias default`
- install yarn globally `npm install -g yarn`

## Set up the codebase

- clone the [repo](https://github.com/fastersteam/website-main) using `git clone`
- run `cd <path-to-repo>/website-main` and then run `yarn install` once you are in the repo's root directory
- Reach out to Chris for the environment variables. Once obtained, create a `.env` file and add the environment variables there.
- run `yarn dev` to start your local server
- open the payload cms website on `http://localhost:3000/admin`
- open the public facing website on `http://localhost:3000`
