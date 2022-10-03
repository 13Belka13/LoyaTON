type id = string;

export type User = {
    id: string,
    email: string,
    password: string,
    name: string,
    rewards?: string[],
    campaigns?: string[]
}

export type Company = {
    id: string,
    email: string,
    password: string,
    name: string,
    rewards?: string[],
    campaigns?: string[]
}

export type Reward = {
    rewardID: string,
    name: string,
    description: string,
    companyID: string,
}

export type Campaign = {
    campaignID: string,
    name: string,
    description: string,
    companyID: string,
    totalpoints: BigInteger, 
    pointsperstep: BigInteger,
    rewardID: string,
}

export const users: Record<id, User> = {}; //userID -> User

export const companies: Record<id, Company> = {}; //companyID -> Company

export const rewardss: Record<id, Reward> = {}; 

export const rewards: Record<id, Reward[]> = {}; //companyID -> Reward[]

export const userRewards: Record<id, Reward[]> = {};

export const campaigns: Record<id, Campaign[]> = {};

