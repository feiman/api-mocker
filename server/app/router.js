module.exports = app => {
    // api
    app.get('/', 'home.index');
    app.get('/server/group', 'group.getAll')
    app.post('/server/group', 'group.create')
    app.delete('/server/group/:id', 'group.delete')

    app.get('/server/api/', 'api.getAll')
    app.get('/server/api/:groupId', 'api.getAll')
    app.get('/server/api/:groupId/:apiId', 'api.getApi')
    app.post('/server/api/:groupId', 'api.createApi')
    app.put('/server/api/:groupId/:apiId', 'api.modifyApi')
    app.delete('/server/api/:groupId/:apiId', 'api.delete')

    // mock data
    app.get('/client/:id', 'client.show')
    app.post('/client/:id', 'client.create')
    app.put('/client/:id', 'client.put')
    app.delete('/client/:id', 'client.delete')

    app.post('/client/real', 'client.real')

    // user
    app.post('/server/user', 'user.create')
}
