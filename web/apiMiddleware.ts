import { Router } from "express";
import { userRouter } from './routes/user.js';
import { companyRouter } from "./routes/company.js";
import { rewardRouter } from './routes/reward.js';
import { campaignRouter } from './routes/сampaign.js';

export const apiRouter = Router();

apiRouter.use(userRouter);
apiRouter.use(companyRouter);
apiRouter.use(rewardRouter);
apiRouter.use(campaignRouter);
