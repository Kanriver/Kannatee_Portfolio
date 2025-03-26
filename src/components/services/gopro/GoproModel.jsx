import React from 'react'
import { useGLTF } from '@react-three/drei'

export function GoproModel(props) {
  const { nodes, materials } = useGLTF('\gopro.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Plane_0.geometry} material={materials['Material.001']} position={[-1.209, 3.019, -1.479]} scale={[1, 1.088, 1]} />
        <mesh geometry={nodes.Circle_0.geometry} material={materials.Root} position={[-0.64, 2.604, -1.208]} rotation={[Math.PI / 2, 0, 0]} scale={0.506} />
        <mesh geometry={nodes.Plane001_0.geometry} material={materials.GLASS} position={[-1.209, 3.019, -1.479]} scale={[1, 1.088, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/gopro.glb')
