import { SuiMaster } from 'suidouble';
import config from './config.js';
import Miner from './includes/Miner.js';

const run = async()=>{
    const phrase = config.phrase;
    const chain = config.chain;

    const suiMaster = new SuiMaster({client: chain, phrase: phrase, debug: true});

    const miner = new Miner({
        suiMaster,
        packageId: config.packageId,
        blockStoreId: config.blockStoreId,
        treasuryId: config.treasuryId,
    });

    let i = 0;
    let balance = null;

    while (true) {
        await miner.mine();
        i = i + 1;
        // balance = await miner.getBTCBalance();
        // console.log('BTC balance: ', balance);

        // await miner.printAdjustDifficultyEvents();
    }
};

run()
    .then(()=>{
        console.error('done');
    });