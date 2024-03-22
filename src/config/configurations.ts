export default () => ({
  database: {
    type: 'postgres',
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT),
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    entities: ['dist/**/*.entity{.ts,.js}'],
  },
});
