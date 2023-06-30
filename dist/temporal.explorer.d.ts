import { OnApplicationBootstrap, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, MetadataScanner } from '@nestjs/core';
import { NativeConnectionOptions, RuntimeOptions, WorkerOptions } from '@temporalio/worker';
import { TemporalMetadataAccessor } from './temporal-metadata.accessors';
export declare class TemporalExplorer implements OnModuleInit, OnModuleDestroy, OnApplicationBootstrap {
    private readonly discoveryService;
    private readonly metadataAccessor;
    private readonly metadataScanner;
    private options;
    private readonly logger;
    private worker;
    private timerId;
    constructor(discoveryService: DiscoveryService, metadataAccessor: TemporalMetadataAccessor, metadataScanner: MetadataScanner);
    clearInterval(): void;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): void;
    onApplicationBootstrap(): void;
    explore(): Promise<void>;
    getWorkerConfigOptions(): WorkerOptions;
    getNativeConnectionOptions(): NativeConnectionOptions | undefined;
    getRuntimeOptions(): RuntimeOptions | undefined;
    getActivityClasses(): object[];
    findDuplicateActivityMethods(): void;
    handleActivities(): Promise<{}>;
}
