const smallestDiff = (arr1, arr2) => {
    // Create a variable to hold the difference of the two arrays.
    const result = [];

    // We need to do some math, basically arr2 - arr1 for each index, and store it in our result variable
    arr1.forEach((element, i) => {
        result.push(arr2[i] - element);
    })

    // Then we have to sort the values from smallest to highest and return the first index.
    // Can easily be done with Math.min. Since we are using an array as the parameter, we need to 
    return console.log(Math.min(...result));
}

smallestDiff([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]);