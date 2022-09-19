import { prisma } from '../../database/prisma';
import { LessonsRepository, CreateLessonData } from './../ILessonsRepository';

export class PrismaLessonsRepository implements LessonsRepository {
  async create(data: CreateLessonData) {
    await prisma.lesson.create({
      data,
    });
  }
}
