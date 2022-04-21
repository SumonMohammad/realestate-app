import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import Image from "next/image"
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';
import noresult from "../assets/images/noresult.svg";
import { fetchApi, baseUrl } from '../utils/fetchApi';


const Search = ({properties}) => {
    const [searchFilters, setSearchFilters] = useState(false)

    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="grey.100"
                borderBottom="1px"
                borderColor="grey.200"
                justifyContent="center"
                p="2"
                alignItems="center"
                fontSize="lg"
                fontWeight="black"
                onClick={() => setSearchFilters(!searchFilters)}
            >
                <Text>Search Property by Filters</Text>
                <Icon w="7" paddingLeft="2" as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize="2xl" p="2" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {properties && properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            {properties && properties.length === 0 &&
                (<Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5">
                    <Image alt="no result" src={noresult} />
                    <Text marginTop="5" fontSize="2xl"> No Result Founds</Text>
                </Flex>)}


        </Box>
    )
}
export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }

export default Search;
