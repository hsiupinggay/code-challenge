const axios = require('axios');
const { ethers } = require('ethers');
require('dotenv').config();

// replace BNB_API_KEY with own API Key
const { BNB_API_KEY } = process.env;

const listOfAddresses = [
  '0x123d475e13aa54a43a7421d94caa4459da021c77',
  '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
  '0xfe808b079187cc460f47374580f5fb47c82b87a5',
];

const contract = '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c';

const getBalance = (addresses, contractAddress) => {
  addresses.forEach(async (address) => {
    const res = await axios.get(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${BNB_API_KEY}`);
    const { result } = res.data;
    const formatedBalance = ethers.utils.formatEther(result);
    console.log(`${address}  ${formatedBalance}`);
  });
};

getBalance(listOfAddresses, contract);
