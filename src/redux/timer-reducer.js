const SET_PARTICIPANTS = 'SET_PARTICIPANTS'
const SET_TIMER = 'SET_TIMER'
const SET_BIDDING_TIME = 'SET_BIDDING_TIME'

const initialState = {
  participants: [
    { id: 0, name: 'Лотус', active: true },
    { id: 1, name: 'Company Name', active: false },
    { id: 2, name: 'Company Name', active: false },
    { id: 3, name: 'Company Name', active: false },
  ],
  timeInMs: 3,
  targetTime: 0,
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants,
      }
    case SET_BIDDING_TIME:
      return {
        ...state,
        ...state.targetTime = (new Date().getTime()) + (state.timeInMs * 1000),
      }
    case SET_TIMER:
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
const setTimer = (timerId) => ({ type: SET_TIMER, timerId })
const setTime = () => ({ type: SET_BIDDING_TIME })

export const getParticipants = (participants) => (dispatch) => {
  dispatch(setParticipants(participants))
}

export const getTimer = (timerId) => (dispatch) => {
  dispatch(setTimer(timerId))
}

export const getBiddingTime = () => (dispatch) => {
  dispatch(setTime())
}

export default timerReducer