"use strict";
/// <reference path = "./types/transaction.ts" />

import BigNumber from "bignumber.js";
import fingateABI from "./abi/fingateABI";
import Moac from "./moac";
import SmartContract from "./smartContract";
import { isValidAmount, isValidHash, isValidJingtumAddress, isValidMoacAddress, isValidMoacSecret, validate } from "./validator";

/**
 * toolkit of moac fingate
 *
 * @class Fingate
 */
class Fingate extends SmartContract {
  /**
   * Creates an instance of Fingate
   * @memberof Fingate
   */
  constructor() {
    super();
  }

  /**
   * init instance of moac contract
   *
   * @param {string} fingateAddress contract address of moac fingate
   * @param {Moac} moac instance
   * @memberof Fingate
   */
  @validate
  public init(@isValidMoacAddress fingateAddress: string, moac: Moac) {
    try {
      super.init(fingateAddress, moac, fingateABI);
    } catch (e) {
      throw e;
    }
  }

  /**
   * close chain3 & destroy instance of contract
   *
   * @memberof Fingate
   */
  public destroy() {
    super.destroy();
  }

  /**
   * request deposit state
   *
   * @param {string} address moac address
   * @param {string} [contractAddress="0x0000000000000000000000000000000000000000"] contract address of token
   * @returns {(Promise<(BigNumber | string)[]>)}
   * @memberof Fingate
   */
  @validate
  public async depositState(@isValidMoacAddress address: string, @isValidMoacAddress contractAddress = "0x0000000000000000000000000000000000000000"): Promise<(BigNumber | string)[]> {
    address = Moac.prefix0x(address);
    const state = await super.callABI("depositState", contractAddress, address);
    return state;
  }

  /**
   * validate deposit state is pending or not
   *
   * @param {(BigNumber | string)[]} state
   * @returns {boolean} return true if the state is pending
   * @memberof Fingate
   */
  public isPending(state: (BigNumber | string)[]): boolean {
    return state[0].toString(10) !== "0" || state[1] !== "";
  }

  /**
   * deposit moac
   *
   * @param {string} jtAddress jingtum address
   * @param {string} amount amount of deposit
   * @param {string} moacSecret moac secret
   * @param {ITransactionOption} options specify gasPrice, nonce, gasLimit etc.
   * @returns {Promise<string>} resolve hash if successful
   * @memberof Fingate
   */
  @validate
  public async deposit(@isValidJingtumAddress jtAddress: string, @isValidAmount amount: string, @isValidMoacSecret moacSecret: string, options?: ITransactionOption): Promise<string> {
    const value = new BigNumber(amount).toString(10);
    const calldata = await super.callABI("deposit", jtAddress);
    const hash = await this.moac.sendTransactionWithCallData(moacSecret, this.contract.address, value, calldata, options);
    return hash;
  }

  /**
   * deposit erc20 token
   *
   * @param {string} jtAddress jingtum address
   * @param {string} tokenAddress erc20 contract address
   * @param {number} decimals token decimals
   * @param {string} amount amount of deposit
   * @param {string} hash generated by `transfer` api of ERC20
   * @param {string} moacSecret moac secret
   * @param {ITransactionOption} options specify gasPrice, nonce, gasLimit etc.
   * @returns {Promise<string>} reslove hash of transaction if successful
   * @memberof Fingate
   */
  @validate
  public async depositToken(@isValidJingtumAddress jtAddress: string, @isValidMoacAddress tokenAddress: string, decimals: number, @isValidAmount amount: string, @isValidHash hash: string, @isValidMoacSecret moacSecret: string, options?: ITransactionOption): Promise<string> {
    const value = new BigNumber(amount).multipliedBy(10 ** decimals);
    const calldata = await super.callABI("depositToken", jtAddress, tokenAddress, value.toString(10), hash);
    const txHash = await this.moac.sendTransactionWithCallData(moacSecret, this.contract.address, "0", calldata, options);
    return txHash;
  }
}

export default Fingate;
