import jwt from 'jsonwebtoken';
import fs from 'fs';

// Generate new tokens from https://travistidwell.com/jsencrypt/demo/
// Private Key (must read as utf8)
const accessTokenPrivateKey = fs.readFileSync('./middleware/access_token_private.key', 'utf8');
// Public Key (must read as utf8)
const accessTokenPublicKey = fs.readFileSync('./middleware/access_token_public.key', 'utf8');
// Private Key (must read as utf8)
const refreshTokenPrivateKey = fs.readFileSync('./middleware/refresh_token_private.key', 'utf8');
// Public Key (must read as utf8)
const refreshTokenPublicKey = fs.readFileSync('./middleware/refresh_token_public.key', 'utf8');

// Signing value to issuer
const iss = "www.dcode.com";
// Signing value to audience
const aud = "www.dcode.com";
// Signing value to subject
const sub = "www.dcode.com";


// This method is creating access tokens
// saving email of user in payload
// setting this token life time as 10 days
const signAccessToken = (email) => {
    let payload = { email };
    const signInOption = {
        issuer: iss,
        subject: sub,
        audience: aud,
        expiresIn: '10d',
        algorithm: "RS256"
    }
    return jwt.sign(payload, accessTokenPrivateKey, signInOption);
};

// This function is verifying access token
const verifyAccessToken = (req, res, next) => {
    const token = req.cookies.access_token;
    const verifyOption = {
        issuer: iss,
        subject: sub,
        audience: aud,
        maxAge: '10d',
        algorithm: ['RS256']
    }
    if (token) {
        jwt.verify(token, accessTokenPublicKey, verifyOption, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.status(401).json({ 'msg': 'Not authorized to access this route' });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ 'msg': 'Not authorized to access this route' });
    }
}

//This method is creating new refresh tokens like access token with life time of 30 days
const signRefreshToken = (email) => {
    let payload = { email };
    const signInOption = {
        issuer: iss,
        subject: sub,
        audience: aud,
        expiresIn: '30d',
        algorithm: "RS256"
    }
    return jwt.sign(payload, refreshTokenPrivateKey, signInOption);
}

// This method is verifying refresh tokens
const verifyRefreshTooken = (req, res, next) => {
    const refreshToken = req.cookies.refresh_token;
    const verifyOption = {
        issuer: iss,
        subject: sub,
        audience: aud,
        maxAge: '30d',
        algorithm: ['RS256']
    }
    if (refreshToken) {
        jwt.verify(refreshToken, refreshTokenPublicKey, verifyOption, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.status(401).json({ 'msg': 'Not authorized to access this route' });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ 'msg': 'Not authorized to access this route' });
    }
}

// This method will decoding refresh tokens and getting user email from it
const getUserEmail = (token) => {
    let decodedToken = jwt.decode(token, { complete: true })
    return decodedToken.payload['email']
}


export { signAccessToken, verifyAccessToken, signRefreshToken, verifyRefreshTooken, getUserEmail };