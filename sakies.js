function loadRecord(){
	let domain = $('#domain').val()
	var request = $.ajax({
		url: "https://api.vk.com/method/wall.get",
		method: "GET",
		data: {domain: domain, count: 5, v: 5.131,
			access_token: '52b898c5d1894faae630601820b160dddaa064fcd2829ede1b3e46c7b09ff825255180550d533d0c2660e'
			},
		dataType: "jsonp"
	});
	
	request.done(function( msg ){
		showRecords( msg['response']['items'] );
	});
	request.fail(function( jqXHR, textStatus ){
		console.log( "Request failed: " + textStatus );
	});
}

function showRecords(records){
	let info = $('#info')
	for (let i = 0; i <records.length; i++){
		
		let header = $('<div class="header">'+records[i].date+'</div>')
		
		let text = $('<div class="text">'+records[i].text+'</div>')
		
		let footer = $('<div class="footer">LIKE'+records[i].likes['count']+'</div>')
		
		
		let div = $('<div class="mes"></div>')
		
		div.append(header).append(text).append(footer)
		info.append(div)
	}
}