import { Provider } from '@nestjs/common';
import { WorkflowClientOptions } from '@temporalio/client';

import { SharedWorkflowClientOptions } from '../interfaces/shared-workflow-client-options.interface';
import { getWorkflowClient } from './client.util';
import { getAsyncQueueToken, getQueueToken } from './get-queue-token.util';

function createAsyncProvider(
  provide: string,
  options?: SharedWorkflowClientOptions,
): Provider {
  if (options?.useFactory) {
    const { useFactory, inject } = options;
    return {
      provide,
      useFactory,
      inject: inject || [],
    };
  }
  return {
    provide,
    useValue: options?.useValue || null,
  };
}

export function createClientAsyncProvider(
  asyncOptions: SharedWorkflowClientOptions,
): Provider[] {
  const name = asyncOptions.name ? asyncOptions.name : undefined;
  const optionsProvide = getAsyncQueueToken(name);
  const clientProvide = getQueueToken(name);
  return [
    createAsyncProvider(optionsProvide, asyncOptions),
    {
      provide: clientProvide,
      useFactory: (options?: WorkflowClientOptions) =>
        getWorkflowClient(options),
      inject: [optionsProvide],
    },
  ];
}
