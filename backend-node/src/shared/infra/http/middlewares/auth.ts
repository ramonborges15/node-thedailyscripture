import { NextFunction, Request, request, Response, response } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../../../../shared/conf/auth.json";

export default function authInfoRequest (request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        return response.status(401).send({ error: 'Token não fornecido!' });
    }

    const parts = authHeader.split(' ');

    if(!(parts.length === 2)) {
        return response.status(401).send({ error: 'Erro no token!' });
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)) {
        return response.status(401).send({ error: 'Token malformado!' });
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) {
            return response.status(401).send({ error: 'Token inválido!' });
        }

        request.body.userId = decoded.id;

        // console.log("request", request.body);
        
        return next();
    });
};
