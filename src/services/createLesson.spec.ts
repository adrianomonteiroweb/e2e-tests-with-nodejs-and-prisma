import { InMemoryLessonsRepository } from '../../tests/repositories/inMemoryLessonsRepository';
import { CreateLesson } from './CreateLesson';

describe('Create lessons tests.', () => {
  it('It must be possible to create a lesson.', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();

    const createLesson = new CreateLesson(inMemoryLessonsRepository);

    await expect(
      createLesson.execute({ title: 'Aula 01' })
    ).resolves.not.toThrow();

    expect(inMemoryLessonsRepository.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Aula 01',
        }),
      ])
    );
  });

  it('It must not be possible to create a lesson with invalid title.', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();

    const createLesson = new CreateLesson(inMemoryLessonsRepository);

    await expect(createLesson.execute({ title: '' })).rejects.toThrow();

    expect(inMemoryLessonsRepository.items).toEqual([]);
  });
});
