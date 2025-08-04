import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { Section } from './section.schema';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  async create(@Body('websiteIdea') websiteIdea: string): Promise<Section[]> {
    if (!websiteIdea) {
      throw new Error('Website idea is required');
    }
    return this.sectionsService.createSections(websiteIdea);
  }

  @Get()
  async get(@Query('websiteIdea') websiteIdea: string): Promise<Section[]> {
    return this.sectionsService.getSections(websiteIdea);
  }
}