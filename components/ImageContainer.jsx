
import React from 'react';
import { useContext } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="2xl"
                cursor="pointer"
                
            />

        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
            />

        </Flex>
    )
}

const ImageContainer = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {
            data && data.map((item) => (
                <Box key={item.id} width="910px" itemId={item.id} overflow="hidden">

                    <Image
                        src={item.url}
                        alt={item.name}
                        placeholder="blur"
                        blurDataURL={item.url}
                        height={500}
                        width={1000}
                        sizes="(max-width:500px) 100px, (max-width): 1023px, 400px, 1000px"
                    />
                </Box>
            ))
        }

    </ScrollMenu>
)



export default ImageContainer