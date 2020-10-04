

const util = require('util');
const exec = util.promisify(require('child_process').exec);



async function terraformInit() {
    const { stdout, stderr } = await exec('terraform apply -auto-approve');
    console.log(stdout);
    console.log(stderr);
}

terraformInit();