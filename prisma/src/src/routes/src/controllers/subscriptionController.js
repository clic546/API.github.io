import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const subscribe = async (req, res) => {
  const { email, city } = req.body;
  try {
    const result = await prisma.subscription.create({ data: { email, city } });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Subscription failed' });
  }
};
