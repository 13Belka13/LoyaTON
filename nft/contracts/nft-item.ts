import { Cell, beginCell, Slice, Address } from "ton";

export type ItemStateInterface = { 
  index: number; 
  collection_address: Address,
  owner_address: Address,
  content: Cell,
}

// encode contract storage according to save_data() contract method
export function data(params: ItemStateInterface): Cell {
  return beginCell()
            .storeUint(params.index, 64)
            .storeAddress(params.collection_address)
            .storeAddress(params.owner_address)
            .storeRef(params.content)
         .endCell();
}