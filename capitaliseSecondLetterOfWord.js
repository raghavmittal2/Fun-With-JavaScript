function capitalise(str) {
    str = str.toLowerCase().split(" ");         //split() the string on " " to create a list of words
    let result = "";                            //the result string which is empty for now
    for(let i=0; i < str.length; i++) {
        //for each word which has more than or equal to 2 letters and it is not the last word
        if(str[i].length >= 2 && i != str.length-1) {
            //make second character uppercase
            result += str[i].charAt(0) + str[i].charAt(1).toUpperCase() + str[i].slice(2, str[i].length) + " ";
        }
        //for the last word in the sentence
        else if ((str[i].length >= 2 && i == str.length-1)) {
            //no space at the end
            result += str[i].charAt(0) + str[i].charAt(1).toUpperCase() + str[i].slice(2, str[i].length);
        }
        //if the length of the word is less than 2 letters and it is not at the end of the string
        else if (str[i].length < 2 && i != str.length-1) {
            result += str[i] + " ";
        }
        //one letter word at the end of the string
        else {
            result += str[i];
        }
    }

    return result;
}

console.log(capitalise("flying a kite on the independance day of india is very traditional."));