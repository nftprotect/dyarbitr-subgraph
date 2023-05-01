import
{
    BigInt,
    dataSource
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
    SetMasterArbitrator,
    SetMasterOperation
} from "../generated/DyArbitratorRegistry/DyArbitratorRegistry"
import
{
    System,
    Arbitrator,
    Contract,
    Operation,
    Request
} from "../generated/schema"


export function handleDeployed(event: Deployed): void
{
    let c = new System("0");
    c.contract = dataSource.address();
    c.save();
}

export function handleSetMasterArbitrator(event: SetMasterArbitrator): void
{
    let c = System.load("0") as System;
    c.master = event.params.arbitratorProxy;
    c.save();
}

export function handleSetMasterOperation(event: SetMasterOperation): void
{
    // not implemented yet
}

export function handleArbitratorAddRequested(event: ArbitratorAddRequested): void
{
    let r = new Request(event.params.requestId.toString());
    r.status = "InDispute";
    r.operation = "AddArbitrator";
    r.manager = event.params.manager;
    r.save();
}

export function handleOperationsAddRequested(event: OperationsAddRequested): void
{
    let r = new Request(event.params.requestId.toString());
    r.status = "InDispute";
    r.operation = "AddOperation";
    r.manager = event.params.manager;
    r.arbitrator = event.params.arbAddr.toString();
    r.save();
}

export function handleContractsAddRequested(event: ContractsAddRequested): void
{
    let r = new Request(event.params.requestId.toString());
    r.status = "InDispute";
    r.operation = "AddContract";
    r.manager = event.params.manager;
    r.arbitrator = event.params.arbAddr.toString();
    r.save();
}

export function handleDisputeAccepted(event: DisputeAccepted): void
{
    let r = Request.load(event.params.requestId.toString()) as Request;
    r.status = "Accepted";
    r.save();
}

export function handleDisputeRejected(event: DisputeRejected): void
{
    let r = Request.load(event.params.requestId.toString()) as Request;
    r.status = "Rejected";
    r.save();
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

export function handleOperationAdded(event: OperationAdded): void
{
}

export function handleOperationChanged(event: OperationChanged): void
{
}

export function handleOperationRemoved(event: OperationRemoved): void
{
}
