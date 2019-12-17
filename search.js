const imgSearch = () => {

	const searcBar = document.getElementsByTagName('input')[0];

	const images = document.getElementsByTagName('main')[0].getElementsByTagName('img');

	searcBar.addEventListener( 'keyup', ()=>{

		let input = searcBar.value.toLowerCase().replace(/ +/g, "");

		Array.from (images).forEach( images =>{

			let id = images.id;

			if ( id.indexOf(input) != -1 ) {

				images.style.display ='block';

				images.style.opacity ='1'

			} else {

				images.style.opacity ='0'		

				setTimeout (  ()=>{ images.style.display ='none'; } , 500 )

			}

		} )

	} )

	const showMore = document.getElementById('show-more');

	const queries = document.getElementById('queries');

	showMore.addEventListener('click', ()=>{

		if (queries.style.display == 'flex') {

			queries.style.display = 'none';
			showMore.style.transform = 'rotate(0deg)';

		} else {

			queries.style.display = 'flex';
			showMore.style.transform = 'rotate(180deg)';

		}

	} )

}

imgSearch(); /* special thanks to The Net Ninja, please visit his youtube channel and subscribe*/