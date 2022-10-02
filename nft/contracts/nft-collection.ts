import { Cell, beginCell, Address } from "ton";

export type CollectionStateInterface = { 
  owner_address: Address; 
  next_item_index: number,
  content: Cell,
  nft_item_code: Cell,
  royalty_params: Cell,
}
// encode contract storage according to save_data() contract method
export function data(params: CollectionStateInterface): Cell {
  return beginCell()
          .storeAddress(params.owner_address)
          .storeUint(params.next_item_index, 64)
          .storeRef(params.content)
          .storeRef(params.nft_item_code)
          .storeRef(params.royalty_params)
         .endCell();
}

export function deployNFT(): Cell {
  return beginCell().storeUint(1, 32).storeUint(0, 64).endCell();
}