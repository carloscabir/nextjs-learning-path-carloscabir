
'use client'

import { useState } from 'react'

const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)} key={id}>
      {liked ? '❤️' : '🖤'}
    </button>
  )
} 

export default LikeButton

/* `
Nose porque estoy escribiendo esto aqui
pero solo quiero decir que los
celos son algo inevitable de sentir,
todos los sentimos y esta bien
Lo que no esta bien es en como respondemos 
ante los demas sobre ellos y lo que hacemos
indirectamente hacia la pareja para 
"que ya no los sienta" otra vez.

existen cosas que implican el socializar 
y reconozco mi error por aveces 
no dejarte hacer eso por "celos"
- que es algo incorrecto - 
y algo que me dejo pensando mucho
Yo no seria capaz de faltarte al respeto, 
por algo estoy contigo y es para vivir contigo.

` */