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

          if (p.id === action.timerId) {
            let nextId = 0

            if (state.participants[p.id + 1]) {
              nextId = p.id + 1
            } else {
              nextId = 0
            }
            console.log('nextId' , nextId)

            p.active = false

            state.participants[nextId].active = true
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