import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x3e8eE7884BFba0F2Bb856289885790DC6Cedb16D"
);

export default instance;
