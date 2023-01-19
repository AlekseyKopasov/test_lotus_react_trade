const TOGGLE_TIMER = 'TOGGLE_TIMER'
const SET_TIME = 'SET_TIME'

const initialState = {
  participants: [
    { id: 0, name: 'Лотус', active: true },
    { id: 1, name: 'Company Name', active: false },
    // { id: 2, name: 'Company Name', active: false },
    // { id: 3, name: 'Company Name', active: false },
  ],
  timeInMs: 3,
  targetTime: 0,
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      return {
        ...state,
        targetTime: action.targetTime,
      }
    case TOGGLE_TIMER:
      return {
        ...state,
        participants: state.participants.map(p => {
          if (p.id === action.timerId) {
            let nextId

            if (state.participants[p.id + 1]) {
              nextId = p.id + 1
            } else {
              nextId = 0
            }

            p.active = false

            state.participants[nextId].active = true
          }
          return p
        }),
      }
    default:
      return state
  }
}

export const toggleTimer = (timerId) => ({ type: TOGGLE_TIMER, timerId })
export const setTime = (targetTime) => ({ type: SET_TIME, targetTime })

export default timerReducer