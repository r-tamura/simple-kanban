import cards, {
  ADD,
  TOGGLE,
  addCard,
  toggleCard,
  getVisibleCards,
} from '../cards'

describe('card actions', () => {
  it('addCard should create ADD_CARD action', () => {
    expect(addCard('Use Redux')).toEqual({
      type: ADD,
      id: 0,
      text: 'Use Redux',
    })
  })

  it('toggleCard should create TOGGLE_CARD action', () => {
    expect(toggleCard(1)).toEqual({
      type: TOGGLE,
      id: 1,
    })
  })
})


describe('cards reducer', () => {
  it('should handle initial state', () => {
    expect(
      cards(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_CARD', () => {
    expect(
      cards([], {
        type: ADD,
        text: 'Run the tests',
        id: 0,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      },
    ])

    expect(
      cards([
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
        },
      ], {
        type: ADD,
        text: 'Use Redux',
        id: 1,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
      },
    ])

    expect(
      cards([
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1,
        },
      ], {
        type: ADD,
        text: 'Fix the tests',
        id: 2,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2,
      },
    ])
  })

  it('should handle TOGGLE_CARD', () => {
    expect(
      cards([
        {
          text: 'Run the tests',
          completed: false,
          id: 1,
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0,
        },
      ], {
        type: TOGGLE,
        id: 1,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1,
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ])
  })
})

describe('test cards\' selectors', () => {
  const state = {}

  beforeAll(() => {
    state.cards = [
      { completed: false, text: 'Learn React' },
      { completed: false, text: 'Learn Angular' },
      { completed: false, text: 'Learn Redux' },
      { completed: false, text: 'Learn XXXXX' },
    ]
  })

  it('should be all cards', () => {
    state.visibilityFilter = ALL
    expect(getVisibleCards(state)).toEqual(state.cards)
  })

  it('should be empty list', () => {
    state.visibilityFilter = COMPLETED
    expect(getVisibleCards(state)).toEqual([])
  })

  it('should be all cards', () => {
    state.visibilityFilter = ACTIVE
    expect(getVisibleCards(state)).toEqual(state.cards)
  })

  it('should throw an error', () => {
    state.visibilityFilter = undefined
    expect(() => getVisibleCards(state)).toThrow(new Error(`Unknown filter: ${undefined}`))
  })
})

describe('test cards\' selectors', () => {
  const state = {}

  beforeAll(() => {
    state.cards = [
      { completed: false, text: 'Learn React' },
      { completed: true, text: 'Learn Angular' },
      { completed: true, text: 'Learn Redux' },
      { completed: false, text: 'Learn XXXXX' },
    ]
  })

  it('should be all cards', () => {
    state.visibilityFilter = ALL
    expect(getVisibleCards(state)).toEqual(state.cards)
  })

  it('should be empty list', () => {
    state.visibilityFilter = COMPLETED
    expect(getVisibleCards(state)).toEqual([
      { completed: true, text: 'Learn Angular' },
      { completed: true, text: 'Learn Redux' },
    ])
  })

  it('should be all cards', () => {
    state.visibilityFilter = ACTIVE
    expect(getVisibleCards(state)).toEqual([
      { completed: false, text: 'Learn React' },
      { completed: false, text: 'Learn XXXXX' },
    ])
  })
})


