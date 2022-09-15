

import Text from '../components/text/Text'
import './Home.scss'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import Card from '../components/page/Card'
import Section from '../components/page/Section'
import Parser from 'rss-parser'
import './Home.scss'
import { useEffect, useState } from 'react'

const Home  = () => {
  const [episodes, setEpisodes] = useState([])
  const parser = new Parser() 

  useEffect(() => {
    const feed = parser.parseURL(`/api/feed`)
    debugger
  }, [])
  const isMobile = isMobileCheck()

  return (
    <Row className='home'>
        <Section className='sidebar'>
          <Text mono className='yellow title'>the network age</Text>
          <Card>
            <Text>
              The Network Age shines a light on our decentralized future. 
            </Text>
            <Text className='mt1'>
              Join the boys as they dissect and analyze everything from crypto technology and the blockchain economy to digital culture and borderless nations. 
            </Text>
          </Card>
          <Card>
            <Text large mono>Connect with Us</Text>

            <Text>
              Join the growing Network Age community on Urbit: ~mister-hoster-dozzod-hocwet/network-age-antechamber
            </Text>

            <Text>
              There, we chat all things Network Age, from digital nomadism to decentralized finance. Plus, you can get a sneak preview of upcoming podcast guests and suggest questions for our hosts. 
            </Text>

            <Text>
              Or, if you're not yet Urbit-pilled, find us on Twitter: 

              @basileSprotif

              @AlephDao

              @BichulR
            </Text>
          </Card>
        </Section>

        <Section className='main'>
          <Text large mono className='yellow'>Top Episodes</Text>
          <Card>
            <Text>
              Could we embed a feed that automatically updates this? 
            </Text>
          </Card>
          
        </Section>
        <Section>
          <Text large mono className='yellow'>Related Projects</Text>
          <Card>
            <Text large mono>Uqbar Network</Text>
            
            <Text>
              Uqbar is a seamless development environment and Zero-Knowledge rollup to Ethereum built atop the Urbit operating system. Together, Uqbar and Urbit unify a fragmented Web3 ecosystem to provide scalability, composability, and usability. 
            </Text>
            
            <Text>
              For more, visit the Uqbar website or join our Discord. 
            </Text>
          </Card>
          <Card>
            <Text large mono>Aleph DAO</Text>
          </Card>
          <Card>
            <Text large mono>Urbit</Text>

            <Text>
              Urbit is a decentralized peer-to-peer network and clean-slate OS designed to offer users full ownership of personal data and greater autonomy in the Web3 stack. 
            </Text>

            <Text>
              For help joining Urbit, explore these docs or DM any of the Network Age boys. 
            </Text>
          </Card>
          <Text large mono className='yellow'>Can't Get Enough?</Text>
          <Card>
            <Text large mono>Hanging Out with Uqbar</Text>

            <Text>
              Check out the hit Network Age spinoff, Hanging Out with Uqbar, where ~bichul-ritsen interviews members of the Uqbar team. Grab a drink and hang out. 
            </Text>
      
          </Card>
          <Card>
            <Text large mono>Snake Shack</Text>

            <Text>
              And if you're the type that would rather read than listen, head over to ~bichul-ritsen's Snake Shack Substack, where the noted curmudgeon discusses his failed attempts at trad humanism in a digital world. 
            </Text>
          </Card>
        </Section>
        </Row>


  )
}

export default Home