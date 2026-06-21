// How many conference rooms are required?
// Let's look at three scheduled meetings:
// [
//  [0,30],
//  [5,10],
//  [15,20]
// ]
// Meeting A: [0, 30] => 1
// Meeting B: [5, 10] => 1
// Meeting C: [15, 20] => 0 since B meeting room can be used.
// Ans : 2

// Time : O(n log n)
// Space : O(n)

function conferenceRoomRequired(schedulesArr){

    let startTimes = schedulesArr.map((a,b) => a[0]).sort((a,b) => a-b)
    let endTimes = schedulesArr.map((a,b) => a[1]).sort((a,b) => a-b)

    let endPointer = 0
    let requiredConferenceRooms = 0

    for(let i=0;i<startTimes.length;i++){


        if(startTimes[i]<endTimes<[endPointer]){
            requiredConferenceRooms++
        }
        else{
            endPointer++
        }
    }

    return requiredConferenceRooms


}

// console.log(conferenceRoomRequired([[0,30],[15,20],[5,10]]))
// console.log(conferenceRoomRequired([[0,30]]))
// console.log(conferenceRoomRequired([[1,2],[9,12],[6,10]]))
// console.log(conferenceRoomRequired([[0,5],[10,15]]))
