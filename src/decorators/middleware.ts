import MiddlewareService from "../services/middleware";

export function Middleware(): Function {

    return (target: any): void => {

        MiddlewareService.set(target, 'middleware');

        return target;
    };
}