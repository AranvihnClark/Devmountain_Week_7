const smallestDiff = (arr1, arr2) => {
    // We need to create a return variable.
    // We are setting it to the highest value of the two arrays because the lowest difference value is never bigger than this.
    let result = null;
    if (Math.max(...arr1) < Math.max(...arr2)) {
        result = Math.max(...arr2);
    } else {
        result = Math.max(...arr1);
    }

    // We need to do some math, basically arr2 - arr1 for each index, and store it in our result variable
    arr2.forEach((element, i) => {
        // We do a while loop inside of a for loop to try to keep the time complexity as O(nlog(n)) though I feel this is still O(n^2)...
        let count = i;
        while (count < arr1.length) {
            if (Math.abs((element - arr1[count])) < result) {
                result = element - arr1[count];
                console.log(`Result: ${result}`);
            }
            count++;
        }
    });

    // Then we return the result, though...
    // If the problem is, in fact, any number in array 2 - any number in array 1.
    // I believe this should work fine as the instructions indicated the lowest number was 23 - 20 = 3.
    // The only way that is true is if it is as I described above and not literally any number, like 16 - 14 = 2.
    // And as, 30-10 and 10-30 has the same difference value, a value of 20, there is no reason check array 1 - array 2.
    return console.log(result);
}

smallestDiff([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]);