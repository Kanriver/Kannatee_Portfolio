import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ArduinoModel(props) {
  const { nodes, materials } = useGLTF('/arduino.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-6.005, 5.132, 12.455]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Arduino_Blue2_FiberGlass_0.geometry} material={materials.FiberGlass} />
        <mesh geometry={nodes.Arduino_Blue2_Metal_0.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Arduino_Blue2_Back_0.geometry} material={materials.Back} />
        <mesh geometry={nodes.Arduino_Blue2_LED_0.geometry} material={materials.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/arduino.glb')
