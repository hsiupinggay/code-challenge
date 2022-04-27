import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  `https://api.bscscan.com/api?module=account&action=balance&address=0x70F657164e5b75689b64B7fd1fA275F334f28e18&apikey=${BNB_API_KEY}`
);
