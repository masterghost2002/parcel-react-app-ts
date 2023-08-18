import React,{ReactNode} from "react";
import Home from './pages/Home';
import { ChakraProvider } from "@chakra-ui/react";
import './App.css'
export default function App():ReactNode {
  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  )
}
