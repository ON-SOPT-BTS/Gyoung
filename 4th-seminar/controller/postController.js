const { Post, User, Like } = require('../models') ;
const ut = require('../modules/util');
const sc = require('../modules/statusCode');
const rm  = require('../modules/responseMessage');

module.exports = {
    // body : title, contents, userId
    createPost : async (req, res) => {
        try {

            const { title, contents, userId } = req.body;
            const user = await User.findOne({id : userId});
            const postImageUrl = req.file.location;
            const post = await Post.create({title, contents, UserId : userId, postImageUrl});

            console.log(user);
            console.log(post);
            await user.addPost(post);

            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_POST_SUCCESS, post));
        } catch (err) {
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
        }
    },
    readPosts : async (req, res) => {
        try {
            const posts = await Post.findAll({ include : [{
                model : User,
                attributes : ['email', 'userName']
            },
            {
                model : User,
                as : 'Liker',
                attributes : { exclude : ['password', 'salt']}
            }]});
            return res.status(sc.OK).send(ut.success(sc.OK, '전체 게시글 조회 성공', posts));
        } catch (err) {
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, '전체 게시글 조회 실패'));
        }
    },
    // 게시글에 좋아요
    createLike : async (req, res) => {
        const PostId = parseInt(req.params.postId);
        const UserId = parseInt(req.body.userId);
        try {
            const like = await Like.create({UserId, PostId});
            return res.status(sc.OK).send(ut.success(sc.OK, '게시글 좋아요 성공', like));
        } catch (err) {
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, '게시글 좋아요 실패'));
        }
    },
    // 게시글 좋아요 취소
    redoLike : async (req, res) => {
        const PostId = req.params.postId;
        const UserId = req.body.userId;
        try {
            const deleted_count = await Like.destroy({
                where : {UserId, PostId}});
            if (deleted_count > 0){
                return res.status(sc.OK).send(ut.success(sc.OK, rm.DELETE_LIKE_SUCCESS));
            } else {
                return res.status(sc.NOT_FOUND).send(ut.fail(sc.NOT_FOUND, rm.DELETE_LIKE_FAIL));
            }
        } catch (err) {
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.DELETE_LIKE_FAIL));
        }
    },
}