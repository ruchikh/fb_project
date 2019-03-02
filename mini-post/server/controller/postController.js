const Article = require('../models/Article');
const Comment = require('../models/Comment');
const User = require('../models/User');
const passport = require('passport')



module.exports = {
	
	createPost: (req, res) => {
		const postDetail = req.body;
		console.log(postDetail);
		const newPost = new Article({
			title: postDetail.title,
			description: postDetail.description
		})

			newPost.save((err, data) => {
				if(err){
					res.send(err)
				}else{
					res.json({data})
				}
			})
	},

	getAllArticle: (req, res) => {
		const postId = req.params.id;
		Article.find({}, (err, data) => {
			if(err){
				ers.send(err)
			}else{
				res.json(data)
			}
		})
	},

	getSingleArticle: (req, res) => {
		const postId = req.params.id;
		Article.findById(postId, (err, data) => {
			if(err){
				res.send(err)
			}else{
				res.json(data)
			}
		})
	},

	deletePost: (req, res) => {
		const postId = req.params.id;
		Article.deleteOne({_id:postId}, (err,data) => {
			if(err){
				ers.send(err)
			}else{
				Article.find({}, (err, data) => {
					if(err){
						res.send(err)
					}else{
						res.json(data)
					}
				})
			}
		})
	},

	addComment: (req, res) =>{
		console.log(req.body)
		var newComment = new Comment({
			value: req.body.value
		})

		newComment.save((err, data) => {
			if(err){
				res.send(err)
			}else{
				res.json({data})
			}
		})
	},

	getAllComment: (req, res) => {
		Comment.find({_id:postId}, (err, data) => {
			console.log(data)
			if(err) res.send(err)
				res.json(data)
		})
	},

	createUser: (req, res) => {
		User.find({username: req.body.username}, (err, user) => {
			if(err) res.send(err)
				if(!user.length){
					var newUser = new User({
					username: req.body.username,
					email: req.body.email,
					password: req.body.password
		})

				newUser.save((err, data) => {
					if(err) res.send(err);
					res.json(data)
				})
				} else res.send({message:"user already exist"})
		})
	
	},

  loginUser: (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { 
        return res.status(404).json({
          msg: 'Invalid Username or Password'
        }) 
      }
      req.login(user, function(err) {
        if (err) {
         return next(err); 
       }
        return res.status(200).json({
          user 
        })
      });
    })(req, res, next);
  },


	isLoggedIn : (req, res) => {
	  if(req.user) {
	    User.findOne({_id : req.user._id}, (err, data) => {
	      if(data) {
	        res.json({
	          user : data
	        })
	      } else {
	        res.status(404).json({
	          msg : "Please Sign Up. You are not logged in."
	        })
	      }
	    })
	  }
	},

	loggedOut: (req, res) => {
		console.log("logout")
		req.session.destroy();
		res.status(200).json({
			msg: "Session is removed"
		})
	}

}

//error boundary 
//higher order component