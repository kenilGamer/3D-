import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./avatar";
import { Avatar2 } from "./Kenil";
import { useControls } from "leva";

export const Experience = () => {
  const {animation} = useControls({
    animation:{
      value: "Typing",
      options: ["Typing","Falling","Standing"]
    }
  });
  return (
    <>
      <OrbitControls />
      <Sky/>
      <Environment preset="sunset"/>
      <group position-y={-1}>
      <ContactShadows
          opacity={0.62}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
      <Avatar2 animation={animation} />
      {
        animation === "Typing" &&  <mesh scale={[0.8,0.5,0.8]} position-y={0.20}>
        <boxGeometry  />
        <meshStandardMaterial color="white"/>
      </mesh>
      }
   
      {/* <ambientLight intensity={1}  /> */}
      <mesh receiveShadow scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
        <planeGeometry/>
        <meshStandardMaterial color="white"/>
      </mesh>
      </group>
    </>
  );
};
