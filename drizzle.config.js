import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:8AdQIlb7RZiH@ep-round-union-a5wcq65p.us-east-2.aws.neon.tech/ai-room-redesign?sslmode=require'
  },
});
