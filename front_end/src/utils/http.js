import service from './service'

export const get = (url, params) => {
    const config = {
        method: 'get',
        url
    }
    if(params) {
        config.params = params;
    }
    return service(config)
}

export const post = (url, data) => {
    const config = {
        method: 'post',
        url,
        data
    }
    return service(config)
}
