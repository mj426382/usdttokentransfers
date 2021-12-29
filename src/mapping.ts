import {
  Transfer
} from "../generated/UsdtToken/UsdtToken"
import { TransferEvent } from "../generated/schema"

const lender = '0x16d02Dc67EB237C387023339356b25d1D54b0922'
const lender2 = '0xa606dd423dF7dFb65Efe14ab66f5fDEBf62FF583'

export function handleTransfer(event: Transfer): void {

  if(event.params.from.toHexString() === lender || event.params.from.toHexString() === lender2) {
    return
  }

  const entity = new TransferEvent(event.transaction.hash.toHex())

  entity.value = event.params.value
  entity.from = event.params.from
  entity.to = event.params.to
  entity.blockNumber = event.block.number

  entity.save()
}
