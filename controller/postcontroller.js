const article = require(`../model/Article`)
const getHomepage =(req, res ) => {
article.find()
.then((result) => res.render(`index`,  {articles: result}))
.catch(err => console.log(err)) 
}




const getAddNew =(req, res ) => {
    article.find()
    // .sort({created_at :-1})
    .then((err) => res.render(`addNew`,{err:err.errors}))
    .catch(err => console.log(err))
}


const createArticle = (req, res )=> {
    const newArticle = new article(req.body)
    newArticle.save()
    .then(() => res.redirect(`/`))
    .catch(err => res.render(`addNew`,{err:err.errors}))
}




const getFullArticle = (req, res) => {
    article.findById(req.params.id)
    .then((result) =>  res.render(`fullArticle`, {article: result} ))
    .catch(err =>  console.log(err))
}


const deleteArticle = (req , res ) => {
    article.findByIdAndDelete (req.params.id)
    .then (() =>res.redirect(`/`))
    .catch(err => console.log(err))
}

const getUpdatepage = (req,res)=>{
    article.findById(req.params.id)
    .then ((result) => res.redirect(`edit`,{post: result}))
    .catch(err => console.log(err))

}
const editArticle = (req,res)=>{
    article.findByIdAndUpdate(req.params.id, req.body)
    .then ((articleId) => res.redirect(`/fullArticle/${articleId._id}` ))
    .catch(err => console.log(err))

}












module.exports = {
    getHomepage,
    getAddNew,
    createArticle,
    getFullArticle,
    deleteArticle,
    getUpdatepage,
    editArticle
}