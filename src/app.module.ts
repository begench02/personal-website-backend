import { Blog } from './typeorm/entities/Blog';
import { BlogsModule } from './blogs/blogs.module';
import { Comment } from './typeorm/entities/Comment';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BlogsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'personal_website',
      entities: [Blog, Comment],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
