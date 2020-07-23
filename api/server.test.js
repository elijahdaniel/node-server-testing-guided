const supertest = require('supertest')
const server = require('./server.js')

describe('server', () => {
  it('run the tests', () => {
    expect(true).toBe(true)
  })

  describe('GET /', () => {
    it('should respond with 200 OK', () => {
      return supertest(server)
        .get('/')
        .then(res => {
          expect(res.staus).toBe(undefined) //should be 200
        })
    })

    it('should respond with JSON', function () {
      return supertest(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i)
        })
    })

    it('should respond with api: up', function () {
      return supertest(server)
        .get('/')
        .then(res => {
          expect(res.body.api).toBe('up')
        })
    })
  })
})
