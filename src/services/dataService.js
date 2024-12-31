const axios = require('axios');
const config = require('../config/config');

class DataService {
    async fetchData() {
        const response = await axios.get(config.urls.fetchData);
        return response.data;
    }

    async filterAndTransformData(data) {
        const filteredData = data.data.resultSet.filter(item => 
            item.status === 'Available'
        );

        return filteredData.map(item => ({
            StationName: item.station.name,
            CRSCode: item.station.crsCode,
            SensorId: item.sensorId
        }));
    }

    async postProcessedData(transformedData) {
        const requestBody = { LiftData: transformedData };
        const response = await axios.post(config.urls.postData, requestBody);
        return response.data;
    }

    async processAndPostData() {
        const rawData = await this.fetchData();
        const transformedData = await this.filterAndTransformData(rawData);
        const result = await this.postProcessedData(transformedData);
        
        return {
            message: 'Data processed successfully.',
            postResponse: result
        };
    }
}

module.exports = new DataService();
