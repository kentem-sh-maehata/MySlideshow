{
  const thumbnails = document.querySelectorAll('.thumbnail')
  const mainImage = document.getElementById('main-image')
  const next = document.getElementById('next')
  const prev = document.getElementById('prev')
  let activeIndex:number = 0

  function updateThumbnail(){
    if(activeIndex === 3)
      activeIndex = 2
    if(activeIndex === -1)
      activeIndex = 0
    thumbnails.forEach((thumbnail)=>{
      thumbnail.classList.remove('active')
    })
    thumbnails[activeIndex].classList.add('active')
    const thumbnail = thumbnails[activeIndex]
    if(mainImage && 'src' in mainImage && 'src' in thumbnail){
      mainImage.src = thumbnail.src
    }
  }

  thumbnails[0]?.addEventListener('click',()=>{
    if(mainImage && 'src' in mainImage && 'src' in thumbnails[0])
      mainImage.src = thumbnails[0].src
    
    thumbnails[0].classList.add('active')
    thumbnails[1].classList.remove('active')
    thumbnails[2].classList.remove('active')
  })
  thumbnails[1]?.addEventListener('click',()=>{
    if(mainImage && 'src' in mainImage && 'src' in thumbnails[1])
      mainImage.src = thumbnails[1].src
    
    thumbnails[0].classList.remove('active')
    thumbnails[1].classList.add('active')
    thumbnails[2].classList.remove('active')
  })
  thumbnails[2]?.addEventListener('click',()=>{
    if(mainImage && 'src' in mainImage && 'src' in thumbnails[2])
      mainImage.src = thumbnails[2].src
    
    thumbnails[0].classList.remove('active')
    thumbnails[1].classList.remove('active')
    thumbnails[2].classList.add('active')
  })

  next?.addEventListener('click',()=>{
    activeIndex ++
    updateThumbnail()
  })
  prev?.addEventListener('click',()=>{
    activeIndex --
    updateThumbnail()
  })
}