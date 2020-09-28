import terraform from '../dao/terraformDao';


export function datacenterController(app) {

    app.post('/datacenters', function (req, res) {
        terraform.provisionVM(req.body);
        res.send('OK')
    });

}