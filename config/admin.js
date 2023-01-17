module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3297f3af1d62c2d79d455dc8ea93a74a'),
  },
});
