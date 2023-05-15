const timeWord = timeParam => {
    // We create a variable of the parameter that we can mutate. This creates an array that separates hours and minutes.
    let time = timeParam.split(`:`).map(Number);

    // We convert each of the array indexes to numbers. If there were more to do, this would be done via a loop.
    time[0] = +time[0];
    time[1] = +time[1];

    // Then we account for special cases here. I always feel the earlier we can check special cases the better.
    if (timeParam === `00:00`) {
        return console.log(`midnight`);
    } else if (timeParam === `12:00`) {
        return console.log(`noon`);
    }

    // We have a boolean to determin is it is morning or not and a variable that literally contains a space.
    // We also include a variable for 'oh' to keep true to our coding format.
    let isAM = true;
    let space = ` `;
    let oh = 'oh';

    // And this will ultimately be what we return to the user.
    let timeInWords = ``;

    // We will create an index of words to match the hour value.
    const hourWords = [`twelve`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `ten`, `eleven`];
    
    // And we do the same for the minutes. But, however, we will need two arrays in order to easily manipulate the minutes since we need to account for '01' to '09'. Because we need '00' to be "o'clock" we will have to account for the zero manually ourselves as that is easiest.
    const mins = [`o'clock`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`];
    const tensMins = [`twenty`, `thirty`, `fourty`, `fifty`];

    // We need to evaluate the time and push it into the variable "timeInWords" to return to the user. 
    
    // First, we will work on converting the hour into a word. 
    // The if statement will subtract the hours by 12 if it is greater than 11 to get the correct word in the array above.
    // This will also help to determine if it is morning or afternoon.
    if (time[0] > 11) {
        time[0] = time[0] - 12;
        isAM = false;
    }
    
    // We can then add the hours to our variable that we will be returning.
    timeInWords = hourWords[time[0]];

    // Next, we determine how to print out the minutes correctly.
    // At the very least, we can handle the first 20 values easily enough below.
    if (time[1] < 20) {

        // We need to account for the zero so we do an if/else statement to insert an 'oh' where needed
        if (time[1] > 0 && time[1] < 10) {
            timeInWords += space + oh
        }
            timeInWords += space + mins[time[1]];
    } else {
        
        // Now we deal with numbers greater than 100.
        // First, we need to create two variables to hold the tens place and ones place.
        let singleMins = time[1] % 10;
        let doubleMins = Math.floor(time[1] / 10) - 2;

        // Then, we can evaluate our minutes properly to determine what needs to be printed.
        // We will account for if the ones place is zero or if there is an actual number to print out.
        timeInWords += space + tensMins[doubleMins];
        if(singleMins > 0) {
            timeInWords += space + mins[singleMins];
        }
    }

    // Last, we will add the time of day.
    if (isAM) {
        timeInWords += space + 'am';
    } else {
        timeInWords += space + 'pm';
    }

    // Then we return the answer
    return console.log(timeInWords);
}
timeWord(`00:00`) // midnight
timeWord(`12:00`) // noon
timeWord("01:00") // "one o'clock am"
timeWord("06:01") // 'six oh one am'
timeWord("00:10") // 'twelve ten am'
timeWord("15:18") // 'three eighteen pm'
timeWord("16:30") // 'four thirty pm'
timeWord("10:34") // 'ten thirty four am'