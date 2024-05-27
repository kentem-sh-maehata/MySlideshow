{
  const thumbnails = document.querySelectorAll('.thumbnail')
  const mainImage = document.getElementById('main-image')

  

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
}