const lighthbox=document.createElement('div')
lighthbox.id='lightbox'
document.body.appendChild(lighthbox)

const images=document.querySelectorAll('img');
images.forEach(image=>{
	image.addEventListener('click',e=>{
		lighthbox.classList.add('active')
		const img=document.createElement('img')
		img.src=image.src
		while(lighthbox.firstChild){
			lighthbox.removeChild(lightbox.firstChild)
		}
		lighthbox.appendChild(img)
	})
})
lighthbox.addEventListener('click',e=>{
	if(e.target!==e.currentTarget)return
	lighthbox.classList.remove('active')
})