export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'check_fd' : IDL.Func([], [IDL.Int], ['query']),
    'compound_interest' : IDL.Func([], [], ['oneway']),
    'constructor' : IDL.Func([IDL.Text, IDL.Int, IDL.Text], [], ['oneway']),
    'deposit' : IDL.Func([IDL.Float64], [], ['oneway']),
    'fixed_deposit' : IDL.Func([IDL.Float64, IDL.Int], [IDL.Int], []),
    'getAge' : IDL.Func([], [IDL.Int], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getPassword' : IDL.Func([], [IDL.Text], ['query']),
    'id' : IDL.Func([], [IDL.Principal], []),
    'setAge' : IDL.Func([IDL.Int], [IDL.Int], []),
    'setName' : IDL.Func([IDL.Text], [IDL.Int], []),
    'setPassword' : IDL.Func([IDL.Text], [IDL.Int], []),
    'whoami' : IDL.Func([], [IDL.Principal], []),
    'withdraw_fd' : IDL.Func([], [IDL.Int], []),
    'withdrawl' : IDL.Func([IDL.Float64], [IDL.Int], []),
  });
};
export const init = ({ IDL }) => { return []; };
