const config = {
    urls: {
        fetchData: 'https://data-collection-fbn6t4.5sc6y6-1.usa-e2.cloudhub.io/api/fetchData?operationalStatus=Operational&customerFacingFlag=true&inCommissionFlag=true',
        postData: 'https://data-collection-fbn6t4.5sc6y6-1.usa-e2.cloudhub.io/api/createAlert'
    },
    api: {
        timeout: 30000, // 30 seconds
        retries: 3
    },
    rateLimits: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        maxRequests: 100
    }
};

module.exports = config;
