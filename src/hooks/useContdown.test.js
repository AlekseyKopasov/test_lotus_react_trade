const CORRECT_SECONDS = 1000
const TIME_IN_MS = 5
const date = new Date().getTime() + CORRECT_SECONDS + (TIME_IN_MS * 1000)

test('При запуске таймера устанавливается время', () => {
  const countDownDate = new Date(date).getTime()
  expect(countDownDate).toBeTruthy()
})

test('Если в параметрах нет даты - таймер возращает 00:00:00', () => {

})

test('При добавлении даты - возвращается скоректированное время', () => {

})