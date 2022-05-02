// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TokenInterface {
  function balanceOf(address) public view returns (uint);
}

contract BalanceChecker {

  function tokenBalance(address user, address token) public view returns (uint) {
    TokenInterface(token).balanceOf(user);
  }

  function getBalances(address wallet, address[] memory tokens) public view returns(uint[]) {
    uint[] memory balances = new uint[](tokens.length);
    for(uint i = 0; i < tokens.length; i++){
      balances[i] = tokenBalance(wallet, tokens[i]);
   }

   return balances;
  }

}
