import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { rewardss, userRewards, users } from "../storage.js";

export const rewardRouter = Router();

rewardRouter.post('/reward/give', async (req, res, next) => {
    const { rewardID, userID } = req.body;

    const reward = rewardss[rewardID];

    const userExists = users[userID];

    if (!userExists) {
        res.status(404).json({
            status: 'success',
            response: {
                message: "User with the given id does not exist"
            }
        });

        return;
    }

    const companyHasRewards = !!userRewards[rewardID];

    if (companyHasRewards) {
        userRewards[rewardID].push({
            rewardID: rewardID,
            name: reward.name,
            description: reward.description,
            companyID: reward.companyID,
        });
    } else {
        userRewards[rewardID] = [{
            rewardID: rewardID,
            name: reward.name,
            description: reward.description,
            companyID: reward.companyID,
        }];
    }

    res.status(200).json({
        status: 'success',
        response: {
            userID,
            reward,
        }
    });

    next();
});

rewardRouter.get('/reward/give', (req, res, next) => {
    const userID = req.query.userID as string;

    const rewards = userRewards[userID];


    if (rewards) {
        if (rewards.length > 0) {
            res.status(200).json({
                status: 'success',
                response: rewards.map((r) => ({
                    id: r.rewardID,
                    name: r.name,
                    description: r.description
                }))
            });
        } else {
            res.status(200).json({
                status: 'success',
                response: {
                    message: 'This user has no rewards'
                }
            });
        }
    } else {
        res.status(404).json({
            status: 'failed',
            response: {
                message: "Not found",
            }
        });
    }

    next();
});