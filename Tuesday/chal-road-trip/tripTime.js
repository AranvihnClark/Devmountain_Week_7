const tripTime = (arr) => {
    
    // I don't believe we're going to manipulate the parameter at all but just in case for now.
    let param = arr;
    
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: 0
    }

    // For now, it's easiest to do it first with two for loops. It will probably be easier to be done with .map or something.
    for (let stpCount = 0; stpCount < arr.length; stpCount++) {

        // We need to keep track of the total weight to calculate the weighted average.
        let totalWeight = 0;
        let total = 0;

        for (let spdCount = 0; spdCount < param[stpCount].speedLimits.length; spdCount++) {
            
            // We don't need a variable to keep track of the weight, but for the sake of readability, it makes sense to.
            // Same can be said for the speed. Both variables are used for calculating the distance travelled.
            let weight = param[stpCount].speedLimits[spdCount].distance;
            let speed = param[stpCount].speedLimits[spdCount].speedLimit;

            // Below are the calculations per iteration we need (total weight and total distance travelled) for average weight.
            totalWeight += weight;
            total += speed * weight;

            // Then we calculate the time by dividing the distance (weight) by speed.
            let mathCalc = +(weight / speed).toFixed(2);

            // Then we push and add them where they are needed.
            result.totalTime += mathCalc;
            result.segmentTimes.push(mathCalc);
        }

        // Now we can calculate the average speed using the total distance (total) divided by the total weight (total distance).
        let mathCalc = +(total / totalWeight).toFixed(2);

        // Then push that math into the avgSpeedLimits of our result.
        result.avgSpeedLimits.push(mathCalc);
    }

    // And lastly, we make sure the total time is rounded properly because we don't need more than 2 decimal places usually.
    result.totalTime = +result.totalTime.toFixed(2);

    return console.log(result);
}

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE

const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]

tripTime(stops);