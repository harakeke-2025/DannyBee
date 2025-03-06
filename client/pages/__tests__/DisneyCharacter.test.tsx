// @vitest-environment jsdom
import { describe, expect, it, beforeEach } from 'vitest'
import { renderRoute } from '../test/setup.tsx'
import nock from 'nock'

const EXAMPLE_CHARACTER = {
  _id: 112,
  name: "Achilles",
  imageUrl: "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png"
,
}

beforeEach(() => {
  localStorage.clear()

})
//https://api.disneyapi.dev/character
//vi.setSystemTime(1705538770253)

describe('The game page', () => {
  it('shows a loading page', async () => {
    const scope = nock('https://api.disneyapi.dev')
      .get('/character/112')
      .reply(200, EXAMPLE_CHARACTER)
  

  const screen = renderRoute('/character/112')
  const loadingIndicator = await screen.getByTestId('loading')

  expect(loadingIndicator).toBeVisible()
  expect(scope.isDone()).toBe(true)
})

  it('shows my data', async () => {
    const scope = nock('https://api.disneyapi.dev')
      .get('/character/112')
      .reply(200, EXAMPLE_CHARACTER)
  

  const screen = renderRoute('/character/112')
  const loadingIndicator = await screen.findByAltText('alttext')

  expect(loadingIndicator).toBeVisible()
  expect(scope.isDone()).toBe(true)


  })

})
