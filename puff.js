const puff = () => {

	const label = document.getElementsByTagName('label')[0];
	const images = document.getElementsByTagName('main')[0].getElementsByTagName('img');
	const watch = document.getElementById('watch');

	watch.addEventListener('click', ()=>{

		Array.from (images).forEach( (images, i) =>{
				setTimeout( ()=>{

						images.style.opacity='1';
						
				}, i*700 )
				
			})

		watch.style.opacity ='0';

		setTimeout( ()=>{
		watch.style.display='none'; 
		label.style.display='flex'
		}, 500 );

		setTimeout( ()=>{label.style.opacity='1'}, 1000 );


	})

	

}

puff();