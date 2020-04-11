import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer aez8K9HRCwLezCWsPKzQdH-BNM0jUKSQ5hzKabmdBiizHhZv7MqIUWlfu4JPBIdd_Ut9bbC_FEaUA5bmhm3s7BuY3tUSAzgYfYLxCbyqEN2d8W5LKHI9Xg2uKv-NXnYx'
    }
})