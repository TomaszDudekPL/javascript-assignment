/*
Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

You only need to check that the ids match.

## Example

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
    
    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)
    
    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true
    
    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false

## Arguments

  * goodUsers: a list of valid users

Tip: you can use array#some and Array#every or _.includes
*/

var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

const checkUsersValid = goodUserDefinitions => usersToCheck => usersToCheck.every(
  user => goodUserDefinitions.some( definition => user.id === definition.id)
);

var testAllValid = checkUsersValid(goodUsers)

console.log(
  testAllValid([
    { id: 2 },
    { id: 1 }
  ]),
  testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 }
  ])
)