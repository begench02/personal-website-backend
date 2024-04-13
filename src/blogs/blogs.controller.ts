import { BlogCreateDto } from './dtos/blog-create.dto';
import { BlogsService } from './blogs.service';
import { BlogUpdateDto } from './dtos/blog-update.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BlogCommentCreateDto } from './dtos/blog-comment-create.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private blogService: BlogsService) {}

  @Get()
  getBlogs() {
    return this.blogService.getBlogs();
  }

  @Post()
  createBlog(@Body() createBlogDto: BlogCreateDto) {
    return this.blogService.createBlog(createBlogDto);
  }

  @Put(':id')
  async updateBlogById(@Param('id', ParseIntPipe) id: number, @Body() updateBlogDto: BlogUpdateDto) {
    await this.blogService.updateBlog(id, updateBlogDto);
  }

  @Delete(':id')
  async deleteBlogById(@Param('id', ParseIntPipe) id: number) {
    await this.blogService.deleteBlog(id);
  }

  @Post(':id/comments')
  createBlogComment(@Param('id', ParseIntPipe) id: number, @Body() createBlogComment: BlogCommentCreateDto) {
    return this.blogService.createBlogComment(id, createBlogComment);
  }
}
