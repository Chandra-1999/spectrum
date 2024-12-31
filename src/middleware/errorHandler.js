const axios = require('axios');

module.exports = (err, req, res, next) => {
    console.error(err.stack);

    if (axios.isAxiosError(err)) {
        return res.status(err.response?.status || 500).json({
            message: 'External API error',
            error: err.message
        });
    }

    res.status(500).json({
        message: 'An error occurred while processing data.',
        error: err.message
    });
};
