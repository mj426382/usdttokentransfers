import {
  Issue,
  Redeem,
  Deprecate,
  Params,
  DestroyedBlackFunds,
  AddedBlackList,
  RemovedBlackList,
  Approval,
  Transfer,
  Pause,
  Unpause
} from "../generated/UsdtToken/UsdtToken"
import { TransferEvent } from "../generated/schema"

const lender = '0x16d02Dc67EB237C387023339356b25d1D54b0922'
const lender2 = '0xa606dd423dF7dFb65Efe14ab66f5fDEBf62FF583'

export function handleIssue(event: Issue): void {}

export function handleRedeem(event: Redeem): void {}

export function handleDeprecate(event: Deprecate): void {}

export function handleParams(event: Params): void {}

export function handleDestroyedBlackFunds(event: DestroyedBlackFunds): void {}

export function handleAddedBlackList(event: AddedBlackList): void {}

export function handleRemovedBlackList(event: RemovedBlackList): void {}

export function handleApproval(event: Approval): void {}

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

export function handlePause(event: Pause): void {}

export function handleUnpause(event: Unpause): void {}
