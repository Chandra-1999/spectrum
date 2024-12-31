const dataService = require('../services/dataService');

class DataController {
    async processData(req, res, next) {
        try {
            const result = await dataService.processAndPostData();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new DataController();
