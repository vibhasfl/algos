// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

// Example 1:

// Input: rooms = [[1],[2],[3],[]]
// Output: true
// Explanation:
// We visit room 0 and pick up key 1.
// We then visit room 1 and pick up key 2.
// We then visit room 2 and pick up key 3.
// We then visit room 3.
// Since we were able to visit every room, we return true.
// Example 2:

// Input: rooms = [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.

// Note : Since I am using stack this approaach used DFS
// // Big(O) = O(n+m)
// Space = O(n) since because we store n values in set

function areAllRoomVisited(roomArr) {
  let roomsVisited = new Set()

  let stack = [0]
  roomsVisited.add(0)

  while (stack.length) {
    let currentRoom = stack.pop()
    roomsVisited.add(currentRoom)

    for (let i = 0; i < roomArr[currentRoom].length; i++) {
      if (!roomsVisited.has(roomArr[currentRoom][i])) {
        stack.push(roomArr[currentRoom][i])
      }
    }
    console.log(stack, roomsVisited)
  }

  return roomArr.length == roomsVisited.size
}

console.log(areAllRoomVisited([[1, 3], [3, 2, 1], [2], [0]]))
// console.log(areAllRoomVisited([[1],[2],[3],[]]))
// console.log(areAllRoomVisited([[2],[3],[1],[0]]))

// 0 => 2
// 2 => 1
// 1 => 3
// 3 => 0

// R => K
// 0 => 1,3
// 1 => 3,2,1
// 3 => 0
// 2 => 2
// 1 => already visited
