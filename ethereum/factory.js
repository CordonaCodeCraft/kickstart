import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x856246Df10EE6fdFe7c7143B9B39A7507f207d61'
);

export default instance;
