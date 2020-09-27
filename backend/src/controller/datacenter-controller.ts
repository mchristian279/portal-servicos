import terraform from '../dao/terraform';


export function datacenterController(app) {

    app.post('/datacenters', function (req, res) {
        terraform.provisionVM();
        res.send('OK')
    });

}