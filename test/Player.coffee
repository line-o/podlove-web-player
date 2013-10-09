assert = require 'assert'
Player = require '../js/player.js'

describe 'Player', ->
  player = new Player()
  assertions = [
    {test:"00:00:00.000", expected: 0},
    {test:"00:00:00.001", expected: 1},
    {test:"00:00:01.000", expected: 1000},
    {test:"00:01:00.000", expected: 60000},
    {test:"01:00:00.000", expected: 3600000},
    {test:"00:00:01.999", expected: 1999},
    {test:"00:00:60.000", expected: -1},
    {test:"00:60:00.000", expected: -1},
    {test:"24:00:00.000", expected: 86400000},
    {test:"1:00:00.000",  expected: 3600000},
    {test:"12:34.567",    expected: 754567},
    {test:"12:34:56.789", expected: 45296789}
  ]

  testRunner = (e) ->
    res = player.timeStampToMillis(e.test)
    it 'converts ' + e.test + ' to ' + e.expected, ->
      assert.equal(e.expected, res)

  describe '#processChapterStart', ->
    assertions.forEach(testRunner)


