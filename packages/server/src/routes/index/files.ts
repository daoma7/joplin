import { SubPath, Route } from '../../utils/routeUtils';
import { AppContext } from '../../utils/types';
import { contextSessionId } from '../../utils/requestUtils';
import { ErrorMethodNotAllowed } from '../../utils/errors';
import { makeFilePagination } from '../../controllers/index/FileController';

const route: Route = {

	exec: async function(path: SubPath, ctx: AppContext) {
		const sessionId = contextSessionId(ctx);

		if (ctx.method === 'GET') {
			return ctx.controllers.indexFiles().getIndex(sessionId, path.id, makeFilePagination(ctx.query));
		}

		throw new ErrorMethodNotAllowed();
	},

};

export default route;
