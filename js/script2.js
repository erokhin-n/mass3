"use strict"

// ДЕЙСТВИЕ ПОЛЬЗОВАТЕЛЯ

class User_active {
  massage_views(){
    head_views.views_in_head()
    if ( head_views.views_in_head ) head_views.views_head_show()
  }
  close_but(){
    head_views.views_head_hide()
    let h_mass_views = getComputedStyle(header_mass_views)
    let anim_time = Number(h_mass_views.animationDuration.slice(0, -1)) * 1000 
    setTimeout( ()=> head_views.views_head_delete(), anim_time )
    
  }
}

let user_active = new User_active

// ВИДЫ МАССАЖА В ХЕДЕРЕ, ПОКАЗАТЬ/СКРЫТЬ

class Head_views {
  views_in_head() {
    let views = document.querySelectorAll( '.description_heading' )
		for( let i = 0; i < views.length; i++ ){
			let tag = views[i].textContent;
			header_mass_views.insertAdjacentHTML( 'beforeend', `<div class = "hidden hv" id = "hv_${i}">${tag}</div>` )
      }
    return true
	}
  views_head_show() {
    curtain.className = 'cover_curtain'
    let views = document.querySelectorAll( '.hv' )
    for( let i = 0; i < views.length; i++) { 
      header.className = 'header header_blur'
      header_mass_views.className = 'header_massage_views'
      close_but.className = 'head_close'
      views[i].className = 'head_view' 
    }
  }
  views_head_hide() {
    // let views = this.head_view
    header.className = 'header header_no_blur'
    header_mass_views.className = 'head_mass_down'
    return true
   
  }
  views_head_delete() {
    curtain.className = 'hidden'
    let views = document.querySelectorAll( '.head_view' )
    for( let i = 0; i < views.length; i++ ) {
      views[i].remove()
    }
    header_mass_views.className = 'hidden_views' 
  }
}

let head_views = new Head_views





