import
{
    BigInt,
    dataSource,
    store
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
    r.disputeID = event.params.disputeId;
    r.status = "InDispute";
    r.operation = "AddArbitrator";
    r.name = event.params.name;
    r.manager = event.params.manager;
    r.save();
}

export function handleOperationsAddRequested(event: OperationsAddRequested): void
{
    let r = new Request(event.params.requestId.toString());
    r.disputeID = event.params.disputeId;
    r.status = "InDispute";
    r.operation = "AddOperation";
    r.manager = event.params.manager;
    r.arbitrator = event.params.arbAddr.toHex();
    r.save();
}

export function handleContractsAddRequested(event: ContractsAddRequested): void
{
    let r = new Request(event.params.requestId.toString());
    r.disputeID = event.params.disputeId;
    r.status = "InDispute";
    r.operation = "AddContract";
    r.manager = event.params.manager;
    r.arbitrator = event.params.arbAddr.toHex();
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
    let a = new Arbitrator(event.params.arbAddr.toHex());
    a.manager = event.params.manager;
    a.name = event.params.name;
    a.save();
}

export function handleArbitratorDeleted(event: ArbitratorDeleted): void
{
    store.remove("Arbitrator", event.params.arbAddr.toHex());
}

export function handleArbitratorManagerChanged(event: ArbitratorManagerChanged): void
{
    let a = Arbitrator.load(event.params.arbAddr.toHex()) as Arbitrator;
    a.manager = event.params.manager;
    a.save();
}

export function handleContractAdded(event: ContractAdded): void
{
    let c = new Contract(event.params.arbAddr.toHex()+"-"+event.params.contr.toHex());
    c.contract = event.params.contr;
    c.arbitrator = event.params.arbAddr.toHex();
    c.save();
}

export function handleContractRemoved(event: ContractRemoved): void
{
    store.remove("Contract", event.params.arbAddr.toHex()+"-"+event.params.contr.toHex());
}

export function handleOperationAdded(event: OperationAdded): void
{
    let o = new Operation(event.params.arbAddr.toHex()+"-"+event.params.operation.toString());
    o.operation = event.params.operation;
    o.extraData = event.params.extraData;
    o.arbitrator = event.params.arbAddr.toHex();
    o.save();
}

export function handleOperationChanged(event: OperationChanged): void
{
    let o = Operation.load(event.params.arbAddr.toHex()+"-"+event.params.operation.toString()) as Operation;
    o.extraData = event.params.extraData;
    o.save();
}

export function handleOperationRemoved(event: OperationRemoved): void
{
    store.remove("Operation", event.params.arbAddr.toHex()+"-"+event.params.operation.toString());
}
