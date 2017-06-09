/**
 * =================================================
 * Omise Tokenization - JavaScript Webpack Example
 * =================================================
 * This tokenization method should be able to adapt and apply on most of the
 * modern client side JavaScript platform Ex. Webpack, React Native, Ionic
 *
 * This should be used when if only you cannot use the Omise.js
 *
 * WARNING: Don't apply this method to the server side code.
 * The card information must not go through the server wihout PCS-DSS directly
 */

const omise = require('omise')({
  'publicKey': 'pkey_test_52jyu0r8o4307z0zz00'
  // Don't put 'secretKey' here if this code will be in client side
  // ex. mobile, web browser
});

global.onSubmit = (e) => {
  event.preventDefault();
  const form = document.forms['card-number-form']; // The method to get form data varies
                                                   // depends on JS Platform
  const cardData = {
    card: {
      name: form['card[name]'].value,
      number: form['card[number]'].value,
      security_code: form['card[security_code]'].value,
      expiration_month: form['card[expiration_month]'].value,
      expiration_year: form['card[expiration_year]'].value,
    },
  };

  omise.tokens.create(cardData, (err, token) => {
    if (err) {
      console.log('Error: ' + err);
    }
    else {
      console.log('Token Id = ' + token.id);
      console.log('Use this token to send to your server to create a charge or save a card');
      console.log('Full Token Object', token);

      // <<<<<<<<<< HERE >>>>>>>>>>>>
      // Send token.id to your server to create a charge or save a card
    }
  });

  return false;
}
