/**
 * @vars
 */
const name = 'Nwagu Victor';
const email = 'victor.nwagu.g20@gmail.com';
const username = 'victechie';
const date = '10-08-2020';
const url = 'https://www.github.com/nwaguvictor.com';
const address = 'No 10, ugwuaji Awk, Enugu, Nigeria.';

// Execution
validationTest(name, email, username, date, url, address);


/**
 * method - validation runner
 * 
 * @param name - name to validate
 * @param email - email to validate
 * @param username - username to validate
 * @param date - date to validate
 * @param url - url to validate
 * @param address - address to validate
 * 
 * @returns Boolean
 */

async function validationTest(name, email, username, date, url, address) {
    await validateName(name);
    await validateEmail(email);
    await validateUsername(username);
    await validateDate(date);
    await validateUrl(url);
    await validateAddress(address);

    console.log('All parameters matched!😋😋😋');
    return true;
}

function validateName(name) {
    if (typeof name !== 'string') {
        console.log('Please, name must be a string');
        return false;
    }

    if (!name.match(/^[a-z]{2,}\s*/ig)) {
        console.log('Name must contain only alphabetes and must be atleast two characters');
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (typeof email !== 'string') {
        console.log('Plase, email must be a string');
        return false;
    }

    if (!email.match(/([a-z0-9]{2,})@[a-z]{2,}\.([a-z]{2,3})/ig)) {
        console.log('Email not valid!');
        return false;
    }
    return true;
}

function validateUsername(username) {
    if (typeof username !== 'string') {
        console.log('Please, username must be a string');
        return false;
    }

    if (!username.match(/[a-z0-9]{3,}/ig)) {
        console.log('Username must be alphanumeric and be at least 3 characters');
        return false;
    }
    return true;
}

function validateDate(date) {
    if (!date.match(/^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$/)) {
        console.log(`Hey! Date was in a wrong format`);
        return false;
    }
    return true;
}

function validateUrl(url) {
    if (typeof url !== 'string') {
        console.log('Url must be a valid string');
        return false;
    }
    
    if (!url.match(/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@#%~=\+_-]{2,256}\.[a-z]{2,6}(\.[a-zA-Z0-9/@#~%=\\?+_-]{2,256})?$/ig)) {
        console.log('Url is invalid!');
        return false;
    }
    return true;
}

function validateAddress(address) {
    if (typeof address !== 'string') {
        console.log('Wrong address');
        return false;
    }

    if (!address.match(/(No\s)[0-9]+,\s[a-z0-9\s]{2,256},\s[a-z0-9\s]{2,256},\s[a-z]{2,100}\./ig)) {
        console.log('Invalid Address Format');
        return false;
    }
    return true;
}