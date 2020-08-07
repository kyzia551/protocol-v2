/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface MockAggregatorBaseInterface extends Interface {
  functions: {
    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, timestamp]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;
  };
}

export class MockAggregatorBase extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MockAggregatorBase;
  attach(addressOrName: string): MockAggregatorBase;
  deployed(): Promise<MockAggregatorBase>;

  on(event: EventFilter | string, listener: Listener): MockAggregatorBase;
  once(event: EventFilter | string, listener: Listener): MockAggregatorBase;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MockAggregatorBase;
  removeAllListeners(eventName: EventFilter | string): MockAggregatorBase;
  removeListener(eventName: any, listener: Listener): MockAggregatorBase;

  interface: MockAggregatorBaseInterface;

  functions: {
    latestAnswer(): Promise<BigNumber>;
  };

  latestAnswer(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;
  };

  estimate: {
    latestAnswer(): Promise<BigNumber>;
  };
}
