import * as main from "../contracts/nft-item";
import { Address, beginCell, Cell } from "ton";
import fs from "fs";

// return the init Cell of the contract storage (according to load_data() contract method)
export function initData() {
  const contentBuffer = Buffer.from('https://storage.googleapis.com/loyaton-nft/first.json', 'utf8');
  const loyaton_wallet_address = "EQASUe10vZGXwqxSIHIuXQXUUGQiXCp3OHElIbsPYYFq24Ie";
  const loyaton_collection_address = "EQCKr5PMRKJh-48JqTe81k6HCmtqDEQjE3rB_gPoQzr-Z4A6";
  
  return main.data({
    index: 0,
    owner_address: Address.parseFriendly(loyaton_wallet_address).address,
    collection_address: Address.parseFriendly(loyaton_collection_address).address,
    content: beginCell().storeBuffer(contentBuffer).endCell(),
  });
}

// return the op that should be sent to the contract on deployment, can be "null" to send an empty message
export function initMessage() {
  return null;
}
