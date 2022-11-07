import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<number>,
  'check_fd' : () => Promise<bigint>,
  'compound_interest' : () => Promise<undefined>,
  'constructor' : (arg_0: string, arg_1: bigint, arg_2: string) => Promise<
      undefined
    >,
  'deposit' : (arg_0: number) => Promise<undefined>,
  'fixed_deposit' : (arg_0: number, arg_1: bigint) => Promise<bigint>,
  'getAge' : () => Promise<bigint>,
  'getName' : () => Promise<string>,
  'getPassword' : () => Promise<string>,
  'id' : () => Promise<Principal>,
  'setAge' : (arg_0: bigint) => Promise<bigint>,
  'setName' : (arg_0: string) => Promise<bigint>,
  'setPassword' : (arg_0: string) => Promise<bigint>,
  'whoami' : () => Promise<Principal>,
  'withdraw_fd' : () => Promise<bigint>,
  'withdrawl' : (arg_0: number) => Promise<bigint>,
}
