import { Blog } from 'src/typeorm/entities/Blog';
import { BlogCommentCreateParams, CreateBlogParams, UpdateBlogParams } from 'src/types/types';
import { Comment } from 'src/typeorm/entities/Comment';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog) private blogRepository: Repository<Blog>,
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
  ) {}

  getBlogs() {
    return this.blogRepository.find({ relations: ['comments'] });
  }

  createBlog(blogDetails: CreateBlogParams) {
    const newBlog = this.blogRepository.create({
      ...blogDetails,
      createdAt: new Date(),
    });

    return this.blogRepository.save(newBlog);
  }

  updateBlog(id: number, updateBlogDetails: UpdateBlogParams) {
    return this.blogRepository.update({ id }, { ...updateBlogDetails });
  }

  deleteBlog(id: number) {
    return this.blogRepository.delete(id);
  }

  async createBlogComment(id: number, createBlogCommentDetails: BlogCommentCreateParams) {
    const blog = await this.blogRepository.findOneBy({ id });
    if (!blog) {
      throw new HttpException('Blog not found. Cannot create comment', HttpStatus.BAD_REQUEST);
    }

    const newComment = this.commentRepository.create({ ...createBlogCommentDetails, blog });
    return this.commentRepository.save(newComment);
  }
}
