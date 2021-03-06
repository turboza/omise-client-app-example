# Omise Client App Example
Showcases for the usage of Omise Tokenization API to build client app that accepts credit card on various platforms to help you make a decision which way to use and how to.

![Tokenization Process](https://cdn.omise.co/assets/developer-documents/images_jpg/small_token@2x.jpg)

## Which way should I do?

1. **If you develop normal website on browser...**    
Use Omise.js which is the standard way to tokenize the card information. See the usage [here](https://www.omise.co/collecting-card-information).

2. **If you develop on website wrapper technologies for mobile ex. React Native, Ionic...**    
Consider this [Webpack example](webpack-javascript/script.js) using [omise-node](https://github.com/omise/omise-node). This has not been tested on all platform but this method should be able to apply on the JavaScript mobile platforms.

3. **If all methods above don't work for any reasons...**    
You may use [Vanilla JavaScript](vanilla-javascript/index.html) to tokenize which should be the last option if you cannot use the method above.

## FAQ
**What is a "tokenization"?**    
Process of converting card number, security number, including other card information into a token (Ex. tokn_test_56pavx4vsrwplxpj72k). And you can later send the token to your server to charge or save it as card to charge later multiple times. See more in [Collecting Card](https://www.omise.co/collecting-card-information)

**Why not [Omise.js](https://github.com/omise/omise.js)?**    
This is the recommended method which works perfectly on the most browsers but it requires real HTML DOM to work with API. Thus, it may not work with some mobile wrapper technologies like React Native.

**What I can do?**  
- Tokenize card info on your client (web, mobile app) using omise.js or omise-node (Card info will be sent to Omise Server directly without passing your server)  
- Send token from client side to server side  
- Have public key on client side  
- Have secret key in server side  
- Perform a charge in server side using received token  

**What I must not do?**  
- Never tokenize card info on your server (Card info will be passed to your server from client side)  
- Never perform a charge on client side  
- Never put secret key on client side  

For other questions, please contact support@omise.co ✨
