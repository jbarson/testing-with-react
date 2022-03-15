import {announceResult, assignRobotChoice} from '../helpers'

describe('testing announceResult helper', () => {
  let fakeState

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    }
   })

  test('simplest thing possible', () => {
    expect(true).toBe(true)
  })

  test('returns "Won" if player is Axe and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe'
    fakeState.compSelection = 'Tree'
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe("Won")
  })
  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
})

describe('assignRobotChoice', () => {
  test('should return a valid item', () => {
    const options = ['Moai', 'Axe', 'Tree']
    const actual =assignRobotChoice()
    expect(options).toContain(actual)
   })

})
