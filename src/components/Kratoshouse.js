/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/kratoshouse.glb')
  // const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="平面005" position={[5.31, 0.29, 1.72]} />
        <group name="圓柱體" position={[-8.43, 1.42, -8.02]}>
          <mesh name="圓柱體_1" geometry={nodes.圓柱體_1.geometry} material={materials['材質.001']} />
          <mesh name="圓柱體_2" geometry={nodes.圓柱體_2.geometry} material={materials['材質.006']} />
        </group>
        <group name="圓柱體001" position={[-3.86, 1.42, -13.14]}>
          <mesh name="圓柱體_1" geometry={nodes.圓柱體_1.geometry} material={materials['材質.001']} />
          <mesh name="圓柱體_2" geometry={nodes.圓柱體_2.geometry} material={materials['材質.006']} />
        </group>
        <group name="圓柱體002" position={[2.07, 1.42, -13.54]}>
          <mesh name="圓柱體_1" geometry={nodes.圓柱體_1.geometry} material={materials['材質.001']} />
          <mesh name="圓柱體_2" geometry={nodes.圓柱體_2.geometry} material={materials['材質.006']} />
        </group>
        <group name="圓柱體003" position={[7.66, 1.42, -13.14]}>
          <mesh name="圓柱體_1" geometry={nodes.圓柱體_1.geometry} material={materials['材質.001']} />
          <mesh name="圓柱體_2" geometry={nodes.圓柱體_2.geometry} material={materials['材質.006']} />
        </group>
        <group name="圓柱體004" position={[13.28, 1.42, -10.16]}>
          <mesh name="圓柱體_1" geometry={nodes.圓柱體_1.geometry} material={materials['材質.001']} />
          <mesh name="圓柱體_2" geometry={nodes.圓柱體_2.geometry} material={materials['材質.006']} />
        </group>
        <group name="圓柱體005" position={[14.13, 1.42, -4.87]}>
          <mesh name="圓柱體_1" geometry={nodes.圓柱體_1.geometry} material={materials['材質.001']} />
          <mesh name="圓柱體_2" geometry={nodes.圓柱體_2.geometry} material={materials['材質.006']} />
        </group>
        <group name="圓柱體360" position={[13.41, 1.42, 0.1]}>
          <mesh name="圓柱體_1" geometry={nodes.圓柱體_1.geometry} material={materials['材質.001']} />
          <mesh name="圓柱體_2" geometry={nodes.圓柱體_2.geometry} material={materials['材質.006']} />
        </group>
        <group name="圓柱體361" position={[12.54, 1.42, 5.91]}>
          <mesh name="圓柱體_1" geometry={nodes.圓柱體_1.geometry} material={materials['材質.001']} />
          <mesh name="圓柱體_2" geometry={nodes.圓柱體_2.geometry} material={materials['材質.006']} />
        </group>
        <group name="圓柱體362" position={[10.83, 1.42, 10.93]}>
          <mesh name="圓柱體_1" geometry={nodes.圓柱體_1.geometry} material={materials['材質.001']} />
          <mesh name="圓柱體_2" geometry={nodes.圓柱體_2.geometry} material={materials['材質.006']} />
        </group>
        <group name="圓柱體363" position={[5.95, 1.42, 12.64]}>
          <mesh name="圓柱體_1" geometry={nodes.圓柱體_1.geometry} material={materials['材質.001']} />
          <mesh name="圓柱體_2" geometry={nodes.圓柱體_2.geometry} material={materials['材質.006']} />
        </group>
        <mesh name="Ico_球體002" geometry={nodes.Ico_球體002.geometry} material={materials['材質.002']} position={[-9.34, 0.81, -10.31]} scale={1.05} />
        <mesh name="Ico_球體004" geometry={nodes.Ico_球體004.geometry} material={materials['材質.002']} position={[7.41, 0.81, 8.47]} rotation={[0, -0.97, 0]} scale={1.05} />
        <mesh name="Ico_球體003" geometry={nodes.Ico_球體003.geometry} material={materials['材質.002']} position={[-9.34, 0.81, -10.31]} scale={1.05} />
        <mesh name="Ico_球體001" geometry={nodes.Ico_球體001.geometry} material={materials['材質.002']} position={[-9.34, 0.81, -10.31]} scale={1.05} />
        <mesh name="Ico_球體" geometry={nodes.Ico_球體.geometry} material={materials['材質.002']} position={[-9.34, 0.81, -10.31]} scale={1.05} />
        <mesh name="圓柱體359" geometry={nodes.圓柱體359.geometry} material={materials['材質.006']} position={[-5.64, 0.57, -5.65]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="貝茲曲線097" geometry={nodes.貝茲曲線097.geometry} material={materials.材質} position={[1.79, 0.41, -1.24]} scale={1.02} />
        <mesh name="貝茲曲線096" geometry={nodes.貝茲曲線096.geometry} material={materials['材質.007']} position={[1.79, 0.41, -1.24]} />
        <mesh name="圓柱體266" geometry={nodes.圓柱體266.geometry} material={materials['材質.003']} position={[0.69, 1, 14.13]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線" geometry={nodes.貝茲曲線.geometry} material={nodes.貝茲曲線.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線001" geometry={nodes.貝茲曲線001.geometry} material={nodes.貝茲曲線001.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線002" geometry={nodes.貝茲曲線002.geometry} material={nodes.貝茲曲線002.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線003" geometry={nodes.貝茲曲線003.geometry} material={nodes.貝茲曲線003.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線004" geometry={nodes.貝茲曲線004.geometry} material={nodes.貝茲曲線004.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線005" geometry={nodes.貝茲曲線005.geometry} material={nodes.貝茲曲線005.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線006" geometry={nodes.貝茲曲線006.geometry} material={nodes.貝茲曲線006.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線007" geometry={nodes.貝茲曲線007.geometry} material={nodes.貝茲曲線007.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線008" geometry={nodes.貝茲曲線008.geometry} material={nodes.貝茲曲線008.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線009" geometry={nodes.貝茲曲線009.geometry} material={nodes.貝茲曲線009.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線010" geometry={nodes.貝茲曲線010.geometry} material={nodes.貝茲曲線010.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線011" geometry={nodes.貝茲曲線011.geometry} material={nodes.貝茲曲線011.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線012" geometry={nodes.貝茲曲線012.geometry} material={nodes.貝茲曲線012.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線013" geometry={nodes.貝茲曲線013.geometry} material={nodes.貝茲曲線013.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線014" geometry={nodes.貝茲曲線014.geometry} material={nodes.貝茲曲線014.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線015" geometry={nodes.貝茲曲線015.geometry} material={nodes.貝茲曲線015.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線016" geometry={nodes.貝茲曲線016.geometry} material={nodes.貝茲曲線016.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線017" geometry={nodes.貝茲曲線017.geometry} material={nodes.貝茲曲線017.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線018" geometry={nodes.貝茲曲線018.geometry} material={nodes.貝茲曲線018.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線019" geometry={nodes.貝茲曲線019.geometry} material={nodes.貝茲曲線019.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線020" geometry={nodes.貝茲曲線020.geometry} material={nodes.貝茲曲線020.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線021" geometry={nodes.貝茲曲線021.geometry} material={nodes.貝茲曲線021.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線022" geometry={nodes.貝茲曲線022.geometry} material={nodes.貝茲曲線022.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線023" geometry={nodes.貝茲曲線023.geometry} material={nodes.貝茲曲線023.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線024" geometry={nodes.貝茲曲線024.geometry} material={nodes.貝茲曲線024.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線025" geometry={nodes.貝茲曲線025.geometry} material={nodes.貝茲曲線025.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線026" geometry={nodes.貝茲曲線026.geometry} material={nodes.貝茲曲線026.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線027" geometry={nodes.貝茲曲線027.geometry} material={nodes.貝茲曲線027.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線028" geometry={nodes.貝茲曲線028.geometry} material={nodes.貝茲曲線028.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線029" geometry={nodes.貝茲曲線029.geometry} material={nodes.貝茲曲線029.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線030" geometry={nodes.貝茲曲線030.geometry} material={nodes.貝茲曲線030.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線031" geometry={nodes.貝茲曲線031.geometry} material={nodes.貝茲曲線031.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線032" geometry={nodes.貝茲曲線032.geometry} material={nodes.貝茲曲線032.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線033" geometry={nodes.貝茲曲線033.geometry} material={nodes.貝茲曲線033.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線034" geometry={nodes.貝茲曲線034.geometry} material={nodes.貝茲曲線034.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線035" geometry={nodes.貝茲曲線035.geometry} material={nodes.貝茲曲線035.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線036" geometry={nodes.貝茲曲線036.geometry} material={nodes.貝茲曲線036.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線037" geometry={nodes.貝茲曲線037.geometry} material={nodes.貝茲曲線037.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線038" geometry={nodes.貝茲曲線038.geometry} material={nodes.貝茲曲線038.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線039" geometry={nodes.貝茲曲線039.geometry} material={nodes.貝茲曲線039.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線040" geometry={nodes.貝茲曲線040.geometry} material={nodes.貝茲曲線040.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線041" geometry={nodes.貝茲曲線041.geometry} material={nodes.貝茲曲線041.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線042" geometry={nodes.貝茲曲線042.geometry} material={nodes.貝茲曲線042.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線043" geometry={nodes.貝茲曲線043.geometry} material={nodes.貝茲曲線043.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線044" geometry={nodes.貝茲曲線044.geometry} material={nodes.貝茲曲線044.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線045" geometry={nodes.貝茲曲線045.geometry} material={nodes.貝茲曲線045.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線046" geometry={nodes.貝茲曲線046.geometry} material={nodes.貝茲曲線046.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線047" geometry={nodes.貝茲曲線047.geometry} material={nodes.貝茲曲線047.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線048" geometry={nodes.貝茲曲線048.geometry} material={nodes.貝茲曲線048.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線049" geometry={nodes.貝茲曲線049.geometry} material={nodes.貝茲曲線049.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線050" geometry={nodes.貝茲曲線050.geometry} material={nodes.貝茲曲線050.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線051" geometry={nodes.貝茲曲線051.geometry} material={nodes.貝茲曲線051.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線052" geometry={nodes.貝茲曲線052.geometry} material={nodes.貝茲曲線052.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線053" geometry={nodes.貝茲曲線053.geometry} material={nodes.貝茲曲線053.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線054" geometry={nodes.貝茲曲線054.geometry} material={nodes.貝茲曲線054.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線055" geometry={nodes.貝茲曲線055.geometry} material={nodes.貝茲曲線055.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線056" geometry={nodes.貝茲曲線056.geometry} material={nodes.貝茲曲線056.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線057" geometry={nodes.貝茲曲線057.geometry} material={nodes.貝茲曲線057.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線058" geometry={nodes.貝茲曲線058.geometry} material={nodes.貝茲曲線058.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線059" geometry={nodes.貝茲曲線059.geometry} material={nodes.貝茲曲線059.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線060" geometry={nodes.貝茲曲線060.geometry} material={nodes.貝茲曲線060.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線061" geometry={nodes.貝茲曲線061.geometry} material={nodes.貝茲曲線061.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線062" geometry={nodes.貝茲曲線062.geometry} material={nodes.貝茲曲線062.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線063" geometry={nodes.貝茲曲線063.geometry} material={nodes.貝茲曲線063.material} position={[2.5, 2.02, 13.14]} rotation={[0, 1.56, 0]} />
        <mesh name="貝茲曲線064" geometry={nodes.貝茲曲線064.geometry} material={nodes.貝茲曲線064.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線065" geometry={nodes.貝茲曲線065.geometry} material={nodes.貝茲曲線065.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線066" geometry={nodes.貝茲曲線066.geometry} material={nodes.貝茲曲線066.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線067" geometry={nodes.貝茲曲線067.geometry} material={nodes.貝茲曲線067.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線068" geometry={nodes.貝茲曲線068.geometry} material={nodes.貝茲曲線068.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線069" geometry={nodes.貝茲曲線069.geometry} material={nodes.貝茲曲線069.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線070" geometry={nodes.貝茲曲線070.geometry} material={nodes.貝茲曲線070.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線071" geometry={nodes.貝茲曲線071.geometry} material={nodes.貝茲曲線071.material} position={[-1.69, 2.02, 14.09]} rotation={[0, -0.03, 0]} />
        <mesh name="貝茲曲線072" geometry={nodes.貝茲曲線072.geometry} material={nodes.貝茲曲線072.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線073" geometry={nodes.貝茲曲線073.geometry} material={nodes.貝茲曲線073.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線074" geometry={nodes.貝茲曲線074.geometry} material={nodes.貝茲曲線074.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線075" geometry={nodes.貝茲曲線075.geometry} material={nodes.貝茲曲線075.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線076" geometry={nodes.貝茲曲線076.geometry} material={nodes.貝茲曲線076.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線077" geometry={nodes.貝茲曲線077.geometry} material={nodes.貝茲曲線077.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線078" geometry={nodes.貝茲曲線078.geometry} material={nodes.貝茲曲線078.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線079" geometry={nodes.貝茲曲線079.geometry} material={nodes.貝茲曲線079.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線080" geometry={nodes.貝茲曲線080.geometry} material={nodes.貝茲曲線080.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線081" geometry={nodes.貝茲曲線081.geometry} material={nodes.貝茲曲線081.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線082" geometry={nodes.貝茲曲線082.geometry} material={nodes.貝茲曲線082.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線083" geometry={nodes.貝茲曲線083.geometry} material={nodes.貝茲曲線083.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線084" geometry={nodes.貝茲曲線084.geometry} material={nodes.貝茲曲線084.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線085" geometry={nodes.貝茲曲線085.geometry} material={nodes.貝茲曲線085.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線086" geometry={nodes.貝茲曲線086.geometry} material={nodes.貝茲曲線086.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線087" geometry={nodes.貝茲曲線087.geometry} material={nodes.貝茲曲線087.material} position={[-4.64, 2.02, 9.88]} rotation={[Math.PI, -1.55, Math.PI]} />
        <mesh name="貝茲曲線088" geometry={nodes.貝茲曲線088.geometry} material={nodes.貝茲曲線088.material} position={[-0.44, 2.02, 9]} rotation={[-Math.PI, 0.04, -Math.PI]} />
        <mesh name="貝茲曲線089" geometry={nodes.貝茲曲線089.geometry} material={nodes.貝茲曲線089.material} position={[-0.44, 2.02, 9]} rotation={[-Math.PI, 0.04, -Math.PI]} />
        <mesh name="貝茲曲線090" geometry={nodes.貝茲曲線090.geometry} material={nodes.貝茲曲線090.material} position={[-0.44, 2.02, 9]} rotation={[-Math.PI, 0.04, -Math.PI]} />
        <mesh name="貝茲曲線091" geometry={nodes.貝茲曲線091.geometry} material={nodes.貝茲曲線091.material} position={[-0.44, 2.02, 9]} rotation={[-Math.PI, 0.04, -Math.PI]} />
        <mesh name="貝茲曲線092" geometry={nodes.貝茲曲線092.geometry} material={nodes.貝茲曲線092.material} position={[-0.44, 2.02, 9]} rotation={[-Math.PI, 0.04, -Math.PI]} />
        <mesh name="貝茲曲線093" geometry={nodes.貝茲曲線093.geometry} material={nodes.貝茲曲線093.material} position={[-0.44, 2.02, 9]} rotation={[-Math.PI, 0.04, -Math.PI]} />
        <mesh name="貝茲曲線094" geometry={nodes.貝茲曲線094.geometry} material={nodes.貝茲曲線094.material} position={[-0.44, 2.02, 9]} rotation={[-Math.PI, 0.04, -Math.PI]} />
        <mesh name="貝茲曲線095" geometry={nodes.貝茲曲線095.geometry} material={nodes.貝茲曲線095.material} position={[-0.44, 2.02, 9]} rotation={[-Math.PI, 0.04, -Math.PI]} />
        <mesh name="平面" geometry={nodes.平面.geometry} material={materials['材質.004']} position={[5.31, 0.29, 1.72]} />
        <mesh name="平面001" geometry={nodes.平面001.geometry} material={materials['材質.004']} position={[-4.19, 1.21, 2.2]} rotation={[0, 0.56, 0]} />
        <mesh name="平面002" geometry={nodes.平面002.geometry} material={nodes.平面002.material} position={[5.31, 0.27, 1.8]} />
        <mesh name="平面003" geometry={nodes.平面003.geometry} material={materials['材質.004']} position={[5.31, 0.29, 1.72]} />
        <mesh name="平面004" geometry={nodes.平面004.geometry} material={materials['材質.004']} position={[5.31, 0.29, 1.72]} />
        <mesh name="圓柱體358" geometry={nodes.圓柱體358.geometry} material={nodes.圓柱體358.material} position={[-3.38, 1.29, 3.56]} rotation={[Math.PI / 2, 0, 1.01]} scale={0.47} />
        <mesh name="立方體" geometry={nodes.立方體.geometry} material={materials['材質.006']} position={[-4.81, 4.4, -0.17]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="立方體001" geometry={nodes.立方體001.geometry} material={materials['材質.006']} position={[-4.81, 4.4, 4.04]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="立方體004" geometry={nodes.立方體004.geometry} material={nodes.立方體004.material} position={[8.99, 2.77, 5.37]} />
        <mesh name="立方體005" geometry={nodes.立方體005.geometry} material={materials['材質.008']} position={[8.99, 2.77, 5.37]} />
        <mesh name="立方體006" geometry={nodes.立方體006.geometry} material={materials['材質.008']} position={[8.99, 2.77, 5.37]} />
      </group>
    </group>
  )
}

useGLTF.preload('/kratoshouse.glb')
