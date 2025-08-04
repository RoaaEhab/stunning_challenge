import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section } from './section.schema';

@Injectable()
export class SectionsService {
  constructor(@InjectModel(Section.name) private sectionModel: Model<Section>) {}

  async createSections(websiteIdea: string): Promise<Section[]> {
    const dummySections = [
      { title: 'Hero', content: `Welcome to ${websiteIdea}`, websiteIdea },
      { title: 'About', content: `About ${websiteIdea}`, websiteIdea },
      { title: 'Contact', content: `Contact us for ${websiteIdea}`, websiteIdea },
    ];

    return this.sectionModel.insertMany(dummySections);
  }

  async getSections(websiteIdea: string): Promise<Section[]> {
    return this.sectionModel.find({ websiteIdea }).exec();
  }
}