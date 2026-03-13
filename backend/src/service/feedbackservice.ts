import prisma from '../../lib/db.js';
import type { Prisma } from '../../generated/prisma/client.js';

class FeedbackService {
  async save(feedback: Prisma.FeedbackCreateInput): Promise<void> {
    // Save to database
    await prisma.feedback.create({
      data: feedback,
    });
  }

  async getAll() {
    return await prisma.feedback.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}

export default new FeedbackService();