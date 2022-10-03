import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { campaigns, companies } from "../storage.js";

export const campaignRouter = Router();

campaignRouter.post('/campaign', async (req, res, next) => {
    const id = uuidv4();
    const { companyID, name, description, totalpoints, pointsperstep, rewardID } = req.body;

    const companyExists = companies[companyID];

    if (!companyExists) {
        res.status(404).json({
            status: 'success',
            response: {
                message: "Company with the given id does not exist"
            }
        });

        return;
    }

    const companyHasCampaigns = !!campaigns[companyID];

    if (companyHasCampaigns) {
        campaigns[companyID].push({
            campaignID: id,
            name,
            description,
            companyID,
            totalpoints, 
            pointsperstep, 
            rewardID
        });
    } else {
        campaigns[companyID] = [{
            campaignID: id,
            name,
            description,
            companyID,
            totalpoints, 
            pointsperstep, 
            rewardID
        }];
    }

    res.status(200).json({
        status: 'success',
        response: {
            id,
            name,
            description,
            companyID,
            totalpoints, 
            pointsperstep, 
            rewardID
        }
    });

    next();
});

campaignRouter.get('/campaign', (req, res, next) => {
    const companyID = req.query.companyID as string;

    const companyCampaigns = campaigns[companyID];


    if (companyCampaigns) {
        if (companyCampaigns.length > 0) {
            res.status(200).json({
                status: 'success',
                response: companyCampaigns.map((r) => ({
                    id: r.campaignID,
                    name: r.name,
                    description: r.description,
                    companyID: r.companyID,
                    totalpoints: r.totalpoints,
                    pointsperstep: r.pointsperstep,
                    rewardID: r.rewardID
                }))
            });
        } else {
            res.status(200).json({
                status: 'success',
                response: {
                    message: 'This company has no campaigns'
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