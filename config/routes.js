const express = require(`express`)
const routes = express.Router()
const articlefun = require(`../controller/postcontroller`)
routes.get (`/`, articlefun.getHomepage);
routes.get(`/addNew`, articlefun.getAddNew)


routes.post(`/add-new`, articlefun.createArticle)

routes.get(`/fullArticle/:id`, articlefun.getFullArticle)

routes.post(`/delete-article/:id`, articlefun.deleteArticle)

routes.get(`/update-article/:id`, articlefun.getUpdatepage)

routes.post(`/updateArticle/:id`, articlefun.editArticle)

module.exports = routes