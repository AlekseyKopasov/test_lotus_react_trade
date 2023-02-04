import Timer from './Timer'
import renderer from 'react-test-renderer'

const CORRECT_SECONDS = 1000
const TIME_IN_MS = 5
const date = new Date().getTime() + CORRECT_SECONDS + (TIME_IN_MS * 1000)

it('Таймер монтируется', () => {
  const component = renderer.create(<Timer id={0} />)
})

test('Когда время таймера закончилось - таймер размонтировался', () => {

})

test('Когда время таймера закончилось - следущему установиться активный класс', () => {

})

test('Когда время таймера и список таймеров закончился - первому установиться активный класс', () => {

})

test('Когда время таймера закончилось - следущему установилось новое время', () => {
  const { rerender } = render(<Timer id={0} />)
  rerender(<Timer timerId={1} />)
})