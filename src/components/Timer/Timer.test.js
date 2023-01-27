import renderer from 'react-test-renderer'
import Timer from './Timer'
import { render } from '@testing-library/react'

const CORRECT_SECONDS = 1000
const TIME_IN_MS = 5
const date = new Date().getTime() + CORRECT_SECONDS + (TIME_IN_MS * 1000)

test('Таймер монтируется', () => {
  const {container} = render(<Timer timerId={0} />)
  expect(container).toBeTruthy()
})

test('Когда время таймера закончилось - таймер размонтировался', () => {
  const timer = renderer.create(<Timer />)
})

test('Когда время таймера закончилось - следущему установиться активный класс', () => {

})

test('Когда время таймера и список таймеров закончился - первому установиться активный класс', () => {

})

test('Когда время таймера закончилось - следущему установилось новое время', () => {
  const { rerender } = render(<Timer id={0} />)
  rerender(<Timer timerId={1} />)
})