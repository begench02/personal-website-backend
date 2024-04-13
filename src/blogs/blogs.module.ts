import { Blog } from 'src/typeorm/entities/Blog';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { Comment } from 'src/typeorm/entities/Comment';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Blog, Comment])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
