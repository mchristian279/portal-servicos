const {
    promises: fsPromises,
    constants: {
        COPYFILE_EXCL
    }
} = require('fs');

const fs = require('fs');

const createWorkspace = async () => {
    return fsPromises.copyFile('/home/mreis/Vue/portal-servicos/backend/src/terraform/workspace-terraform-deploy/template.tf', '/home/mreis/Vue/portal-servicos/backend/src/terraform/workspace-terraform-deploy/template-temp.tf')
        .then(function () { console.log('template.tf was copied to template-temp.txt') })
        .catch(function (error) { console.log('The file could not be copied', error) });
}

const setParamTerraformScript = (payload) => {

    const file = '/home/mreis/Vue/portal-servicos/backend/src/terraform/workspace-terraform-deploy/template-temp.tf';

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data;

        Object.entries(payload).forEach(([key, value]) => {
            const regex = new RegExp(key + "-replace", "g");
            result = result.replace(regex, value);
        });

        Object.entries(payload.network).forEach(([key, value]) => {
            const regex = new RegExp("network-" + key + "-replace", "g");
            result = result.replace(regex, value);
        });

        fs.writeFile(file, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });


}

exports.setParamTerraformScript = setParamTerraformScript
exports.createWorkspace = createWorkspace

// fs.mkdir('./workspace-terraform-deploy', (err) => {
//     if (err) throw err;
//     console.log('successfully created workspace-terraform-deploy');
// })

// fs.writeFile('teste.tf', 'Hello World!', function (err) {
//     if (err) return console.log(err);
//     console.log('Hello World written');
// });

// const file = 'teste.tf'

// const payloadMock = {
//     instance: "3",
//     network: "123.456.789.12"
// }

// const paramsTerraformTemplate = {

// }

// fs.readFile(file, 'utf8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     var result = data.replace(/instancereplace/g, payloadMock.instance);


//     fs.writeFile(file, result, 'utf8', function (err) {
//         if (err) return console.log(err);
//     });
// });