import crypto from 'node:crypto';

import { Lesson } from '@prisma/client';
import {
  LessonsRepository,
  CreateLessonData,
} from './../../src/repositories/ILessonsRepository';

export class InMemoryLessonsRepository implements LessonsRepository {
  public items: Lesson[] = [];

  async create(data: CreateLessonData) {
    this.items.push({
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description ?? null,
    });
  }
}
