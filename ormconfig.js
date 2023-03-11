module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '5074',
    database: process.env.DB_NAME || 'nestjs',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  };
  