import { Type } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class TemporalMetadataAccessor {
    private readonly reflector;
    constructor(reflector: Reflector);
    isActivities(target: Type<unknown> | Function | null | undefined): boolean;
    getActivities(target: Type<unknown> | Function): unknown;
    isActivity(target: Type<unknown> | Function | null | undefined): boolean;
    getActivity(target: Type<unknown> | Function): unknown;
    isWorkflows(target: Type<unknown> | Function | null | undefined): boolean;
    getWorkflows(target: Type<unknown> | Function): unknown;
    isWorkflowMethod(target: Type<unknown> | Function | null | undefined): boolean;
    getWorkflowMethod(target: Type<unknown> | Function): unknown;
}
