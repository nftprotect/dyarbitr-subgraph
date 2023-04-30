import
{
    BigInt
} from "@graphprotocol/graph-ts"
import
{
    DyArbitratorRegistry,
    ArbitratorAddRequested,
    ArbitratorAdded,
    ArbitratorDeleted,
    ArbitratorManagerChanged,
    ContractAdded,
    ContractRemoved,
    ContractsAddRequested,
    Deployed,
    DisputeAccepted,
    DisputeRejected,
    OperationAdded,
    OperationChanged,
    OperationRemoved,
    OperationsAddRequested,
    OwnershipTransferred,
    SetMasterArbitrator,
    SetMasterOperation
} from "../generated/DyArbitratorRegistry/DyArbitratorRegistry"
import
{
    ExampleEntity
} from "../generated/schema"

export function handleArbitratorAddRequested(event: ArbitratorAddRequested): void
{
}

export function handleArbitratorAdded(event: ArbitratorAdded): void
{
}

export function handleArbitratorDeleted(event: ArbitratorDeleted): void
{
}

export function handleArbitratorManagerChanged(event: ArbitratorManagerChanged): void
{
}

export function handleContractAdded(event: ContractAdded): void
{
}

export function handleContractRemoved(event: ContractRemoved): void
{
}

export function handleContractsAddRequested(event: ContractsAddRequested): void
{
}

export function handleDeployed(event: Deployed): void
{
}

export function handleDisputeAccepted(event: DisputeAccepted): void
{
}

export function handleDisputeRejected(event: DisputeRejected): void
{
}

export function handleOperationAdded(event: OperationAdded): void
{
}

export function handleOperationChanged(event: OperationChanged): void
{
}

export function handleOperationRemoved(event: OperationRemoved): void
{
}

export function handleOperationsAddRequested(event: OperationsAddRequested): void
{
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void
{
}

export function handleSetMasterArbitrator(event: SetMasterArbitrator): void
{
}

export function handleSetMasterOperation(event: SetMasterOperation): void
{
}
