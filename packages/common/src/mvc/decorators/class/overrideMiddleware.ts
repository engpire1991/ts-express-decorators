import {OverrideProvider} from "@tsed/di";

/**
 * Override a middleware which is already registered in MiddlewareRegistry.
 *
 * ## Usage
 *
 * ```typescript
 * import {OriginalMiddlware, OverrideMiddleware} from "@tsed/common";
 *
 * @OverrideMiddleware(OriginalMiddlware)
 * export class CustomMiddleware extends OriginalMiddlware {
 *   public use() {
 *
 *   }
 * }
 * ```
 *
 * ### Override examples
 *
 * * [Usage](/docs/middlewares/override-middleware.md)
 * * [Send response](/docs/middlewares/override/send-response.md)
 * * [Authentication](/docs/middlewares/override/authentication.md)
 * * [Response view](/docs/middlewares/override/response-view.md)
 * * [Global error handler](/docs/middlewares/override/global-error-handler.md)
 *
 * @param {Type<any> & IMiddleware} targetMiddleware
 * @returns {Function}
 * @decorators
 */
// tslint:disable-next-line: variable-name
export const OverrideMiddleware = OverrideProvider;
