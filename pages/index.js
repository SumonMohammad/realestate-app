import Link from "next/link"
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Property from "../components/Property";

import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner = ({ purpose, title1, title2, desc1, desc2, linkName, buttonText, imageUrl }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" m="10" alignItems="center">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5"  >

        <Text color="gray.500" fontWeight="medium" fontSize="sm">{purpose}</Text>
        <Text fontWeight="bold" fontSize="3xl">{title1} <br /> {title2}</Text>
        <Text color="gray.700" fontSize="lg" paddingBottom="3" paddingTop="3">{desc1} <br />{desc2}</Text>

        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>

    </Flex>
  )

}

export default function Home({ propertiesForRent, propertiesForSale }) {

  return (
    <div >
       


      <Box>
        <Banner
          purpose="RENT A HOME"
          title1="Rental a homes for"
          title2="everyone"
          desc1='Explores appartsments, Villas, Homes'
          desc2="And More"
          buttonText="Explore renting"
          linkName="/search?purpose=for-rent"
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'

        />
        <Flex flexWrap="wrap">
          {propertiesForRent.map((property) => (<Property property={property} key={property.id} />))}
        </Flex>
        <Banner
          purpose='BUY A HOME'
          title1=' Find, Buy & Own Your'
          title2='Dream Home'
          desc1=' Explore from Apartments, land, builder floors,'
          desc2=' villas and more'
          buttonText='Explore Buying'
          linkName='/search?purpose=for-sale'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        />
        <Flex flexWrap="wrap">
          {propertiesForRent.map((property) => (<Property property={property} key={property.id} />))}
        </Flex>

      </Box>
    </div>
  )
}

export async function getStaticProps() {

  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }
}
