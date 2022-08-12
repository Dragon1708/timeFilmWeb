import ArticleModel from "../models/Article.js";

export const create= async (req, res) => {
try {
    const doc=new ArticleModel({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        content: req.body.content,
        tags: req.body.tags,
        user: req.userID,
    })
    
    const article= await doc.save()

    res.json(article)
} catch (error) {
    console.error( error)
    res.status(500).json({
        message: "Failed to Create Article(ShitPost Stop ;))",
       
    })
}
}

export const getAll= async (req, res) => {
    try {
      const articles = await ArticleModel.find().populate('User').exec()

      res.json(articles)
    } catch (error) {
        console.error( error)
        res.status(500).json({
            message: "Failed to get Article",
           
        })
    }
    }

    export const remove= async (req, res) => {
        try {
            const articleID=req.params.id
            ArticleModel.findByIdAndDelete({_id:articleID},
                (err, doc) => {
                    if (err) {
                        console.error( err)
                       return res.status(500).json({
                            message: "Failed to delete Article",
                           
                        })
                    }
                    if (!doc) {
                        return   res.status(404).json({
                            message: "Article not found >(",
                           
                        })
                    }
                })
    
          res.json({
            success: true,
          })
        } catch (error) {
            console.error( error)
            res.status(500).json({
                message: "Failed to get Article",
               
            })
        }
        }

    export const getOne= (req, res) => {
        try {
            const articleID=req.params.id
        
          ArticleModel.findOneAndUpdate(
            {
                _id: articleID,
            }, {
                $inc: {viewCount: 1}
            },
            {
                returnDocument: 'after'
            },
            (err, doc) => {
if (err) {
    console.error( err)
   return res.status(500).json({
        message: "Failed to get Article",
       
    })
}
if (!doc) {
    return   res.status(404).json({
        message: "Article not found >(",
       
    })
}
res.json(doc)
            }
          )

        } catch (error) {
            console.error( error)
            res.status(500).json({
                message: "Failed to get Article",
               
            })
        }
        }

export const update=async (req, res) => {
            try {
                const articleID=req.params.id
            
            await  ArticleModel.updateOne(
                {
                    _id: articleID,
                }, {
                    title: req.body.title,
                    imageUrl: req.body.imageUrl,
                    content: req.body.content,
                    tags: req.body.tags,
                    user: req.userID,
                })
                
    res.json({ success: true})
             
            } catch (error) {
                console.error( error)
                res.status(500).json({
                    message: "Failed to UPDATE Article",
                   
                })
            }
            }