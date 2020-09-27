import { spawnSync } from 'child_process';

const provisionVM = () => {
   try {
    // return spawnSync('terraform', ['ls']);
    console.log('Estou aquiiiiiiiiiii !!');
   } catch(err) {
       console.error(err);
    }
}

export default {
    provisionVM,
}



