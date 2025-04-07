import { Queue, Worker } from 'bullmq';
import { redisConnection, defaultQueueConfig } from '../config/queue.js';
import { sendMail } from '../config/mail.js';
export const emailQueueName = "emailQueue";
export const emailQueue = new Queue(emailQueueName, {
    connection: redisConnection,
    defaultJobOptions: defaultQueueConfig
});
// worker
export const queueWorker = new Worker(emailQueueName, async (job) => {
    const data = job.data;
    console.log("the queue data is ", data);
    await sendMail(data.to, data.subject, data.body);
}, { connection: redisConnection });
