module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '916f5d1c47ff48d46a09ac5fba300aa8'),
  },
});
