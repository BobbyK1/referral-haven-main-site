"use client"

import { Icon } from "@chakra-ui/react"
import { AiOutlineMenu, AiOutlineHdd, AiOutlineGlobal, AiOutlineComment, AiOutlineMinus, AiOutlinePlus  } from 'react-icons/ai';


export const MenuIcon = (props) => {
    return <Icon as={AiOutlineMenu} {...props} />
}

export const Dashboard = (props) => {
    return <Icon as={AiOutlineHdd} {...props} />
}

export const Global = (props) => {
    return <Icon as={AiOutlineGlobal} {...props} />
}

export const Support = (props) => {
    return <Icon as={AiOutlineComment} {...props} />
}

export const Minus = (props) => {
    return <Icon as={AiOutlineMinus} {...props} />
}

export const Plus = (props) => {
    return <Icon as={AiOutlinePlus} {...props} />
}