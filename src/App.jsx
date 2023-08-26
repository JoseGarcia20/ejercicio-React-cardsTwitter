import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwwiterFollowCard'

  //REENDERIZAR LISTA DE USUARIOS
  const users = [
    {
      userName: 'JoseGar014',
      name: 'Jose Jesus Garcia',
      isFollowing: true
    },
    {
      userName: 'MariaFer43',
      name: 'Maria Fernanda Pinzon',
      isFollowing: true
    },
    {
      userName: 'Herrso32',
      name: 'Herson Navarro',
      isFollowing: false
    },
    {
      userName: 'Sebastianhhg5',
      name: 'Sebastian Garcia',
      isFollowing: true
    }
  ]

export function App () {
  
  //Funcion para asignar el @ al usuario
  //Se pueden enviar funciones de la siguiente manera como props "Parametros"
  const formatUserName = (userName) => `@${userName}`

  //Las props se pueden pasar como objeto o variable por variable
  //Como objeto:
  // const JoseGar = {formatUserName:formatUserName, userName:'JoseGar014', initialIsFollowing: (true) }

  return (
    //Se puede poner react.fragment o vacio
    <section className='app'>
      {
        users.map(user => {
          const {userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              key={userName}
              formatUserName={formatUserName}
              initialIsFollowing={isFollowing}
              userName={userName}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}