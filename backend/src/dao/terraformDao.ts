//import { spawnSync } from 'child_process';
const { createWorkspace, setParamTerraformScript } = require('../terraform/terraform-util');

const provisionVM = async (payload) => {
    try {
        await createWorkspace()
        setParamTerraformScript(payload)

    } catch (err) {
        console.error(err);
    }
}

export default {
    provisionVM,
}



