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

function conferenceRoomRequired(schedulesArr){

    schedulesArr.sort((a,b) => a[0]-b[0])
    console.log(schedulesArr)

    let lastMeetingEndingTime = 0
    let meetingRoomRequired = 0

    for(let i=0;i<schedulesArr.length;i++){

        if(lastMeetingEndingTime<=schedulesArr[i][0]){
            
            meetingRoomRequired++;
            

        }
        lastMeetingEndingTime = schedulesArr[i][1]
        
    }
    
    return meetingRoomRequired

}

console.log(conferenceRoomRequired([[0,30],[15,20],[5,10]]))
console.log(conferenceRoomRequired([[0,30]]))
console.log(conferenceRoomRequired([[1,2],[9,12],[6,10]]))
console.log(conferenceRoomRequired([[0,5],[10,15]]))

// 0 <= 1 => 1
// 2 <= 6 => 2
// 10 <=9 => 0

0 <= 0 => 1
5 <= 10 => 1