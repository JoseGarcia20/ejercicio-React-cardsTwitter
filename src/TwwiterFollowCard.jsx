import { useState } from "react"

export function TwitterFollowCard ( {children, formatUserName ,userName = 'unknown', initialIsFollowing} ) {
  
  //Variable con dos estados, una es seguir y la otra siguiendo, por defecto empezara en false, 'seguir'
  const [isFollowing, setIsFollowing ] = useState (initialIsFollowing)

  //Al momento de dar click, convierteel valor seguir de true a false o de falsea true
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  
  //estado del boton seguir
  const text = isFollowing ? 'Siguiendo':'Seguir'
  const buttonClassName =  isFollowing ? 'follow-card-button-isFollowing':'follow-card-button'


  const UserImg = `https://unavatar.io/twitter/${userName}`
  //console.log(isFollowing)

  return (
    <article className='follow-card'>
      <header className='follow-card-header'>
        <img className='follow-card-img' src={UserImg} alt="avatar" />

        <div className='follow-card-avatar'>
          <strong>{children}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="follow-card-text">{text}</span>
          <span className="follow-card-stopFollow">Dejar Seguir </span>
        </button>
      </aside>
    </article>
  )
}