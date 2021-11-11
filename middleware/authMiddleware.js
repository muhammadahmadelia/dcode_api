import jwt from 'jsonwebtoken';

const requireAuth = function (req, res, next) {
    const token = req.cookies.jwt;

    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, 'dop coverage', function (err, decodedToken) {
            if (err) {
                console.log(err);
                res.redirect('/login');
                //res.json({status:404, msg:"Unauthorized access", data:[]});
            } else {
                //console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
        //res.json({status:404, msg:"Unauthorized access", data:[]});
    }
}

const maxAge = 5;
const signAccessToken = function (userEmail) {
    return new Promise(function (resolve, reject) {
        const payload = {};
        const secret = 'net ninja secret';
        const options = {
            expiresIn: maxAge,
            issuer: 'com.ahmad.ali',
            audience: userEmail.toString(),
        };

        jwt.sign(payload, secret, options, function (err, token) {
            if (err) {
                console.log(err.message);
                reject({ status: 404, msg: "Unauthorized access", data: [] });
            }
            resolve(token);
        });
    });
}

const signRefreshToken = function (userEmail) {
    return new Promise(function (resolve, reject) {
        const payload = {};
        const secret = 'dop coverage';
        const options = {
            expiresIn: '1y',
            issuer: 'com.dop.coverage',
            audience: userEmail.toString(),
        };

        jwt.sign(payload, secret, options, function (err, token) {
            if (err) {
                console.log(err.message);
                reject({ status: 404, msg: "Unauthorized access", data: [] });
            }
            resolve(token);
        });
    });
}

const verifyRefreshTooken = function (refreshToken) {
    return new Promise(function (resolve, reject) {
        jwt.verify(refreshToken, 'dop coverage', function (err, payload) {
            if (err) {
                console.log(err);
                return reject({ status: 404, msg: "Unauthorized access", data: [] });
            }
            const userID = payload.aud;

            resolve(userID);
        })
    });
}

const checkUser = function (req, res, next) {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'dop coverage', function (err, decodedToken) {
            if (err) {
                console.log(err);
                res.locals.user = null;
            } else {
                console.log(decodedToken);
                var sql = "SELECT * FROM users WHERE id=" + decodedToken.id + "";
                connection.query(sql, async function (err, result) {
                    if (err) {
                        res.locals.user = null;
                        next();
                    } else {
                        let user = await result;
                        //console.log(user);
                        res.locals.user = user;
                        res.locals.user;
                        next();
                    }
                });
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser, verifyRefreshTooken, signRefreshToken, signAccessToken };