const slider =  () => {

	const next = document.getElementById ('next');
	const prev = document.getElementById ('prev');
	const slider = document.getElementsByTagName ('header')[0];
	const wrap = document.getElementById('circle-wrap');
	let counter = 0;

	const createCircles = () => {

		const circle = document.createElement('div');

		circle.classList.add("circle");

		wrap.appendChild(circle);

	}

	const imageCount = slider.childElementCount;


	for (let i = 0; i < imageCount; i++ ) {

		 createCircles();

	}


	wrap.children[ 0 ].classList.add("circle-focus");


		next.addEventListener ('click', () => {

			const limit = slider.children.length  * 100 - 100;

			if (counter !== limit) {

				counter += 100;

				wrap.children[ counter / 100 ].classList.add("circle-focus");

				wrap.children[ counter / 100 - 1 ].classList.remove("circle-focus");

			} else {
		
				counter = 0;

				wrap.children[ counter / 100 ].classList.add("circle-focus");

				wrap.children[ limit / 100 ].classList.remove("circle-focus");

			};

			if (counter == 0) {

				prev.style.display = 'none'

			} else {

				prev.style.display = 'block'

			};

			let move = counter + 'vw';

			slider.style.transform = 'translateX(-' + move  + ')';


		} );


		prev.addEventListener ('click', () => {

			counter -= 100;

			if (counter == 0) {

				prev.style.display = 'none'

			} else {

				prev.style.display = 'block'

			};

			let move = counter + 'vw';

			slider.style.transform = 'translateX(-' + move + ')';

			wrap.children[ counter / 100 ].classList.add("circle-focus");

			wrap.children[ counter / 100 + 1 ].classList.remove("circle-focus");

		} );

}



const search = () => {

	
	
}




slider ();

