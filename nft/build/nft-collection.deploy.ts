import * as main from "../contracts/nft-collection";
import { Address, beginCell, Cell } from "ton";
import fs from "fs";

// return the init Cell of the contract storage (according to load_data() contract method)
export function initData() {
  const contentBuffer = Buffer.from('https://storage.googleapis.com/loyaton-nft/loyaton_collection.json', 'utf8');
  const hexArtifact = `build/nft-item.compiled.json`;
  const loyaton_wallet_address = "EQASUe10vZGXwqxSIHIuXQXUUGQiXCp3OHElIbsPYYFq24Ie"

  const owner_address = Address.parseFriendly(loyaton_wallet_address).address;

  return main.data({
    owner_address,
    next_item_index: 0,
    content: beginCell().storeBuffer(contentBuffer).endCell(),
    nft_item_code: Cell.fromBoc(JSON.parse(fs.readFileSync(hexArtifact).toString()).hex)[0],
    royalty_params: beginCell().storeUint(10, 16).storeUint(100, 16).storeAddress(owner_address).endCell(),
  });
}

// return the op that should be sent to the contract on deployment, can be "null" to send an empty message
export function initMessage() {
  return null;
}
