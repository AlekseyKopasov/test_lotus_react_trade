const SET_PARTICIPANTS = 'SET_PARTICIPANTS'
const TOGGLE_TIMER = 'TOGGLE_TIMER'
const SET_BIDDING_TIME = 'SET_BIDDING_TIME'

const initialState = {
  participants: [
    { id: 0, name: 'Лотус', active: true },
    { id: 1, name: 'Company Name', active: false },
    { id: 2, name: 'Company Name', active: false },
    { id: 3, name: 'Company Name', active: false },
  ],
  timeInMs: 3,
  targetTime: 0
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants
      }
    case SET_BIDDING_TIME:
      return {
        ...state,
        targetTime: action.targetTime
      }
    case TOGGLE_TIMER:
      return {
        ...state,
        participants: [ ...state.participants.map(p => {
          console.log('ppppp', p)
          if (p.id === action.timerId) {
            p.active = false
            // if (p[id + 1]) {
            //   p[id + 1].active = true
            // } else {
            //   p[0].active = true
            // }
          }
        }) ],
      }
    default:
      return state
  }
}

const setParticipants = (participants) => ({ type: SET_PARTICIPANTS, participants })
export const toggleTimer = (timerId) => ({ type: TOGGLE_TIMER, timerId })
export const setTime = (targetTime) => ({ type: SET_BIDDING_TIME, targetTime })

export default timerReducer