# Zania Frontend Overview

## Links

[Visit Application](https://zania-fe.netlify.app/)

## Technology Used
The Zania Frontend uses **React.js, TailwindCSS, Jotai, and MSW**.

## How It's Organized
The code is structured using the Atomic Design method, which helps keep everything organized and easy to manage.

## What It Can Do
### 1. Handling Data
The app can fetch and update data using MSW and local storage. Changes persist even if the page is refreshed.

### 2. Drag-and-Drop
Users can easily move things around with drag-and-drop functionality, thanks to React-DND.

### 3. Loading Images Smoothly
Images load smoothly with a placeholder and spinner until they're fully loaded.

### 4. Viewing Media
Clicking on an image displays it in a larger view with the card's info. Users can close it by pressing ESC or clicking the "X" icon.


## Approach
### 1. Data manipulation
I've not used the `position` key instead I've added an `id` key to differentiate between cards. Once a card is dragged around the index of the cards is changed accordingly. 

### 2. Data Storage
MSW is used to mock APIs. On the first visit, a dummy data is being used to send the data, after this local storage would be used to save and fetch data in the API. Currently, there are 3 methods namely "get card", "edit card list" and "update card" in the handler.js file. The update method can be used to update single card details.

### 3. Image Handling
A ProgressiveImage Component is used to handle the image. A placeholder (optional) along with a spinner is shown until the main image loads. The `onLoad` method is used to determine the status of the image. On click of an image, a modal opens in fullscreen, event handlers are used to close it using the ESC key. It is being rendered in a portal to avoid complications once the application grows.

### 4. Styling
I've used **TailwindCSS** to manage styles. To display the cards, flexbox has been used, each card container has a `flex-basis` of 33.33%, which ensures that 3 cards are shown at max in one row. And if there are 2 cards in a row, the cards will be shown in the middle, this is achieved by `align-items: center`
