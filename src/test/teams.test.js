const supertest = require('supertest')
const app = require('../index')

const api = supertest(app)

test('teams are returned in json', async () => {
  await  api
        .get('/teams')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('users are returned in json', async () => {
    await  api
          .get('/users')
          .expect(200)
          .expect('Content-Type', /application\/json/)
  })