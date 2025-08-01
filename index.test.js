const request = require('supertest');
const app = require('./index');

describe('Demo API', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('message', 'Welcome to the JavaScript Demo API!');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('status', 'healthy');
      expect(res.body).toHaveProperty('timestamp');
      expect(res.body).toHaveProperty('uptime');
    });
  });

  describe('GET /api/users', () => {
    it('should return list of users', async () => {
      const res = await request(app).get('/api/users');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBe(3);
      expect(res.body[0]).toHaveProperty('id');
      expect(res.body[0]).toHaveProperty('name');
      expect(res.body[0]).toHaveProperty('email');
    });
  });

  describe('GET /api/users/:id', () => {
    it('should return a specific user', async () => {
      const res = await request(app).get('/api/users/1');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('id', 1);
      expect(res.body).toHaveProperty('name', 'John Doe');
      expect(res.body).toHaveProperty('email', 'john@example.com');
    });

    it('should return 404 for non-existent user', async () => {
      const res = await request(app).get('/api/users/999');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('error', 'User not found');
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const newUser = {
        name: 'Test User',
        email: 'test@example.com'
      };

      const res = await request(app)
        .post('/api/users')
        .send(newUser);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('name', newUser.name);
      expect(res.body).toHaveProperty('email', newUser.email);
    });

    it('should return 400 for missing required fields', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({ name: 'Test' });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error', 'Name and email are required');
    });
  });

  describe('404 handler', () => {
    it('should return 404 for unknown routes', async () => {
      const res = await request(app).get('/unknown-route');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('error', 'Not found');
    });
  });
});