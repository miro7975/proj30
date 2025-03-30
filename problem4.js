function firstLastOccurrences(archive, record){
	
	let occurrences = [];
	
	for(let i = 0; i < archive.length; i++){
		if(archive[i] === record){
			occurrences.push(i);
		}
	}
	
	if(occurrences.length === 0){
		console.log('Record not found');
	}
	else{
		console.log( 'First occurrence: ' + occurrences[0]);
		console.log( 'Last occurrence: ' + occurrences[occurrences.length - 1]);
	}
}