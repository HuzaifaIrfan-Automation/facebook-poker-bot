// <div aria-label="Poke Back" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 pq6dq46d p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl n00je7tq arfg74bv qs9ysxi8 k77z8yql l9j0dhe7 abiwlrkh p8dawk7l cbu4d94t taijpn5t k4urcfbm" role="button" tabindex="0">

// <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 kt9q3ron ak7q8e6j isp2s0ed ri5dt5u2 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 d1544ag0 tw6a2znq s1i5eluu tv7at329" style="transform: none;">
// <div class="bp9cbjyn j83agx80 taijpn5t c4xchbtz by2jbhx6 a0jftqn4"><div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 hpfvmrgz bp9cbjyn j83agx80 pfnyh3mw j5wkysh0 hytbnt81

// span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v lrazzd5p bwm1u5wc" dir="auto">
// <span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5">
// Poke Back
// </span>
// </span>
// </div>
// </div>
// <div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 pedkr2u6 hzruof5a pmk7jnqg j9ispegn kr520xx4 akwz6i9j art1omkt ot9fgl3s rnr61an3" data-visualcompletion="ignore"></div></div></div>



   function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

async function auto_facebook_poker(){


console.log('Started Poking')

var running=true

var checked_poking=0;

while(running){




		
	const poke_back_selectors = document.querySelectorAll('div[aria-label="Poke Back"]')
	const poke_selectors = document.querySelectorAll('div[aria-label="Poke"]')


	for(var i=0; i<poke_back_selectors.length; i++){
		var selector = poke_back_selectors[i]
		


	try {
	 

		selector.click()

		} catch (error) {
		console.error(error)

	}



		console.log(`Poked Back ${i}`)
	}

	for(var i=0; i<poke_selectors.length; i++){
		var selector = poke_selectors[i]

		try {
	 
		selector.click()


			} catch (error) {
			console.error(error)

	}



		console.log(`Poked ${i}`)

	}

checked_poking++
console.log(`Checked Pokes Due ${checked_poking} Sleeping for 5 Seconds`)
		await sleep(5000);


}


}

auto_facebook_poker()