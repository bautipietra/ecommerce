import React, { useRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from 'react-three-fiber'
import { OrbitControls, Stage } from '@react-three/drei'

export default function Sneaker(props) {
  const { nodes, materials } = useGLTF('/shoe.glb')
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ zoom: 1.1 }} >
        <Suspense fallback={null}>
          <Stage shadows>
            <group {...props} dispose={null}>
              <mesh geometry={nodes.Object_2.geometry} material={materials.buffalo} position={[0, 0, 0]} rotation={[0, 0, 0]} />
            </group>
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate></OrbitControls>
      </Canvas>
    </Suspense>
  )
}

useGLTF.preload('/sneaker.gltf')
