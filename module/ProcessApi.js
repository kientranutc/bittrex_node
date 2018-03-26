class ProcessApi {
    constructor(url, request) {
        this.url = url;
        this.request = request;
    }
    getApi() {
        return new Promise((resolve, reject) => {
            this.request({ url: this.url, json: true }, function(err, res, json) {
                if (!err && res.statusCode == 200) {
                    return resolve(json);
                } else {
                    return resolve('no data to show');
                }
            });
        });
    }
}
module.exports = ProcessApi;