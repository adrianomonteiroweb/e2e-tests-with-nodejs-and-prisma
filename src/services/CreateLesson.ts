import { LessonsRepository } from './../repositories/ILessonsRepository';

interface CreateLessonRequest {
  title: string;
  description?: string;
}

export class CreateLesson {
  constructor(private lessonsRepository: LessonsRepository) {}

  async execute({ title, description }: CreateLessonRequest) {
    if (!title) throw new Error('Title is required.');

    await this.lessonsRepository.create({
      title,
      description,
    });
  }
}
