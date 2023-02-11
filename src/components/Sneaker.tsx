import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Sneaker(props: any) {
  const { nodes, materials } = useGLTF('/shoe.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.buffalo} position={[0, 0, 0]} rotation={[0, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/sneaker.gltf')
