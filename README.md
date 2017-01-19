# Omise Tokenization Example
Showcases for the usage of Omise Tokenization API on various platforms to help you make a decision which way to use and how to.

![Tokenization Process](https://cdn.omise.co/assets/developer-documents/images_jpg/small_token@2x.jpg)

## Which way should I do?

#### 1. If you develop normal website on browser...
Use Omise.js which is the standard way to tokenize the card information. See the usage [here](https://www.omise.co/collecting-card-information).

#### 2. If you develop on website wrapper technologies for mobile ex. React Native, Ionic...
Consider this [Webpack example](webpack-javascript/script.js) using [omise-node](https://github.com/omise/omise-node). This has not been tested on all platform but this method should be able to apply on the JavaScript mobile platforms.

#### 3. If all methods above don't work for any reasons...
You may use [Vanilla JavaScript](vanilla-javascript/index.html) to tokenize which should be the last option if you cannot use the method above.

## FAQ
#### What is a "tokenization"?
Process of converting card number, security number, including other card information into a token (Ex. tokn_test_56pavx4vsrwplxpj72k). And you can later send the token to your server to charge or save it as card to charge later multiple times. See more in [Collecting Card](https://www.omise.co/collecting-card-information)

#### Why not [Omise.js](https://github.com/omise/omise.js)?
This is the recommended method which works perfectly on the most browsers but it requires real HTML DOM to work with API. Thus, it may not work with some mobile wrapper technologies like React Native.

For other questions, please contact support@omise.co
