export const serializeSearchParam = (params, fields = []) => {
	
	if (params.hasOwnProperty('search')) {
		
		const { search } = params;
		delete params.search;
		
		const where = {};
		fields.forEach(field => {
			where[field] = {
				contains: search
			}
		})
		params.where = JSON.stringify(where);
	}

	return params
}