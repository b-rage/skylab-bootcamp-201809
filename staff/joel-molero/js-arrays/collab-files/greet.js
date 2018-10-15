function greet(name, salutation) {
	if (typeof name !== 'string') throw Error('name is not a string');

	if (!name.length) throw Error('name is empty');

	if (!name.trim()) throw Error('name is blank');

	if (typeof salutation !== 'undefined') {
		if (typeof salutation !== 'string') throw Error('salutation is not a string');
		
		if (!salutation.length) throw Error('salutation is empty');

		if (!salutation.trim()) throw Error('salutation is blank');
	}

	console.log((salutation? salutation: 'hi') + ' ' + name);
}