const express = require('express');
const { engine } = require('express-edge');
const edge = require('edge.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const connectFlash = require('connect-flash');


const createPostController = require('./controllers/createPost');
const blogPostController = require('./controllers/blogPost');
const homePageController = require('./controllers/homePage');
const galleryController = require('./controllers/gallery');
const loginController = require('./controllers/login');
const signupController = require('./controllers/signup');
const aboutController = require('./controllers/about');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getpost');
const storeUserController = require('./controllers/storeUser');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout')
const storeContactController = require('./controllers/storeContact');
const commentController = require('./controllers/comment');
const newEventController = require('./controllers/newEvent');
const storeEventController = require('./controllers/storeEvent');
const dashboardController = require('./controllers/admindasboard')



const app = new express();
mongoose.connect('mongodb://localhost/myPersonalWebsite');

app.use(connectFlash())
const mongoStore = connectMongo(expressSession);

app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))


app.use(express.static('public'))
app.use('/uploads', express.static('uploads'));
app.use(engine)
app.set('views', `${__dirname}/views`)
app.use('*', (req, res, next) => {
    edge.global('auth', req.session.userId)
    next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload({
    currentParentPath: true
}))

const storePost = require('./middleware/storePost');
const auth = require('./middleware/auth');
const redirectIfAuthenticated = require('./middleware/redirectIfAuth');
//const test = require('./middleware/test');
const contactEmail = require('./middleware/contactemail');

app.get('/', homePageController);
app.get('/about', aboutController);
app.get('/gallery', galleryController);
app.get('/blogpost', blogPostController);
app.get('/blogpost/post/:id', getPostController);
app.get('/posts/new', auth, createPostController);
app.post('/posts/store', auth, storePost, storePostController);
app.get('/gallery/new', newEventController)
app.get('/auth/login', redirectIfAuthenticated, loginController);
app.get('/auth/logout',auth, logoutController)
app.get('/auth/signup', redirectIfAuthenticated, signupController);
app.post('/users/signup', redirectIfAuthenticated, storeUserController);
app.post('/users/login', redirectIfAuthenticated, loginUserController);
app.post('/users/contact', contactEmail, storeContactController);
app.post('/users/comment', auth, commentController);
app.post('/gallery/store', storeEventController)
app.get('/dashboard', dashboardController)


app.use((req, res) => res.render('not-found'));

app.listen(4000, () =>  {
    console.log('App is listening on port 4000')
})